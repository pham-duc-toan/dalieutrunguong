import Reveal from "./common/Reveal";
import Icon from "./common/Icon";
import CountUp from "./common/CountUp";
import SectionHeading from "./common/SectionHeading";
import { featuredAchievement, achievements, awards, milestones } from "../data/hospital";
import "../styles/achievements.css";

/** 02. Thành tựu nổi bật */
export default function Achievements() {
  return (
    <section className="section section--dark" id="thanh-tuu">
      <div className="dark-deco" aria-hidden="true" />
      <div className="container">
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

        {/* Lưới thành tựu: 1 thẻ lớn + 4 thẻ nhỏ */}
        <div className="achv">
          <Reveal as="article" className="achv__card achv__card--feature">
            <span className="achv__tag">{featuredAchievement.tag}</span>
            <h3>{featuredAchievement.title}</h3>
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
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Phần thưởng */}
        <Reveal className="awards">
          <div className="awards__head">
            <h3>Phần thưởng cao quý</h3>
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

        {/* Dòng thời gian */}
        <div className="timeline">
          <Reveal as="h3" className="timeline__title">
            Hành trình phát triển
          </Reveal>
          <ol className="timeline__track">
            {milestones.map((m) => (
              <Reveal as="li" key={m.year}>
                <span className="timeline__year">{m.year}</span>
                <div>
                  <h4>{m.title}</h4>
                  <p>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
