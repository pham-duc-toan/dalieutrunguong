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
        const THREE = await import("three");
        const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
        const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
        if (disposed) return;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        host.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
        camera.position.set(0, 0.9, 4.6);

        scene.add(new THREE.HemisphereLight(0xffffff, 0x9fb7cf, 1.5));
        const key = new THREE.DirectionalLight(0xffffff, 2.4);
        key.position.set(2.5, 3.5, 3);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x8fd0ff, 1.2);
        rim.position.set(-3, 1.5, -2);
        scene.add(rim);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.6;
        controls.minPolarAngle = Math.PI * 0.28;
        controls.maxPolarAngle = Math.PI * 0.56;
        controls.target.set(0, 0, 0);

        const gltf = await new GLTFLoader().loadAsync("/models/bieu-tuong-45-nam.glb");
        if (disposed) {
          renderer.dispose();
          return;
        }
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const scale = 1.9 / Math.max(size.x, size.y, size.z);
        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));
        scene.add(model);

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
