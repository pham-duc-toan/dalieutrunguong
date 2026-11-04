import Image from "next/image";
import Link from "next/link";
import Reveal from "../common/Reveal";
import Icon from "../common/Icon";

/** Dải giới thiệu Phòng truyền thống 360° ở cuối trang chủ. */
export default function ShowroomBanner() {
  return (
    <section className="section section--dark showroom-banner" id="phong-truyen-thong">
      <div className="dark-deco" aria-hidden="true" />
      <div className="container showroom-banner__inner">
        <Reveal className="showroom-banner__text">
          <span className="section__kicker">Phòng truyền thống · 360°</span>
          <h2 className="section__title">
            Đi qua <em>45 năm</em> chỉ trong một lần xoay
          </h2>
          <p>
            Tham quan phối cảnh Phòng truyền thống ngay trên trình duyệt: lịch sử hình thành, các thế hệ Đảng ủy và Ban
            Giám đốc, phần thưởng cao quý, thành tựu và hoạt động tiêu biểu của Bệnh viện.
          </p>
          <Link href="/phong-truyen-thong" className="btn btn--primary">
            Bắt đầu tham quan <Icon name="arrowRight" />
          </Link>
        </Reveal>
        <Reveal className="showroom-banner__media" delay={0.12}>
          <Link href="/phong-truyen-thong" aria-label="Tham quan Phòng truyền thống 360°">
            <Image
              src="/images/phong-truyen-thong-toan-canh.jpg"
              alt="Phối cảnh toàn cảnh Phòng truyền thống Bệnh viện Da liễu Trung ương"
              fill
              sizes="(max-width: 960px) 100vw, 620px"
              style={{ objectFit: "cover" }}
            />
            <span className="showroom-banner__badge">360°</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
