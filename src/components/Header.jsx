import { useEffect, useState } from "react";
import Brand from "./common/Brand";
import { navItems } from "../data/navigation";
import { useActiveSection, useScrolledPast } from "../hooks/useScroll";
import "../styles/header.css";

const sectionIds = navItems.map((item) => item.id);

export default function Header() {
  const scrolled = useScrolledPast(20);
  const activeId = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  // Khóa cuộn trang khi mở menu trên mobile
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <Brand />

        <nav className={`nav ${menuOpen ? "is-open" : ""}`} id="nav" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${activeId === item.id ? "is-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`burger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
          aria-controls="nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
