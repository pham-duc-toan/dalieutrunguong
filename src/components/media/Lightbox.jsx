import { useEffect, useRef } from "react";
import Placeholder from "../common/Placeholder";

/** Nội dung chính của lightbox: video YouTube, ảnh, hoặc khung giữ chỗ. */
function Stage({ item }) {
  if (item.type === "video" && item.youtube) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${item.youtube}?autoplay=1&rel=0`}
        title={item.title}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }
  if (item.type === "photo" && item.src) {
    return <img src={item.src} alt={item.title} />;
  }
  const label = item.type === "video" ? "Video đang được cập nhật" : "Hình ảnh đang được cập nhật";
  return <Placeholder tone={item.tone} label={label} large />;
}

/**
 * Cửa sổ xem ảnh/video phóng to.
 * items: danh sách đang hiển thị; index: vị trí đang xem (null = đóng).
 */
export default function Lightbox({ items, index, onChange, onClose }) {
  const closeRef = useRef(null);
  const isOpen = index !== null;
  const item = isOpen ? items[index] : null;

  const step = (delta) => onChange((index + delta + items.length) % items.length);

  // Khi mở: khóa cuộn trang, đưa focus vào nút đóng. Khi đóng: trả focus về chỗ cũ.
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    document.body.classList.add("no-scroll");
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("no-scroll");
      previousFocus?.focus();
    };
  }, [isOpen]);

  // Phím tắt: Esc đóng, ← → chuyển ảnh
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  if (!item) return null;

  return (
    <div
      className="lightbox is-open"
      role="dialog"
      aria-modal="true"
      aria-label="Xem media"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} className="lightbox__close" aria-label="Đóng" onClick={onClose}>
        ×
      </button>
      <button className="lightbox__nav lightbox__nav--prev" aria-label="Trước" onClick={() => step(-1)}>
        ‹
      </button>
      <figure className="lightbox__figure">
        <div className="lightbox__stage">
          <Stage item={item} />
        </div>
        <figcaption>
          <span>{item.tag}</span>
          {item.title}
          <em>
            {index + 1} / {items.length}
          </em>
        </figcaption>
      </figure>
      <button className="lightbox__nav lightbox__nav--next" aria-label="Sau" onClick={() => step(1)}>
        ›
      </button>
    </div>
  );
}
