import Reveal from "./common/Reveal";
import Icon from "./common/Icon";
import CountUp from "./common/CountUp";
import MoreLink from "./common/MoreLink";
import SectionHeading from "./common/SectionHeading";
import { featuredAchievement, achievements, awards, milestones } from "@/data/hospital";

/** Lưới thành tựu: 1 thẻ lớn + 4 thẻ nhỏ */
export function AchievementGrid({ headingLevel: Heading = "h2" }) {
  return (
    <div className="achv">
      <Reveal as="article" className="achv__card achv__card--feature">
        <span className="achv__tag">{featuredAchievement.tag}</span>
        <Heading>{featuredAchievement.title}</Heading>
        <p>{featuredAchievement.text}</p>
        <div className="achv__big">
          <CountUp to={featuredAchievement.year} />
          <small>{featuredAchievement.yearLabel}</small>
        </div>
      </Reveal>

      {achievements.map((item, i) => (
        <Reveal as="article" className="achv__card" delay={(i + 1) * 0.06} key={item.title}>
          <span className="achv__ic">
            <Icon name={item.icon} />
          </span>
          <Heading>{item.title}</Heading>
          <p>{item.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** Phần thưởng cao quý */
export function AwardsPanel({ headingLevel: Heading = "h2", className = "" }) {
  return (
    <Reveal className={`awards ${className}`.trim()} id="phan-thuong">
      <div className="awards__head">
        <Heading>Phần thưởng cao quý</Heading>
        <p>Được Đảng, Nhà nước và Bộ Y tế ghi nhận qua nhiều danh hiệu, phần thưởng.</p>
      </div>
      <ul className="awards__list">
        {awards.map((award) => (
          <li key={award.title}>
            <span className="medal" />
            <div>
              <strong>{award.title}</strong>
              <small>{award.note}</small>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Dòng thời gian các dấu mốc 1954 → nay */
export function MilestoneTimeline({ headingLevel: Heading = "h2", title = "Hành trình phát triển", className = "" }) {
  return (
    <div className={`timeline ${className}`.trim()} id="lich-su">
      {title && (
        <Reveal as={Heading} className="timeline__title">
          {title}
        </Reveal>
      )}
      <ol className="timeline__track">
        {milestones.map((m) => (
          <Reveal as="li" key={m.year}>
            <span className="timeline__year">{m.year}</span>
            <div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/** Nền tối của mục Thành tựu (dùng chung cho trang /thanh-tuu và các khu Phòng truyền thống) */
export function DarkSection({ id, flush = false, children }) {
  return (
    <section className={`section section--dark ${flush ? "section--flush" : ""}`.trim()} id={id}>
      <div className="dark-deco" aria-hidden="true" />
      <div className="container">{children}</div>
    </section>
  );
}

/**
 * 02. Thành tựu nổi bật
 * variant="preview": trang Giới thiệu chung (chỉ lưới thành tựu + nút xem thêm)
 * variant="full":    trang /thanh-tuu (thêm phần thưởng + hành trình phát triển)
 */
export default function Achievements({ variant = "full" }) {
  const isPreview = variant === "preview";
  // Thứ bậc heading: bản tóm tắt đã có h2 cho mục → thẻ dùng h3; trang riêng có h1 → thẻ dùng h2
  const Heading = isPreview ? "h3" : "h2";

  return (
    <DarkSection id="thanh-tuu">
      {isPreview && (
        <SectionHeading
          light
          number="02"
          kicker="Thành tựu nổi bật"
          title={
            <>
              Dấu ấn <em>hơn 40 năm</em> xây dựng và trưởng thành
            </>
          }
        />
      )}

      <AchievementGrid headingLevel={Heading} />

      {isPreview ? (
        <MoreLink href="/thanh-tuu">Xem tất cả thành tựu</MoreLink>
      ) : (
        <>
          <AwardsPanel headingLevel={Heading} />
          <MilestoneTimeline headingLevel={Heading} />
        </>
      )}
    </DarkSection>
  );
}
