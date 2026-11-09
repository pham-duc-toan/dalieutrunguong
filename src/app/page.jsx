import Tour360 from "@/components/showroom/Tour360";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  description:
    "Tham quan Phòng truyền thống 360° Bệnh viện Da liễu Trung ương: lịch sử hình thành, các thế hệ Đảng ủy và Ban Giám đốc, phần thưởng cao quý, thành tựu và hoạt động tiêu biểu, hướng tới kỷ niệm 45 năm thành lập.",
});

/** Trang chủ: Phòng truyền thống 360° tràn toàn màn hình. */
export default function HomePage() {
  return (
    <>
      <section className="home-tour showroom-tour" aria-labelledby="home-title">
        <h1 className="sr-only" id="home-title">
          Phòng truyền thống 360° Bệnh viện Da liễu Trung ương
        </h1>
        <Tour360 full />
      </section>
    </>
  );
}
