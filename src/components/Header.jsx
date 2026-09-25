"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./common/Brand";
import { navItems } from "@/data/navigation";
import { useScrolledPast } from "@/hooks/useScroll";

export default function Header() {
  const pathname = usePathname();
  const scrolled = useScrolledPast(20);
  const [menuOpen, setMenuOpen] = useState(false);

  // Đóng menu khi chuyển trang
  useEffect(() => setMenuOpen(false), [pathname]);

  // Khóa cuộn trang khi mở menu trên mobile
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <Brand />

        <nav className={`nav ${menuOpen ? "is-open" : ""}`} id="nav" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav__link ${isActive(item.href) ? "is-active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
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
