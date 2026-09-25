import Link from "next/link";
import Icon from "@/components/common/Icon";

export const metadata = {
  title: "Không tìm thấy trang",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="hero__bg" aria-hidden="true">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="grid-dots" />
      </div>
      <div className="container">
        <span className="not-found__code">404</span>
        <h1 className="page-hero__title">Không tìm thấy trang</h1>
        <p className="page-hero__lead">Trang bạn tìm có thể đã được di chuyển hoặc không còn tồn tại.</p>
        <Link href="/" className="btn btn--primary">
          Về trang chủ <Icon name="arrowRight" />
        </Link>
      </div>
    </section>
  );
}
