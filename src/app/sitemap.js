import { site } from "@/data/site";
import { news } from "@/data/media";

/** /sitemap.xml – tự sinh từ danh sách trang và tin tức. */
export default function sitemap() {
  const now = new Date();

  const pages = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/gioi-thieu", priority: 0.9, changeFrequency: "monthly" },
    { path: "/thanh-tuu", priority: 0.8, changeFrequency: "monthly" },
    { path: "/lanh-dao", priority: 0.8, changeFrequency: "monthly" },
    { path: "/media", priority: 0.7, changeFrequency: "weekly" },
    { path: "/tin-tuc", priority: 0.7, changeFrequency: "weekly" },
  ].map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const articles = news.map((item) => ({
    url: `${site.url}/tin-tuc/${item.slug}`,
    lastModified: new Date(item.updated || item.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
