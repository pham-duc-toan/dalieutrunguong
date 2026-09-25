"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Reveal from "../common/Reveal";
import { CurrentLeaders, Generations } from "./LeaderLists";

const TABS = [
  { id: "current", label: "Lãnh đạo đương nhiệm" },
  { id: "history", label: "Các thế hệ lãnh đạo" },
];

/**
 * Hai tab: lãnh đạo đương nhiệm / các thế hệ lãnh đạo.
 * Cả hai panel đều có trong HTML (panel ẩn dùng thuộc tính hidden) để Google đọc được đủ nội dung.
 */
export default function LeadershipTabs() {
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
    <>
      <Reveal className="tabs" role="tablist" aria-label="Lãnh đạo">
        {TABS.map((tab) => {
          const selected = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              ref={(el) => (tabRefs.current[tab.id] = el)}
              className={`tab ${selected ? "is-active" : ""}`}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
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

      <div
        className="tab-panel"
        id="panel-current"
        role="tabpanel"
        aria-labelledby="tab-current"
        hidden={activeTab !== "current"}
      >
        <CurrentLeaders headingLevel="h2" />
      </div>
      <div
        className="tab-panel"
        id="panel-history"
        role="tabpanel"
        aria-labelledby="tab-history"
        hidden={activeTab !== "history"}
      >
        <Generations headingLevel="h2" />
      </div>
    </>
  );
}
