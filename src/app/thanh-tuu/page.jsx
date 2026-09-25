import PageHeader from "@/components/common/PageHeader";
import Achievements from "@/components/Achievements";
import { pageMetadata } from "@/lib/seo";

const PATH = "/thanh-tuu";

export const metadata = pageMetadata({
  title: "Thành tựu nổi bật",
  description:
    "Những thành tựu nổi bật của Bệnh viện Da liễu Trung ương: loại trừ bệnh phong, kỹ thuật cao, nghiên cứu khoa học, đào tạo nhân lực, phần thưởng cao quý và hành trình phát triển.",
  path: PATH,
});

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        number="02"
        kicker="Thành tựu nổi bật"
        title={
          <>
            Dấu ấn <em>hơn 40 năm</em> xây dựng và trưởng thành
          </>
        }
        lead="Những đóng góp quan trọng cho ngành Da liễu Việt Nam – được Đảng, Nhà nước và Bộ Y tế ghi nhận."
        crumbs={[{ name: "Thành tựu nổi bật", path: PATH }]}
      />
      <Achievements variant="full" />
    </>
  );
}
