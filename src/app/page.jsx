import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Leadership from "@/components/Leadership";
import Media from "@/components/Media";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: "/" });

/** Trang chủ: landing page tóm tắt 4 mục, mỗi mục dẫn tới trang chi tiết. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About variant="preview" />
      <Achievements variant="preview" />
      <Leadership variant="preview" />
      <Media variant="preview" />
    </>
  );
}
