"use client";

import Icon from "./common/Icon";
import { useScrolledPast } from "@/hooks/useScroll";

export default function BackToTop() {
  const visible = useScrolledPast(700);

  return (
    <button
      className={`back-top ${visible ? "is-visible" : ""}`}
      aria-label="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Icon name="arrowUp" />
    </button>
  );
}
