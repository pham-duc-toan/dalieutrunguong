import PageHeader from "@/components/common/PageHeader";
import Journey from "@/components/Journey";
import { pageMetadata } from "@/lib/seo";

const PATH = "/chang-duong";

export const metadata = pageMetadata({
  title: "Chặng đường 2022 – 2026",
  description:
    "Các dấu mốc của Bệnh viện Da liễu Trung ương từ năm 2022 đến nay: kiện toàn lãnh đạo, tổ chức chuyên môn mới, chất lượng, chuyển đổi số và mạng lưới chuyên khoa, hướng tới kỷ niệm 45 năm ngày thành lập.",
  path: PATH,
});

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        number="03"
        kicker="Chặng đường 2022 – 2026"
        title={
          <>
            Hướng tới <em>45 năm</em> thành lập
          </>
        }
        lead="Những dấu mốc về lãnh đạo, tổ chức chuyên môn, chất lượng, chuyển đổi số và mạng lưới chuyên khoa kể từ năm 2022."
        crumbs={[{ name: "Chặng đường 2022 – 2026", path: PATH }]}
      />
      <Journey variant="full" />
    </>
  );
}
