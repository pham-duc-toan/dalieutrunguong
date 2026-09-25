import { useState } from "react";
import Reveal from "./common/Reveal";
import Icon from "./common/Icon";
import Placeholder from "./common/Placeholder";
import SectionHeading from "./common/SectionHeading";
import Lightbox from "./media/Lightbox";
import NewsList from "./media/NewsList";
import { mediaItems } from "../data/media";
import "../styles/media.css";

const FILTERS = [
  { id: "all", label: "Tất cả" },
  { id: "photo", label: "Hình ảnh" },
  { id: "video", label: "Video" },
];

function MediaCard({ item, delay, onOpen }) {
  const sizeClass = item.size ? `m-item--${item.size}` : "";

  return (
    <Reveal as="button" className={`m-item ${sizeClass}`} data-type={item.type} delay={delay} onClick={onOpen}>
      <div className="m-item__media">
        {item.src ? <img src={item.src} alt={item.title} loading="lazy" /> : <Placeholder tone={item.tone} />}
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

/** 04. Media */
export default function Media() {
  const [filter, setFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const visibleItems = mediaItems.filter((item) => filter === "all" || item.type === filter);

  return (
    <section className="section section--tint" id="media">
      <div className="container">
        <Reveal className="section__head section__head--split">
          <SectionHeading
            animate={false}
            number="04"
            kicker="Media"
            title={
              <>
                Hình ảnh &amp; <em>khoảnh khắc</em>
              </>
            }
          />
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
        </Reveal>

        <div className="gallery">
          {visibleItems.map((item, i) => (
            <MediaCard key={item.title} item={item} delay={(i % 4) * 0.06} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>

        <NewsList />
      </div>

      <Lightbox items={visibleItems} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </section>
  );
}
