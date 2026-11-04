import PageHeader from "@/components/common/PageHeader";
import Reveal from "@/components/common/Reveal";
import Tour360 from "@/components/showroom/Tour360";
import EmblemSection from "@/components/showroom/EmblemSection";
import { pageMetadata } from "@/lib/seo";

const PATH = "/phong-truyen-thong";

export const metadata = pageMetadata({
  title: "Phòng truyền thống 360°",
  description:
    "Tham quan phối cảnh Phòng truyền thống Bệnh viện Da liễu Trung ương: lịch sử hình thành, các thế hệ Đảng ủy và Ban Giám đốc, phần thưởng cao quý, thành tựu và hoạt động tiêu biểu.",
  path: PATH,
  image: "/images/phong-truyen-thong-toan-canh.jpg",
});

const zones = [
  { n: "01", title: "Lịch sử hình thành và phát triển", text: "Từ Khoa Da liễu Bệnh viện Bạch Mai năm 1954 đến Bệnh viện Da liễu Trung ương." },
  { n: "02", title: "Đảng ủy qua các thời kỳ", text: "Tổ chức Đảng của Bệnh viện và Đại hội Đảng bộ nhiệm kỳ 2025 – 2030." },
  { n: "03", title: "Ban Giám đốc qua các thời kỳ", text: "Sáu thế hệ người đứng đầu, từ GS. Đặng Vũ Hỷ đến PGS.TS. Lê Hữu Doanh." },
  { n: "04", title: "Giải thưởng và phần thưởng cao quý", text: "Huân chương Lao động hạng Ba, hạng Nhì và hạng Nhất." },
  { n: "05", title: "Thành tựu nổi bật", text: "Chất lượng xét nghiệm, mạng lưới phòng khám chuyên đề, các khoa chuyên sâu mới." },
  { n: "06", title: "Hoạt động tiêu biểu", text: "Phòng, chống phong, đồng hành cùng người bệnh, đào tạo và nghiên cứu khoa học." },
  { n: "07", title: "Sảnh truyền thống", text: "Điểm bắt đầu hành trình tham quan." },
  { n: "08", title: "Biểu tượng 45 năm", text: "Biểu tượng kỷ niệm 45 năm cùng cành liễu ở trung tâm không gian." },
];

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

      <section className="section section--flush">
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
                <Reveal as="li" delay={(i % 4) * 0.06} key={zone.n}>
                  <b>{zone.n}</b>
                  <h3>{zone.title}</h3>
                  <p>{zone.text}</p>
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
