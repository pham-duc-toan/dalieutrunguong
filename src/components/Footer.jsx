import Link from "next/link";
import Brand from "./common/Brand";
import BackToTop from "./BackToTop";
import { hospital } from "@/data/hospital";
import { navItems } from "@/data/navigation";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Brand light />
            <p>Bệnh viện chuyên khoa đầu ngành về Da liễu của Việt Nam, trực thuộc {hospital.authority}.</p>
          </div>
          <nav className="footer__col" aria-label="Liên kết chân trang">
            <h2>Khám phá</h2>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/tin-tuc">Tin tức &amp; sự kiện</Link>
          </nav>
          <address className="footer__col">
            <h2>Liên hệ</h2>
            <span>{hospital.address}</span>
            <span>Website: {hospital.website}</span>
          </address>
        </div>
        <div className="container footer__bottom">
          <span>
            © {new Date().getFullYear()} {hospital.name}. Bảo lưu mọi quyền.
          </span>
          <a href="#top" className="to-top">
            Lên đầu trang ↑
          </a>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
