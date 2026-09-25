import SectionHeading from "./common/SectionHeading";
import MediaGallery from "./media/MediaGallery";
import NewsList from "./media/NewsList";

/**
 * 04. Media
 * variant="preview": trang chủ (có tiêu đề mục)
 * variant="full":    trang /media (tiêu đề nằm ở PageHeader)
 */
export default function Media({ variant = "full" }) {
  const isPreview = variant === "preview";

  return (
    <section className={`section section--tint ${isPreview ? "" : "section--flush"}`} id="media">
      <div className="container">
        {isPreview && (
          <SectionHeading
            number="04"
            kicker="Media"
            title={
              <>
                Hình ảnh &amp; <em>khoảnh khắc</em>
              </>
            }
          />
        )}

        <MediaGallery />

        <NewsList limit={3} title="Tin tức & sự kiện" headingLevel="h3" />
      </div>
    </section>
  );
}
