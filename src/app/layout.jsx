import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/common/JsonLd";
import { site } from "@/data/site";
import { pageMetadata, hospitalJsonLd } from "@/lib/seo";

// Font đóng gói sẵn trong dự án (không tải từ Google lúc build → build ổn định ở mọi nơi).
// Mỗi file CSS chứa đủ bộ ký tự tiếng Việt; trình duyệt chỉ tải phần cần dùng.
import "@fontsource/be-vietnam-pro/300.css";
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/500.css";
import "@fontsource/be-vietnam-pro/600.css";
import "@fontsource/be-vietnam-pro/700.css";
import "@fontsource-variable/lora/wght.css";
import "@fontsource-variable/lora/wght-italic.css";

import "@/styles/base.css";
import "@/styles/header.css";
import "@/styles/hero.css";
import "@/styles/page.css";
import "@/styles/about.css";
import "@/styles/achievements.css";
import "@/styles/leadership.css";
import "@/styles/media.css";
import "@/styles/footer.css";

export const metadata = {
  ...pageMetadata({ path: "/" }),
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Bệnh viện chuyên khoa đầu ngành về Da liễu`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Mã xác minh Google Search Console (đặt biến môi trường khi deploy)
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export const viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        {/* Trình duyệt tắt JavaScript vẫn thấy đầy đủ nội dung */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip-link" href="#top">
          Bỏ qua đến nội dung chính
        </a>
        <JsonLd data={hospitalJsonLd()} />
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
