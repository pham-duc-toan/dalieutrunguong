import Reveal from "../common/Reveal";
import About from "../About";
import Journey from "../Journey";
import Media from "../Media";
import { AchievementGrid, AwardsPanel, DarkSection, MilestoneTimeline } from "../Achievements";
import Directors from "../leadership/Directors";
import { CurrentLeaders, Generations } from "../leadership/LeaderLists";
import EmblemSection from "./EmblemSection";
import { currentLeaders, leaderGenerations } from "@/data/leaders";

const isParty = (text) => /Đảng ủy/.test(text);

/* Đảng ủy qua các thời kỳ: chỉ những người giữ cương vị trong Đảng ủy ở từng giai đoạn */
const partyGenerations = leaderGenerations
  .map((gen) => ({ ...gen, people: gen.people.filter((person) => isParty(person.role)) }))
  .filter((gen) => gen.people.length > 0);

/* Ban Thường vụ Đảng ủy nhiệm kỳ hiện tại, lấy từ quá trình công tác của lãnh đạo đương nhiệm */
const currentTerm = "2025 – 2030";
const partyCommittee = currentLeaders
  .map((person) => {
    const post = person.career.find((c) => c.time === currentTerm && isParty(c.text));
    return post && { ...person, role: post.text.replace(/\s*\(.*\)$/, ""), featured: false };
  })
  .filter(Boolean);

function SubHeading({ kicker, children, first = false }) {
  return (
    <Reveal className={first ? "dirs__head" : "dirs__head dirs__head--team zone-sub"}>
      <span className="section__kicker">{kicker}</span>
      <h2 className="section__title">{children}</h2>
    </Reveal>
  );
}

function PlainSection({ children }) {
  return (
    <section className="section section--flush">
      <div className="container">{children}</div>
    </section>
  );
}

/** Nội dung riêng của từng khu Phòng truyền thống, dựng từ chính các khối của website. */
const ZONES = {
  main: () => <About variant="full" />,

  history: () => (
    <DarkSection flush>
      <MilestoneTimeline title={null} className="timeline--solo" />
    </DarkSection>
  ),

  journey: () => <Journey variant="full" />,

  party: () => (
    <PlainSection>
      <SubHeading kicker="Đảng bộ thành lập năm 2007" first>
        Bí thư, Phó Bí thư Đảng ủy <em>qua từng giai đoạn</em>
      </SubHeading>
      <Generations headingLevel="h3" items={partyGenerations} showNote={false} />
      {partyCommittee.length > 0 && (
        <>
          <SubHeading kicker={`Đại hội Đảng bộ lần thứ V · Nhiệm kỳ ${currentTerm}`}>
            Ban Thường vụ <em>Đảng ủy Bệnh viện</em>
          </SubHeading>
          <CurrentLeaders headingLevel="h3" people={partyCommittee} className={partyCommittee.length === 3 ? "leaders--three" : ""} />
        </>
      )}
    </PlainSection>
  ),

  board: () => (
    <PlainSection>
      <Directors />
      <SubHeading kicker="Lãnh đạo đương nhiệm">
        Ban Giám đốc <em>Bệnh viện</em>
      </SubHeading>
      <CurrentLeaders headingLevel="h3" />
      <SubHeading kicker="Từ năm 1954 đến nay">
        Ban lãnh đạo <em>qua từng giai đoạn</em>
      </SubHeading>
      <Generations headingLevel="h3" />
    </PlainSection>
  ),

  awards: () => (
    <DarkSection flush>
      <AwardsPanel className="awards--solo" />
    </DarkSection>
  ),

  achievements: () => (
    <DarkSection flush>
      <AchievementGrid />
    </DarkSection>
  ),

  activities: () => <Media variant="full" />,

  symbol: () => <EmblemSection />,
};

export default function ZoneContent({ id }) {
  const Content = ZONES[id];
  return Content ? <Content /> : null;
}
