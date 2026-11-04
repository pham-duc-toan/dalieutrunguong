import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Journey from "@/components/Journey";
import Leadership from "@/components/Leadership";
import Media from "@/components/Media";
import ShowroomBanner from "@/components/showroom/ShowroomBanner";
import EmblemSection from "@/components/showroom/EmblemSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: "/" });

/** Trang chủ: landing page tóm tắt các mục, mỗi mục dẫn tới trang chi tiết. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About variant="preview" />
      <Achievements variant="preview" />
      <Journey variant="preview" />
      <EmblemSection />
      <Leadership variant="preview" />
      <Media variant="preview" />
      <ShowroomBanner />
    </>
  );
}
