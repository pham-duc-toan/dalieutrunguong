import PageHeader from "@/components/common/PageHeader";
import Media from "@/components/Media";
import { pageMetadata } from "@/lib/seo";

const PATH = "/media";

export const metadata = pageMetadata({
  title: "Media – Hình ảnh & video",
  description:
    "Thư viện hình ảnh, video và tin tức hoạt động của Bệnh viện Da liễu Trung ương: cơ sở vật chất, chuyên môn, đào tạo, sự kiện và cộng đồng.",
  path: PATH,
});

export default function MediaPage() {
  return (
    <>
      <PageHeader
        number="04"
        kicker="Media"
        title={
          <>
            Hình ảnh &amp; <em>khoảnh khắc</em>
          </>
        }
        lead="Thư viện hình ảnh, video và tin tức về hoạt động của bệnh viện."
        crumbs={[{ name: "Media", path: PATH }]}
      />
      <Media variant="full" />
    </>
  );
}
