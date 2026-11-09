/**
 * Các khu của Phòng truyền thống 360°.
 * Mỗi khu có trang riêng /phong-truyen-thong/[slug] chỉ gồm đúng nội dung của khu đó, dựng từ chính
 * các khối của website (xem components/showroom/ZoneContent.jsx). Bấm vào một khu, trình xem 360
 * (public/360) mở trang này trong khung nội dung (menu, chân trang tự ẩn – xem page.css).
 * Trình xem đọc cấu hình này qua /360/noi-dung/cau-hinh.json.
 *
 * - slug: đường dẫn trang của khu
 * - u, v: vị trí điểm bấm trên ảnh toàn cảnh (0 → 1 theo chiều ngang, dọc của ảnh)
 * - title: tiêu đề đầu trang, phần đặt giữa *…* được in nghiêng màu
 * - lead: đoạn mô tả dưới tiêu đề (mặc định dùng body)
 * - body: mô tả ngắn, dùng cho lưới "Các khu trưng bày" trên trang /phong-truyen-thong
 */

import { hospital, aboutText } from "./hospital";
import { anniversary } from "./journey";
import { directors } from "./leaders";

export const emblemText = `Khối số 45 đặt trên bệ trắng cùng cành liễu là biểu tượng hướng tới ngày kỷ niệm ${anniversary.years} năm thành lập Viện Da liễu Việt Nam, từ ${anniversary.founded} đến ${anniversary.date}.`;

/* Theo thứ tự tham quan; khu đầu tiên là sảnh – điểm bắt đầu */
export const showroomZones = [
  {
    id: "main",
    slug: "sanh-truyen-thong",
    name: "Sảnh truyền thống",
    u: 0.518,
    v: 0.49,
    title: "Sảnh *truyền thống*",
    lead: "Hơn 40 năm xây dựng và phát triển – từ Viện Da liễu Việt Nam đến bệnh viện tuyến cuối về khám chữa bệnh, đào tạo, nghiên cứu khoa học và chỉ đạo tuyến.",
    body: aboutText[0],
  },
  {
    id: "history",
    slug: "lich-su",
    name: "Lịch sử hình thành và phát triển",
    u: 0.236,
    v: 0.5,
    title: "Lịch sử hình thành *và phát triển*",
    body: "Từ Khoa Da liễu – Bệnh viện Bạch Mai năm 1954, qua Viện Da liễu Việt Nam (1982) và Viện Da liễu Quốc gia (2006), đến Bệnh viện Da liễu Trung ương (2009).",
  },
  {
    id: "journey",
    slug: "hanh-trinh-phat-trien",
    name: "Hành trình phát triển",
    u: 0.045,
    v: 0.49,
    title: "Hành trình *phát triển*",
    body: `Các dấu mốc từ năm 2022 đến nay, hướng tới kỷ niệm ${anniversary.years} năm thành lập (${anniversary.founded} – ${anniversary.date}).`,
  },
  {
    id: "party",
    slug: "dang-uy",
    name: "Đảng ủy qua các thời kỳ",
    u: 0.35,
    v: 0.5,
    title: "Đảng ủy *qua các thời kỳ*",
    body: "Đảng bộ Viện được thành lập năm 2007, đồng hành cùng mọi nhiệm vụ chính trị, chuyên môn của Bệnh viện; Đại hội Đảng bộ lần thứ V, nhiệm kỳ 2025 – 2030.",
  },
  {
    id: "board",
    slug: "ban-giam-doc",
    name: "Ban Giám đốc qua các thời kỳ",
    u: 0.659,
    v: 0.5,
    title: "Ban Giám đốc *qua các thời kỳ*",
    body: `${directors.length} thế hệ người đứng đầu, từ ${directors[0].name} đến ${directors[directors.length - 1].name}, cùng Ban Giám đốc đương nhiệm.`,
  },
  {
    id: "awards",
    slug: "giai-thuong",
    name: "Giải thưởng và phần thưởng cao quý",
    u: 0.82,
    v: 0.5,
    title: "Giải thưởng và *phần thưởng cao quý*",
    body: "Huân chương Lao động hạng Ba (1983), hạng Nhì (2002), hạng Nhất (2022) cùng nhiều phần thưởng, danh hiệu cao quý của Nhà nước và ngành Y tế.",
  },
  {
    id: "achievements",
    slug: "thanh-tuu",
    name: "Thành tựu nổi bật",
    u: 0.88,
    v: 0.51,
    title: "Thành tựu *nổi bật*",
    body: "Loại trừ bệnh phong, kỹ thuật chuyên sâu, thử nghiệm lâm sàng, đào tạo nhân lực và hội nhập quốc tế.",
  },
  {
    id: "activities",
    slug: "hoat-dong",
    name: "Hoạt động tiêu biểu",
    u: 0.132,
    v: 0.5,
    title: "Hoạt động *tiêu biểu*",
    body: "Hình ảnh, video và tin tức về hoạt động chuyên môn, đào tạo, nghiên cứu và chỉ đạo tuyến của Bệnh viện.",
  },
  {
    id: "symbol",
    slug: "bieu-tuong-45-nam",
    name: "Biểu tượng 45 năm và cành liễu",
    u: 0.5,
    v: 0.68,
    title: "Biểu tượng *45 năm* và cành liễu",
    lead: `Biểu tượng hướng tới ngày kỷ niệm ${anniversary.years} năm thành lập Viện Da liễu Việt Nam (${anniversary.date}).`,
    body: emblemText,
  },
];

/** Cấu hình cho trình xem 360 */
export const showroomConfig = {
  schemaVersion: 3,
  metadata: {
    hospitalName: hospital.name.toUpperCase(),
    title: "PHÒNG TRUYỀN THỐNG",
    brandColor: "#0b6fb8",
    disclaimer: "PHỐI CẢNH THIẾT KẾ PHÒNG TRUYỀN THỐNG",
  },
  assets: { panorama: "hinh-anh/toan-canh.png", logo: "hinh-anh/logo.jpg", video: "" },
  book: { title: "", pdf: "", pages: [] },
  zones: showroomZones.map(({ id, slug, name, u, v }) => ({
    id,
    name,
    u,
    v,
    page: `/phong-truyen-thong/${slug}`,
    kind: "content",
    articleIds: [],
  })),
  exhibits: [],
};

export const getZoneBySlug = (slug) => showroomZones.find((zone) => zone.slug === slug);
