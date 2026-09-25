import { site } from "@/data/site";
import { hospital } from "@/data/hospital";

/**
 * Tạo metadata đầy đủ cho một trang (title, description, canonical, Open Graph, Twitter).
 * Next.js ghi đè toàn bộ openGraph của layout nếu trang khai báo openGraph,
 * nên mọi trang đều dùng hàm này để không bị mất ảnh chia sẻ.
 */
export function pageMetadata({ title, description = site.description, path = "/", type = "website", image, publishedTime }) {
  const images = [{ url: image || site.ogImage, width: 1200, height: 630, alt: title || site.name }];

  return {
    // Không có title → dùng title mặc định của layout (không được ghi `title: undefined` vì sẽ xóa mất)
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.name,
      url: path,
      title: title || site.name,
      description,
      images,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: title || site.name,
      description,
      images: images.map((img) => img.url),
    },
  };
}

const absoluteUrl = (path) => `${site.url}${path}`;

/** Dữ liệu có cấu trúc schema.org cho bệnh viện – hiển thị trên toàn site. */
export function hospitalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "@id": `${site.url}/#hospital`,
    name: hospital.name,
    alternateName: [hospital.nameEn, "Viện Da liễu Việt Nam"],
    url: site.url,
    logo: absoluteUrl("/icon-512.png"),
    image: absoluteUrl(site.ogImage),
    description: site.description,
    foundingDate: String(hospital.founded),
    medicalSpecialty: "Dermatology",
    address: {
      "@type": "PostalAddress",
      streetAddress: hospital.streetAddress,
      addressLocality: hospital.city,
      addressCountry: "VN",
    },
    parentOrganization: {
      "@type": "GovernmentOrganization",
      name: hospital.authority,
    },
    ...(site.socialLinks.length > 0 && { sameAs: site.socialLinks }),
  };
}

/** Breadcrumb: [{ name: "Giới thiệu chung", path: "/gioi-thieu" }] (Trang chủ tự thêm vào đầu). */
export function breadcrumbJsonLd(items) {
  const all = [{ name: "Trang chủ", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function newsArticleJsonLd(article) {
  const url = absoluteUrl(`/tin-tuc/${article.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    image: [absoluteUrl(article.src || site.ogImage)],
    mainEntityOfPage: url,
    url,
    inLanguage: "vi-VN",
    author: { "@type": "Organization", name: hospital.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: hospital.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon-512.png") },
    },
  };
}
