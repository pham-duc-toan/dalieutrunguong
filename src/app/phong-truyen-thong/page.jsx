import PageHeader from "@/components/common/PageHeader";
import Reveal from "@/components/common/Reveal";
import Tour360 from "@/components/showroom/Tour360";
import EmblemSection from "@/components/showroom/EmblemSection";
import { pageMetadata } from "@/lib/seo";
import { showroomZones } from "@/data/showroom";

const PATH = "/phong-truyen-thong";

export const metadata = pageMetadata({
  title: "Phòng truyền thống 360°",
  description:
    "Tham quan phối cảnh Phòng truyền thống Bệnh viện Da liễu Trung ương: lịch sử hình thành, các thế hệ Đảng ủy và Ban Giám đốc, phần thưởng cao quý, thành tựu và hoạt động tiêu biểu.",
  path: PATH,
  image: "/images/phong-truyen-thong-toan-canh.jpg",
});

// Sảnh là điểm bắt đầu tham quan, không phải khu trưng bày
const zones = showroomZones.filter((zone) => zone.id !== "main");

export default function ShowroomPage() {
  return (
    <>
      <PageHeader
        number="06"
        kicker="Phòng truyền thống"
        title={
          <>
            Tham quan <em>Phòng truyền thống</em> 360°
          </>
        }
        lead="Kéo để nhìn quanh toàn cảnh, chọn từng khu để xem nội dung trưng bày về chặng đường 45 năm của Bệnh viện."
        crumbs={[{ name: "Phòng truyền thống 360°", path: PATH }]}
      />

      <section className="section section--flush showroom-tour">
        <div className="container">
          <Reveal>
            <Tour360 />
          </Reveal>
          <p className="tour-note">Phối cảnh thiết kế không gian Phòng truyền thống. Dùng chế độ toàn màn hình để xem rõ hơn.</p>

          <div className="zones">
            <Reveal as="h2" className="zones__title">
              Các khu trưng bày
            </Reveal>
            <ul className="zones__grid">
              {zones.map((zone, i) => (
                <Reveal as="li" delay={(i % 4) * 0.06} key={zone.id}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <h3>{zone.name}</h3>
                  <p>{zone.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <EmblemSection />
    </>
  );
}
