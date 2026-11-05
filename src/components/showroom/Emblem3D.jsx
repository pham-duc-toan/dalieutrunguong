"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Biểu tượng 45 năm và cành liễu dạng 3D: tự xoay, kéo chuột/chạm để xoay tay.
 * three.js chỉ được nạp khi khối nằm trong màn hình; tạm dừng vẽ khi cuộn đi chỗ khác.
 */
export default function Emblem3D({ className = "" }) {
  const hostRef = useRef(null);
  const [state, setState] = useState("idle"); // idle | loading | ready | failed

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    let disposed = false;
    let cleanup = () => {};

    const start = async () => {
      setState("loading");
      try {
        const [THREE, { OrbitControls }, { RoomEnvironment }, { FontLoader }, { TextGeometry }, { RoundedBoxGeometry }, fontJson, { buildEmblem }] =
          await Promise.all([
            import("three"),
            import("three/examples/jsm/controls/OrbitControls.js"),
            import("three/examples/jsm/environments/RoomEnvironment.js"),
            import("three/examples/jsm/loaders/FontLoader.js"),
            import("three/examples/jsm/geometries/TextGeometry.js"),
            import("three/examples/jsm/geometries/RoundedBoxGeometry.js"),
            import("three/examples/fonts/helvetiker_bold.typeface.json"),
            import("./emblemScene"),
          ]);
        if (disposed) return;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        // Vẽ tối thiểu gấp đôi số điểm ảnh rồi thu nhỏ → cạnh mịn cả trên màn hình thường
        renderer.setPixelRatio(Math.min(3, Math.max(2, window.devicePixelRatio)));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.05;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        host.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const pmrem = new THREE.PMREMGenerator(renderer);
        const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
        scene.environment = envTexture;

        const key = new THREE.DirectionalLight(0xffffff, 2.2);
        key.position.set(2.5, 5, 3.5);
        key.castShadow = true;
        key.shadow.mapSize.set(2048, 2048);
        key.shadow.radius = 4;
        key.shadow.bias = -0.0004;
        Object.assign(key.shadow.camera, { left: -2.5, right: 2.5, top: 3.5, bottom: -0.5, near: 0.5, far: 15 });
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x8fd0ff, 1.4);
        rim.position.set(-3, 2, -2.5);
        scene.add(rim);

        const font = new FontLoader().parse(fontJson.default ?? fontJson);
        const { group: model, height } = buildEmblem(THREE, TextGeometry, RoundedBoxGeometry, font);
        scene.add(model);

        const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
        const targetY = height * 0.47;
        camera.position.set(0, targetY + 0.9, height * 2.75);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.4;
        controls.minPolarAngle = Math.PI * 0.3;
        controls.maxPolarAngle = Math.PI * 0.55;
        controls.target.set(0, targetY, 0);

        const resize = () => {
          const { clientWidth: w, clientHeight: h } = host;
          if (!w || !h) return;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(host);

        let visible = true;
        const io = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
        });
        io.observe(host);

        let raf = 0;
        const tick = () => {
          raf = requestAnimationFrame(tick);
          if (!visible || document.hidden) return;
          controls.update();
          renderer.render(scene, camera);
        };
        tick();
        setState("ready");

        cleanup = () => {
          cancelAnimationFrame(raf);
          ro.disconnect();
          io.disconnect();
          controls.dispose();
          scene.traverse((obj) => {
            if (obj.geometry) obj.geometry.dispose();
            if (obj.material) [].concat(obj.material).forEach((m) => m.dispose());
          });
          envTexture.dispose();
          pmrem.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      } catch {
        if (!disposed) setState("failed");
      }
    };

    // Chỉ nạp khi khối sắp hiện ra trong màn hình
    const trigger = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trigger.disconnect();
          start();
        }
      },
      { rootMargin: "200px" }
    );
    trigger.observe(host);

    return () => {
      disposed = true;
      trigger.disconnect();
      cleanup();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={`emblem3d ${className}`.trim()}
      data-state={state}
      role="img"
      aria-label="Biểu tượng 45 năm và cành liễu dạng 3D, kéo để xoay"
    >
      {state !== "ready" && state !== "failed" && <span className="emblem3d__loading">45</span>}
    </div>
  );
}
