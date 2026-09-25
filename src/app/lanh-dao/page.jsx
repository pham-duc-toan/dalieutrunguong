import PageHeader from "@/components/common/PageHeader";
import Leadership from "@/components/Leadership";
import { pageMetadata } from "@/lib/seo";

const PATH = "/lanh-dao";

export const metadata = pageMetadata({
  title: "Thế hệ Đảng ủy – Giám đốc",
  description:
    "Ban lãnh đạo đương nhiệm và các thế hệ Đảng ủy – Giám đốc Bệnh viện Da liễu Trung ương qua từng giai đoạn phát triển.",
  path: PATH,
});

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        number="03"
        kicker="Thế hệ Đảng ủy – Giám đốc"
        title={
          <>
            Những người <em>dẫn dắt</em> qua từng chặng đường
          </>
        }
        lead="Kế thừa truyền thống, đổi mới tư duy – các thế hệ lãnh đạo đã đưa bệnh viện phát triển không ngừng."
        crumbs={[{ name: "Thế hệ Đảng ủy – Giám đốc", path: PATH }]}
      />
      <Leadership variant="full" />
    </>
  );
}
