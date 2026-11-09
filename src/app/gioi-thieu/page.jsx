import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Journey from "@/components/Journey";
import Leadership from "@/components/Leadership";
import Media from "@/components/Media";
import ShowroomBanner from "@/components/showroom/ShowroomBanner";
import { pageMetadata } from "@/lib/seo";

const PATH = "/gioi-thieu";

export const metadata = pageMetadata({
  title: "Giới thiệu chung",
  description:
    "Giới thiệu Bệnh viện Da liễu Trung ương: lịch sử hình thành từ Viện Da liễu Việt Nam (1982), sứ mệnh, tầm nhìn, giá trị cốt lõi, chức năng nhiệm vụ, thành tựu, chặng đường phát triển, các thế hệ lãnh đạo và hoạt động tiêu biểu.",
  path: PATH,
});

/** Giới thiệu chung: tổng quan bệnh viện, tóm tắt các mục, mỗi mục dẫn tới trang chi tiết. */
export default function AboutPage() {
  return (
    <>
      <Hero />
      <About variant="full" withHeading />
      <Achievements variant="preview" />
      <Journey variant="preview" />
      <Leadership variant="preview" />
      <Media variant="preview" />
      <ShowroomBanner />
    </>
  );
}
