import Reveal from "../common/Reveal";
import Avatar from "../common/Avatar";
import { currentLeaders, leaderGenerations } from "@/data/leaders";

/**
 * Lưới lãnh đạo đương nhiệm (người có featured: true được hiển thị thẻ lớn).
 * headingLevel: thẻ heading cho tên lãnh đạo ("h2" trên trang riêng, "h3" trên trang chủ).
 */
export function CurrentLeaders({ headingLevel: Heading = "h3" }) {
  return (
    <div className="leaders">
      {currentLeaders.map((person, i) => (
        <Reveal
          as="article"
          className={`leader ${person.featured ? "leader--featured" : ""}`}
          delay={i * 0.07}
          key={i}
        >
          <div className="leader__photo">
            <Avatar name={person.name} photo={person.photo} />
          </div>
          <div className="leader__body">
            <Heading>{person.name}</Heading>
            <p>{person.role}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Dòng thời gian các thế hệ lãnh đạo. */
export function Generations({ headingLevel: Heading = "h3" }) {
  return (
    <div className="gens">
      {leaderGenerations.map((gen, i) => (
        <Reveal as="article" className="gen" delay={i * 0.06} key={gen.period}>
          <div className="gen__marker">
            <span>{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="gen__card">
            <div className="gen__head">
              <span className="gen__period">{gen.period}</span>
              <Heading>{gen.title}</Heading>
              <p>{gen.note}</p>
            </div>
            <ul className="gen__people">
              {gen.people.map((person, j) => (
                <li key={j}>
                  <Avatar name={person.name} photo={person.photo} small />
                  <div>
                    <strong>{person.name}</strong>
                    <small>{person.role}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
