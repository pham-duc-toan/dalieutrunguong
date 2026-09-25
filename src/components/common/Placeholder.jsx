/** Khung màu giữ chỗ khi chưa có ảnh thật. tone: teal | sand | mint | ink | rose */
export default function Placeholder({ tone = "teal", label, large = false }) {
  return (
    <div className={`ph ph--${tone} ${large ? "ph--lg" : ""}`}>
      {label && <span>{label}</span>}
    </div>
  );
}
