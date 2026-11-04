import Image from "next/image";
import Reveal from "../common/Reveal";
import Icon from "../common/Icon";
import { directors } from "@/data/leaders";

/** "PGS.TS. Nguyễn Văn Thường" → "Nguyễn Văn Thường" (tên ngắn cho thanh điều hướng) */
const plainName = (name) => name.replace(/^([A-Za-z]{1,4}\.\s*)+/, "");

/**
 * Thanh kế nhiệm: chân dung các đời người đứng đầu nối nhau theo dòng thời gian, bấm để tới tiểu sử.
 * - basePath: trang chứa tiểu sử ("" khi đang ở /lanh-dao, "/lanh-dao" khi đặt ở trang chủ)
 * - title: nhãn nhỏ phía trên thanh (dùng ở trang chủ)
 */
export function SuccessionRail({ basePath = "", title }) {
  // Không dùng hiệu ứng hiện dần: khi bấm chuyển tới tiểu sử, nội dung phải hiện ngay
  return (
    <nav className="dirs__rail" aria-label="Các đời Viện trưởng – Giám đốc">
      {title && <p className="dirs__rail-title">{title}</p>}
      <ol>
        {directors.map((d, i) => (
          <li key={d.id}>
            <a href={`${basePath}#${d.id}`} className={d.current ? "is-current" : ""}>
              <span className="dirs__rail-photo">
                <Image
                  src={d.photo}
                  alt={d.name}
                  width={72}
                  height={72}
                  sizes="72px"
                  quality={90}
                  style={{ objectFit: "cover", objectPosition: "50% 15%" }}
                />
              </span>
              <span className="dirs__rail-num">{String(i + 1).padStart(2, "0")}</span>
              <strong>{plainName(d.name)}</strong>
              <small>{d.term}</small>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function DirectorProfile({ d, index }) {
  return (
    <article id={d.id} className={`dir ${index % 2 ? "dir--flip" : ""} ${d.current ? "dir--current" : ""}`}>
      <div className="dir__portrait">
        <span className="dir__num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="dir__frame">
          <Image
            src={d.photo}
            alt={`Chân dung ${d.name}`}
            fill
            sizes="(max-width: 960px) 70vw, 340px"
            quality={90}
            style={{ objectFit: "cover", objectPosition: "50% 15%" }}
          />
        </div>
        <span className="dir__term">{d.term}</span>
      </div>

      <div className="dir__body">
        <div className="dir__meta">
          {d.current && <span className="dir__badge">Đương nhiệm</span>}
          {d.life && <span>{d.life}</span>}
        </div>
        <h3 className="dir__name">{d.name}</h3>
        <ul className="dir__titles">
          {d.titles.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <p className="dir__summary">{d.summary}</p>

        <dl className="dir__facts">
          {d.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className={`dir__cols ${d.honors.length > 0 ? "" : "dir__cols--single"}`}>
          <div>
            <h4>Dấu ấn công tác</h4>
            <ul className="dir__hl">
              {d.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          {d.honors.length > 0 && (
            <div className="dir__honors">
              <h4>Khen thưởng tiêu biểu</h4>
              <ul>
                {d.honors.map((h) => (
                  <li key={h}>
                    <Icon name="starFilled" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/** Các đời người đứng đầu: thanh kế nhiệm + tiểu sử từng người (bố cục so le trái/phải). */
export default function Directors() {
  return (
    <div className="dirs">
      <Reveal className="dirs__head">
        <span className="section__kicker">Các đời Viện trưởng – Giám đốc</span>
        <h2 className="section__title">
          Sáu đời người đứng đầu, <em>một mạch nguồn</em> truyền thống
        </h2>
        <p>
          Từ Khoa Da liễu – Bệnh viện Bạch Mai (1954), Viện Da liễu Việt Nam (1982), Viện Da liễu Quốc gia (2006) đến
          Bệnh viện Da liễu Trung ương (2009) – mỗi thế hệ lãnh đạo đã đặt thêm một dấu mốc cho chuyên ngành Da liễu
          Việt Nam.
        </p>
      </Reveal>

      <SuccessionRail />

      <div className="dirs__list">
        {directors.map((d, i) => (
          <DirectorProfile d={d} index={i} key={d.id} />
        ))}
      </div>
    </div>
  );
}
