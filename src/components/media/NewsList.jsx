import Link from "next/link";
import Reveal from "../common/Reveal";
import Icon from "../common/Icon";
import Cover from "../common/Cover";
import { news } from "@/data/media";

/** "2026-09-10" → { day: "10", monthYear: "Th9 · 2026" } */
export function formatDate(isoDate) {
  const [year, month, day] = isoDate.split("-");
  return { day, monthYear: `Th${Number(month)} · ${year}`, full: `${day}/${month}/${year}` };
}

/** Thẻ tin tức – dẫn tới /tin-tuc/<slug>. */
export function NewsCard({ item, delay = 0, headingLevel: Heading = "h3" }) {
  const date = formatDate(item.date);

  return (
    <Reveal className="news__item" delay={delay}>
      <Link className="news-card" href={`/tin-tuc/${item.slug}`}>
        <div className="news-card__media">
          <Cover src={item.src} alt={item.title} tone={item.tone} sizes="(max-width: 560px) 100vw, 33vw" />
          <time className="news-card__date" dateTime={item.date}>
            <strong>{date.day}</strong>
            <small>{date.monthYear}</small>
          </time>
        </div>
        <div className="news-card__body">
          <span className="news-card__tag">{item.tag}</span>
          <Heading className="news-card__title">{item.title}</Heading>
          <p>{item.excerpt}</p>
          <span className="news-card__more">
            Xem chi tiết <Icon name="arrowRight" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/**
 * Danh sách tin tức.
 * - limit: số tin hiển thị (trang chủ/Media chỉ hiện vài tin mới nhất)
 * - title: tiêu đề khối (bỏ trống trên trang /tin-tuc vì đã có h1)
 */
export default function NewsList({ limit, title, headingLevel = "h3", items = news }) {
  const list = [...items].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);

  return (
    <div className="news">
      {title && (
        <Reveal className="news__head">
          <h2 className="news__title">{title}</h2>
          <Link href="/tin-tuc" className="news__all">
            Tất cả tin tức <Icon name="arrowRight" />
          </Link>
        </Reveal>
      )}
      <div className="news__grid">
        {list.map((item, i) => (
          <NewsCard key={item.slug} item={item} delay={i * 0.08} headingLevel={headingLevel} />
        ))}
      </div>
    </div>
  );
}
