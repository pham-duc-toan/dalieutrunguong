import { useLayoutEffect, useRef, useState } from "react";
import Reveal from "./common/Reveal";
import Avatar from "./common/Avatar";
import SectionHeading from "./common/SectionHeading";
import { currentLeaders, leaderGenerations } from "../data/leaders";
import "../styles/leadership.css";

const TABS = [
  { id: "current", label: "Lãnh đạo đương nhiệm" },
  { id: "history", label: "Các thế hệ lãnh đạo" },
];

/** Lưới lãnh đạo đương nhiệm (người có featured: true được hiển thị thẻ lớn). */
function CurrentLeaders() {
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
            <h3>{person.name}</h3>
            <p>{person.role}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Dòng thời gian các thế hệ lãnh đạo. */
function Generations() {
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
              <h3>{gen.title}</h3>
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

/** 03. Thế hệ Đảng ủy – Giám đốc */
export default function Leadership() {
  const [activeTab, setActiveTab] = useState("current");
  const tabRefs = useRef({});
  const [ink, setInk] = useState({ width: 0, left: 0 });

  // Thanh nền trượt theo tab đang chọn
  useLayoutEffect(() => {
    const update = () => {
      const el = tabRefs.current[activeTab];
      if (el) setInk({ width: el.offsetWidth, left: el.offsetLeft });
    };
    update();
    document.fonts?.ready.then(update);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeTab]);

  const onKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const index = TABS.findIndex((t) => t.id === activeTab);
    const next = TABS[(index + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length];
    setActiveTab(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <section className="section" id="lanh-dao">
      <div className="container">
        <SectionHeading
          number="03"
          kicker="Thế hệ Đảng ủy – Giám đốc"
          title={
            <>
              Những người <em>dẫn dắt</em> qua từng chặng đường
            </>
          }
        />

        <Reveal className="tabs" role="tablist" aria-label="Lãnh đạo">
          {TABS.map((tab) => {
            const selected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[tab.id] = el)}
                className={`tab ${selected ? "is-active" : ""}`}
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={onKeyDown}
              >
                {tab.label}
              </button>
            );
          })}
          <span
            className="tabs__ink"
            aria-hidden="true"
            style={{ width: ink.width, transform: `translateX(${ink.left}px)` }}
          />
        </Reveal>

        <div className="tab-panel" role="tabpanel" key={activeTab}>
          {activeTab === "current" ? <CurrentLeaders /> : <Generations />}
        </div>

        <Reveal as="blockquote" className="quote">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <path d="M20 12c-7 2-12 8-12 16v8h12V24h-6c0-5 3-8 7-9zM40 12c-7 2-12 8-12 16v8h12V24h-6c0-5 3-8 7-9z" />
          </svg>
          <p>
            Mỗi thế hệ lãnh đạo là một viên gạch vững chắc, kế thừa truyền thống, đổi mới tư duy, đưa Bệnh viện Da liễu
            Trung ương phát triển không ngừng vì sức khỏe nhân dân.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
