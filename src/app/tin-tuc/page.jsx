import PageHeader from "@/components/common/PageHeader";
import NewsList from "@/components/media/NewsList";
import { pageMetadata } from "@/lib/seo";

const PATH = "/tin-tuc";

export const metadata = pageMetadata({
  title: "Tin tức & sự kiện",
  description: "Tin tức, sự kiện, hoạt động chuyên môn và cộng đồng mới nhất của Bệnh viện Da liễu Trung ương.",
  path: PATH,
});

export default function NewsPage() {
  return (
    <>
      <PageHeader
        kicker="Tin tức"
        title={
          <>
            Tin tức &amp; <em>sự kiện</em>
          </>
        }
        lead="Cập nhật hoạt động chuyên môn, đào tạo, hợp tác và cộng đồng của bệnh viện."
        crumbs={[
          { name: "Media", path: "/media" },
          { name: "Tin tức & sự kiện", path: PATH },
        ]}
      />
      <section className="section section--flush section--tint">
        <div className="container">
          <NewsList headingLevel="h2" />
        </div>
      </section>
    </>
  );
}
