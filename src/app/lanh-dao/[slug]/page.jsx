import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import Avatar from "@/components/common/Avatar";
import Icon from "@/components/common/Icon";
import { currentLeaders, getLeaderBySlug } from "@/data/leaders";
import { pageMetadata } from "@/lib/seo";

// Tạo sẵn trang hồ sơ cho từng thành viên Ban Giám đốc; slug lạ → 404
export const dynamicParams = false;

export function generateStaticParams() {
  return currentLeaders.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const person = getLeaderBySlug(slug);
  if (!person) return {};

  return pageMetadata({
    title: `${person.name} – ${person.role}`,
    description: person.intro,
    path: `/lanh-dao/${person.slug}`,
    type: "profile",
  });
}

/** Mốc thời gian dạng danh sách: [{ time, text }] */
function Timeline({ title, items }) {
  return (
    <section className="profile__block">
      <h2>{title}</h2>
      <ol className="profile__timeline">
        {items.map((item) => (
          <li key={item.time + item.text}>
            <span className="profile__time">{item.time}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default async function LeaderProfilePage({ params }) {
  const { slug } = await params;
  const person = getLeaderBySlug(slug);
  if (!person) notFound();

  const others = currentLeaders.filter((p) => p.slug !== person.slug);

  return (
    <>
      <PageHeader
        kicker="Ban Giám đốc"
        title={person.name}
        lead={person.role}
        crumbs={[
          { name: "Thế hệ Đảng ủy – Giám đốc", path: "/lanh-dao" },
          { name: person.name, path: `/lanh-dao/${person.slug}` },
        ]}
      />

      <article className="section section--flush profile">
        <div className="container profile__inner">
          <div className="profile__photo">
            {person.photo ? (
              <Image
                src={person.photo}
                alt={person.name}
                fill
                priority
                sizes="(max-width: 860px) 100vw, 380px"
                style={{ objectFit: "cover", objectPosition: "50% 15%" }}
              />
            ) : (
              <Avatar name={person.name} photo="" />
            )}
          </div>

          <div className="profile__main">
            <p className="profile__intro">{person.intro}</p>
            {person.education.length > 0 && <Timeline title="Quá trình đào tạo" items={person.education} />}
            <Timeline title="Quá trình công tác" items={person.career} />
            {person.honors.length > 0 && (
              <section className="profile__block">
                <h2>Khen thưởng</h2>
                <ul className="profile__honors">
                  {person.honors.map((honor) => (
                    <li key={honor}>
                      <Icon name="starFilled" />
                      {honor}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <Link href="/lanh-dao" className="btn btn--ghost profile__back">
              ← Thế hệ Đảng ủy – Giám đốc
            </Link>
          </div>
        </div>
      </article>

      <section className="section section--tint section--related">
        <div className="container">
          <h2 className="news__title">Ban Giám đốc</h2>
          <ul className="profile__others">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/lanh-dao/${p.slug}`} className="profile__other">
                  <Avatar name={p.name} photo={p.photo} small />
                  <span>
                    <strong>{p.name}</strong>
                    <small>{p.role}</small>
                  </span>
                  <Icon name="arrowRight" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
