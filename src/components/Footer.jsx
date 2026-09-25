import Brand from "./common/Brand";
import Icon from "./common/Icon";
import { hospital } from "../data/hospital";
import { navItems } from "../data/navigation";
import { useScrolledPast } from "../hooks/useScroll";
import "../styles/footer.css";

function BackToTop() {
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

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Brand light />
            <p>Bệnh viện chuyên khoa đầu ngành về Da liễu của Việt Nam, trực thuộc {hospital.authority}.</p>
          </div>
          <div className="footer__col">
            <h4>Khám phá</h4>
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer__col">
            <h4>Liên hệ</h4>
            <span>{hospital.address}</span>
            <span>Website: {hospital.website}</span>
          </div>
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
