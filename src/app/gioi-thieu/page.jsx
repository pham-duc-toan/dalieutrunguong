import PageHeader from "@/components/common/PageHeader";
import About from "@/components/About";
import { pageMetadata } from "@/lib/seo";

const PATH = "/gioi-thieu";

export const metadata = pageMetadata({
  title: "Giới thiệu chung",
  description:
    "Giới thiệu Bệnh viện Da liễu Trung ương: lịch sử hình thành từ Viện Da liễu Việt Nam (1982), sứ mệnh, tầm nhìn, giá trị cốt lõi, chức năng và nhiệm vụ.",
  path: PATH,
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        number="01"
        kicker="Giới thiệu chung"
        title={
          <>
            Bệnh viện chuyên khoa <em>đầu ngành</em> về Da liễu của Việt Nam
          </>
        }
        lead="Hơn 40 năm xây dựng và phát triển – từ Viện Da liễu Việt Nam đến bệnh viện tuyến cuối về khám chữa bệnh, đào tạo, nghiên cứu khoa học và chỉ đạo tuyến."
        crumbs={[{ name: "Giới thiệu chung", path: PATH }]}
      />
      <About variant="full" />
    </>
  );
}
