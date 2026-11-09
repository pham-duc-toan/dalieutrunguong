import Reveal from "./common/Reveal";
import MoreLink from "./common/MoreLink";
import SectionHeading from "./common/SectionHeading";
import LeadershipTabs from "./leadership/LeadershipTabs";
import Directors, { SuccessionRail } from "./leadership/Directors";
import { CurrentLeaders } from "./leadership/LeaderLists";

/**
 * 03. Thế hệ Đảng ủy – Giám đốc
 * variant="preview": trang Giới thiệu chung (thanh các đời Giám đốc + lãnh đạo đương nhiệm + nút xem thêm)
 * variant="full":    trang /lanh-dao (các đời Giám đốc + 2 tab + trích dẫn)
 */
export default function Leadership({ variant = "full" }) {
  const isPreview = variant === "preview";

  return (
    <section className={`section ${isPreview ? "" : "section--flush"}`} id="lanh-dao">
      <div className="container">
        {isPreview ? (
          <>
            <SectionHeading
              number="04"
              kicker="Thế hệ Đảng ủy – Giám đốc"
              title={
                <>
                  Những người <em>dẫn dắt</em> qua từng chặng đường
                </>
              }
            />
            <SuccessionRail basePath="/lanh-dao" title="Các đời Viện trưởng – Giám đốc" />
            <CurrentLeaders headingLevel="h3" />
            <MoreLink href="/lanh-dao">Xem các đời Giám đốc &amp; thế hệ lãnh đạo</MoreLink>
          </>
        ) : (
          <>
            <Directors />
            <Reveal className="dirs__head dirs__head--team">
              <span className="section__kicker">Ban lãnh đạo bệnh viện</span>
              <h2 className="section__title">
                Đảng ủy – Ban Giám đốc <em>qua các thời kỳ</em>
              </h2>
            </Reveal>
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
