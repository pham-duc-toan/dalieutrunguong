/**
 * Dựng biểu tượng "45 năm và cành liễu" bằng hình khối thật (không dùng file mô hình):
 * bệ tròn trắng có chỉ xanh, khối số 45 đùn nổi có vát cạnh, chữ NĂM xanh và cành liễu cong.
 * Màu theo nhận diện: xanh #3971b6, trắng, bạc xanh #a8bccd.
 */

const BLUE = 0x3971b6;
const WHITE = 0xffffff;
const STONE = 0xf1f3f2;
const SILVER = 0xa8bccd;

export function buildEmblem(THREE, TextGeometry, RoundedBoxGeometry, font) {
  const group = new THREE.Group();

  const stone = new THREE.MeshPhysicalMaterial({ color: STONE, roughness: 0.32, clearcoat: 0.5, clearcoatRoughness: 0.25 });
  const white = new THREE.MeshPhysicalMaterial({ color: WHITE, roughness: 0.22, clearcoat: 0.8, clearcoatRoughness: 0.15 });
  const blue = new THREE.MeshPhysicalMaterial({ color: BLUE, roughness: 0.3, metalness: 0.15, clearcoat: 0.6, clearcoatRoughness: 0.2 });
  const silver = new THREE.MeshPhysicalMaterial({ color: SILVER, roughness: 0.28, metalness: 0.45, clearcoat: 0.4 });

  const add = (geometry, material, y = 0) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = y;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };

  // Bệ: khối đá – chỉ xanh – mặt bệ
  add(new THREE.CylinderGeometry(1.5, 1.56, 0.3, 160), stone, 0.15);
  add(new THREE.CylinderGeometry(1.44, 1.44, 0.05, 160), blue, 0.325);
  add(new THREE.CylinderGeometry(1.34, 1.4, 0.12, 160), stone, 0.41);
  const top = 0.47;

  // Chữ đùn khối: mặt trước trắng (hoặc xanh), cạnh và vát màu xanh
  const text = (str, size, depth, faceMaterial) => {
    const geometry = new TextGeometry(str, {
      font,
      size,
      depth,
      curveSegments: 28,
      bevelEnabled: true,
      bevelThickness: size * 0.028,
      bevelSize: size * 0.018,
      bevelSegments: 6,
    });
    geometry.computeBoundingBox();
    return { geometry, box: geometry.boundingBox, materials: [faceMaterial, blue] };
  };

  // Bậc đỡ: khối trắng bo cạnh, mặt trước gắn chữ NĂM
  const n45 = text("45", 1.3, 0.34, white);
  const w45 = n45.box.max.x - n45.box.min.x;
  const riserH = 0.36;
  const riserD = 0.62;
  const riser = add(new RoundedBoxGeometry(w45 + 0.3, riserH, riserD, 6, 0.06), white, top + riserH / 2);
  riser.position.set(-0.2, top + riserH / 2, -0.03);

  // Khối số 45 đứng trên bậc đỡ
  const mesh45 = new THREE.Mesh(n45.geometry, n45.materials);
  mesh45.position.set(-0.2 - w45 / 2 - n45.box.min.x, top + riserH - n45.box.min.y, -0.2);
  mesh45.castShadow = true;
  mesh45.receiveShadow = true;
  group.add(mesh45);

  // Chữ NĂM: dựng từng chữ để đặt dấu trăng lên chữ A
  const size = 0.24;
  const scale = size / font.data.resolution;
  const letters = ["N", "A", "M"].map((c) => ({ c, ...text(c, size, 0.1, blue), advance: font.data.glyphs[c].ha * scale }));
  const gap = size * 0.08;
  const total = letters.reduce((sum, l) => sum + l.advance, 0) + gap * (letters.length - 1);
  let x = -0.2 - total / 2;
  const wordY = top + riserH / 2 - size * 0.45;
  const wordZ = -0.03 + riserD / 2 - 0.02;
  for (const l of letters) {
    const mesh = new THREE.Mesh(l.geometry, l.materials);
    mesh.position.set(x, wordY, wordZ);
    mesh.castShadow = true;
    group.add(mesh);
    if (l.c === "A") {
      const breve = new THREE.Mesh(new THREE.TorusGeometry(size * 0.17, size * 0.045, 16, 48, Math.PI), blue);
      breve.rotation.z = Math.PI; // nửa vòng cung hướng xuống thành dấu trăng
      breve.position.set(x + (l.box.min.x + l.box.max.x) / 2, wordY + l.box.max.y + size * 0.28, wordZ + 0.05);
      breve.castShadow = true;
      group.add(breve);
    }
    x += l.advance + gap;
  }

  // Cành liễu: thân cong + lá thuôn xen kẽ hai bên
  const stem = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.98, top, -0.1),
    new THREE.Vector3(1.08, top + 0.65, -0.05),
    new THREE.Vector3(1.06, top + 1.35, 0),
    new THREE.Vector3(0.9, top + 1.95, 0.05),
    new THREE.Vector3(0.66, top + 2.35, 0.08),
  ]);
  add(new THREE.TubeGeometry(stem, 120, 0.024, 12), silver);

  const leafGeometry = new THREE.SphereGeometry(1, 24, 16);
  const up = new THREE.Vector3(0, 1, 0);
  const count = 26;
  for (let i = 0; i < count; i++) {
    const t = 0.1 + (i / (count - 1)) * 0.9;
    const side = i % 2 === 0 ? 1 : -1;
    const point = stem.getPointAt(t);
    const tangent = stem.getTangentAt(t);
    const normal = new THREE.Vector3(-tangent.y, tangent.x, 0).normalize().multiplyScalar(side);
    const dir = tangent.clone().multiplyScalar(0.6).add(normal.multiplyScalar(0.8)).normalize();
    dir.z += side * 0.18;
    dir.normalize();
    const length = 0.2 * (1 - t * 0.45);

    const leaf = new THREE.Mesh(leafGeometry, silver);
    leaf.scale.set(length * 0.28, length, length * 0.12);
    leaf.quaternion.setFromUnitVectors(up, dir);
    leaf.position.copy(point).addScaledVector(dir, length * 0.95);
    leaf.castShadow = true;
    group.add(leaf);
  }
  // Lá ngọn
  const tip = new THREE.Mesh(leafGeometry, silver);
  const tipDir = stem.getTangentAt(1);
  tip.scale.set(0.035, 0.12, 0.015);
  tip.quaternion.setFromUnitVectors(up, tipDir);
  tip.position.copy(stem.getPointAt(1)).addScaledVector(tipDir, 0.1);
  group.add(tip);

  // Căn giữa theo phương ngang, đáy bệ ở y = 0
  const box = new THREE.Box3().setFromObject(group);
  const center = box.getCenter(new THREE.Vector3());
  group.position.x -= center.x;
  group.position.z -= center.z;

  return { group, height: box.max.y - box.min.y };
}
