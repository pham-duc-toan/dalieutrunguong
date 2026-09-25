/**
 * Cấu hình website & SEO.
 * QUAN TRỌNG: đặt biến môi trường NEXT_PUBLIC_SITE_URL = tên miền thật khi deploy
 * (Vercel → Project Settings → Environment Variables), vd: https://gioithieu.dalieu.vn
 */
export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://dalieu.vn").replace(/\/$/, ""),
  name: "Bệnh viện Da liễu Trung ương",
  shortName: "BV Da liễu TW",
  description:
    "Bệnh viện Da liễu Trung ương – bệnh viện chuyên khoa đầu ngành về Da liễu của Việt Nam, trực thuộc Bộ Y tế. Hơn 40 năm khám chữa bệnh, đào tạo, nghiên cứu khoa học và chỉ đạo tuyến.",
  keywords: [
    "Bệnh viện Da liễu Trung ương",
    "bệnh viện da liễu",
    "khám da liễu Hà Nội",
    "chuyên khoa da liễu",
    "Viện Da liễu Việt Nam",
    "15A Phương Mai",
  ],
  locale: "vi_VN",
  themeColor: "#0b6fb8",
  ogImage: "/og-image.png",
  /** Link mạng xã hội chính thức (Facebook, YouTube...) – dùng cho dữ liệu có cấu trúc */
  socialLinks: [],
};
