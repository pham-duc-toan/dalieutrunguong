import { site } from "@/data/site";

/** /manifest.webmanifest – biểu tượng & màu khi "Thêm vào màn hình chính" trên điện thoại. */
export default function manifest() {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    lang: "vi",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9fc",
    theme_color: site.themeColor,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
