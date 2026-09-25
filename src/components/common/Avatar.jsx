import Image from "next/image";

/** Lấy 2 chữ cái đầu (bỏ học hàm, học vị): "PGS.TS. Lê Hữu Doanh" → "LD" */
function getInitials(name) {
  const words = name
    .replace(/([A-Z]{1,4}\.\s*)+/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "?";
  const first = words.length > 1 ? words[0][0] : "";
  return (first + words[words.length - 1][0]).toUpperCase();
}

/**
 * Ảnh đại diện; nếu chưa có ảnh thì hiển thị chữ cái đầu.
 * - small: ảnh tròn 48px
 * - mặc định: ảnh phủ kín khung cha (.leader__photo)
 */
export default function Avatar({ name, photo, small = false }) {
  if (photo) {
    return small ? (
      <Image className="avatar avatar--sm" src={photo} alt={name} width={48} height={48} />
    ) : (
      <Image src={photo} alt={name} fill sizes="(max-width: 560px) 50vw, 25vw" style={{ objectFit: "cover" }} />
    );
  }
  return (
    <span className={`avatar avatar--ph ${small ? "avatar--sm" : ""}`} aria-hidden="true">
      {getInitials(name)}
    </span>
  );
}
