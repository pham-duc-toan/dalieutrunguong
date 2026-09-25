"use client";

import { useState } from "react";
import Reveal from "../common/Reveal";
import Icon from "../common/Icon";
import Cover from "../common/Cover";
import Lightbox from "./Lightbox";
import { mediaItems } from "@/data/media";

const FILTERS = [
  { id: "all", label: "Tất cả" },
  { id: "photo", label: "Hình ảnh" },
  { id: "video", label: "Video" },
];

function MediaCard({ item, delay, onOpen }) {
  const sizeClass = item.size ? `m-item--${item.size}` : "";

  return (
    <Reveal
      as="button"
      className={`m-item ${sizeClass}`}
      data-type={item.type}
      delay={delay}
      onClick={onOpen}
      aria-label={`${item.type === "video" ? "Xem video" : "Xem ảnh"}: ${item.title}`}
    >
      <div className="m-item__media">
        <Cover src={item.src} alt={item.title} tone={item.tone} sizes="(max-width: 960px) 50vw, 25vw" />
        {item.type === "video" && (
          <span className="m-play" aria-hidden="true">
            <Icon name="play" />
          </span>
        )}
      </div>
      <div className="m-item__overlay">
        <span className="m-item__tag">
          {item.type === "video" ? "Video" : "Ảnh"} · {item.tag}
        </span>
        <span className="m-item__title">{item.title}</span>
      </div>
    </Reveal>
  );
}

/** Bộ lọc + lưới ảnh/video + cửa sổ xem phóng to. */
export default function MediaGallery() {
  const [filter, setFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const visibleItems = mediaItems.filter((item) => filter === "all" || item.type === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Lọc media">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`filter ${filter === f.id ? "is-active" : ""}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gallery">
        {visibleItems.map((item, i) => (
          <MediaCard key={item.title} item={item} delay={(i % 4) * 0.06} onOpen={() => setOpenIndex(i)} />
        ))}
      </div>

      <Lightbox items={visibleItems} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </>
  );
}
