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

/** Ảnh đại diện; nếu chưa có ảnh thì hiển thị chữ cái đầu. */
export default function Avatar({ name, photo, small = false }) {
  const className = `avatar ${small ? "avatar--sm" : ""}`;

  if (photo) {
    return <img className={className} src={photo} alt={name} loading="lazy" />;
  }
  return (
    <span className={`${className} avatar--ph`} aria-hidden="true">
      {getInitials(name)}
    </span>
  );
}
