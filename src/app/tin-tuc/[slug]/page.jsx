import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import Cover from "@/components/common/Cover";
import JsonLd from "@/components/common/JsonLd";
import NewsList, { formatDate } from "@/components/media/NewsList";
import { news, getNewsBySlug } from "@/data/media";
import { pageMetadata, newsArticleJsonLd } from "@/lib/seo";

// Tạo sẵn HTML cho mọi bài viết lúc build; slug lạ → 404
export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/tin-tuc/${article.slug}`,
    type: "article",
    image: article.src || undefined,
    publishedTime: article.date,
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const others = news.filter((item) => item.slug !== article.slug);

  return (
    <>
      <JsonLd data={newsArticleJsonLd(article)} />
      <PageHeader
        kicker={article.tag}
        title={article.title}
        lead={article.excerpt}
        crumbs={[
          { name: "Tin tức & sự kiện", path: "/tin-tuc" },
          { name: article.title, path: `/tin-tuc/${article.slug}` },
        ]}
      >
        <time dateTime={article.date}>Ngày đăng: {formatDate(article.date).full}</time>
      </PageHeader>

      <article className="section section--flush article">
        <div className="container article__inner">
          <div className="article__cover">
            <Cover src={article.src} alt={article.title} tone={article.tone} sizes="(max-width: 800px) 100vw, 760px" priority />
          </div>
          <div className="article__body">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <Link href="/tin-tuc" className="btn btn--ghost article__back">
            ← Tất cả tin tức
          </Link>
        </div>
      </article>

      {others.length > 0 && (
        <section className="section section--tint section--related">
          <div className="container">
            <NewsList items={others} limit={3} title="Tin tức khác" headingLevel="h3" />
          </div>
        </section>
      )}
    </>
  );
}
