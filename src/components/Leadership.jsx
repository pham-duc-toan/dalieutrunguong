import Reveal from "./common/Reveal";
import MoreLink from "./common/MoreLink";
import SectionHeading from "./common/SectionHeading";
import LeadershipTabs from "./leadership/LeadershipTabs";
import { CurrentLeaders } from "./leadership/LeaderLists";

/**
 * 03. Thế hệ Đảng ủy – Giám đốc
 * variant="preview": trang chủ (lãnh đạo đương nhiệm + nút xem thêm)
 * variant="full":    trang /lanh-dao (2 tab + trích dẫn)
 */
export default function Leadership({ variant = "full" }) {
  const isPreview = variant === "preview";

  return (
    <section className={`section ${isPreview ? "" : "section--flush"}`} id="lanh-dao">
      <div className="container">
        {isPreview ? (
          <>
            <SectionHeading
              number="03"
              kicker="Thế hệ Đảng ủy – Giám đốc"
              title={
                <>
                  Những người <em>dẫn dắt</em> qua từng chặng đường
                </>
              }
            />
            <CurrentLeaders headingLevel="h3" />
            <MoreLink href="/lanh-dao">Xem các thế hệ lãnh đạo</MoreLink>
          </>
        ) : (
          <>
            <LeadershipTabs />
            <Reveal as="blockquote" className="quote">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <path d="M20 12c-7 2-12 8-12 16v8h12V24h-6c0-5 3-8 7-9zM40 12c-7 2-12 8-12 16v8h12V24h-6c0-5 3-8 7-9z" />
              </svg>
              <p>
                Mỗi thế hệ lãnh đạo là một viên gạch vững chắc, kế thừa truyền thống, đổi mới tư duy, đưa Bệnh viện Da
                liễu Trung ương phát triển không ngừng vì sức khỏe nhân dân.
              </p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
