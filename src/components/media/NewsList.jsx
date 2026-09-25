import Reveal from "../common/Reveal";
import Icon from "../common/Icon";
import Placeholder from "../common/Placeholder";
import { news } from "../../data/media";

/** "2026-09-10" → { day: "10", monthYear: "Th9 · 2026" } */
function formatDate(isoDate) {
  const [year, month, day] = isoDate.split("-");
  return { day, monthYear: `Th${Number(month)} · ${year}` };
}

export default function NewsList() {
  return (
    <div className="news">
      <Reveal as="h3" className="news__title">
        Tin tức &amp; sự kiện
      </Reveal>
      <div className="news__grid">
        {news.map((item, i) => {
          const date = formatDate(item.date);
          return (
            <Reveal as="a" className="news-card" href={item.url} delay={i * 0.08} key={item.title}>
              <div className="news-card__media">
                {item.src ? <img src={item.src} alt="" loading="lazy" /> : <Placeholder tone={item.tone} />}
                <span className="news-card__date">
                  <strong>{date.day}</strong>
                  <small>{date.monthYear}</small>
                </span>
              </div>
              <div className="news-card__body">
                <span className="news-card__tag">{item.tag}</span>
                <h4>{item.title}</h4>
                <p>{item.excerpt}</p>
                <span className="news-card__more">
                  Xem chi tiết <Icon name="arrowRight" />
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
