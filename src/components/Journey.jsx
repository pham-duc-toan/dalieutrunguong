import Image from "next/image";
import Reveal from "./common/Reveal";
import MoreLink from "./common/MoreLink";
import SectionHeading from "./common/SectionHeading";
import { anniversary, journey, featuredJourney } from "@/data/journey";

/** Thanh 1982 → 2027: Bệnh viện đã đi được 44/45 năm. */
function AnniversaryBar() {
  return (
    <Reveal className="annv">
      <div className="annv__end">
        <strong>1982</strong>
        <span>{anniversary.founded}</span>
      </div>
      <div className="annv__track" aria-hidden="true">
        <span className="annv__fill" />
        <span className="annv__dot" />
      </div>
      <div className="annv__end annv__end--goal">
        <strong>{anniversary.years} năm</strong>
        <span>{anniversary.date}</span>
      </div>
    </Reveal>
  );
}

function JourneyPhoto({ item, sizes }) {
  return (
    <div className="jcard__photo">
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition: item.imagePosition || "50% 50%" }}
      />
    </div>
  );
}

/**
 * Chặng đường 2022 – 2026, hướng tới kỷ niệm 45 năm.
 * variant="preview": trang Giới thiệu chung (6 dấu mốc có ảnh + nút xem thêm)
 * variant="full":    trang /chang-duong (toàn bộ dấu mốc theo từng năm)
 */
export default function Journey({ variant = "full" }) {
  const isPreview = variant === "preview";
  const Heading = isPreview ? "h3" : "h2";

  if (isPreview) {
    const items = featuredJourney.filter((item) => item.image);
    return (
      <section className="section section--tint journey" id="chang-duong">
        <div className="container">
          <SectionHeading
            number="03"
            kicker="Chặng đường 2022 – 2026"
            title={
              <>
                Hướng tới <em>45 năm</em> thành lập
              </>
            }
          />
          <AnniversaryBar />
          <div className="jgrid">
            {items.map((item, i) => (
              <Reveal as="article" className="jcard" delay={(i % 3) * 0.07} key={item.title}>
                <JourneyPhoto item={item} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px" />
                <div className="jcard__body">
                  <span className="jcard__date">
                    {item.date} · {item.tag}
                  </span>
                  <Heading>{item.title}</Heading>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <MoreLink href="/chang-duong">Xem toàn bộ chặng đường 2022 – 2026</MoreLink>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--flush journey journey--full">
      <div className="container">
        <AnniversaryBar />
        <div className="jyears">
          {journey.map((group) => (
            <div className="jyear" key={group.year}>
              <Reveal className="jyear__label">
                <span>{group.year}</span>
              </Reveal>
              <div className="jyear__items">
                {group.items.map((item) => (
                  <Reveal
                    as="article"
                    className={`jcard jcard--row ${item.image ? "" : "jcard--text"}`}
                    key={item.title}
                  >
                    {item.image && (
                      <JourneyPhoto item={item} sizes="(max-width: 760px) 100vw, 360px" />
                    )}
                    <div className="jcard__body">
                      <span className="jcard__date">
                        {item.date} · {item.tag}
                      </span>
                      <Heading>{item.title}</Heading>
                      <p>{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
          <div className="jyear jyear--goal">
            <Reveal className="jyear__label">
              <span>2027</span>
            </Reveal>
            <div className="jyear__items">
              <Reveal as="article" className="jgoal">
                <strong>{anniversary.date}</strong>
                <Heading>Hướng tới kỷ niệm 45 năm ngày thành lập</Heading>
                <p>
                  Bệnh viện hướng tới kỷ niệm 45 năm ngày thành lập Viện Da liễu Việt Nam ({anniversary.founded}), tiếp
                  tục phát huy nền tảng chuyên môn, đội ngũ và mạng lưới đã xây dựng qua nhiều thế hệ.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
