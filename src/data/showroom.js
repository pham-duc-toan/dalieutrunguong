/**
 * Các khu của Phòng truyền thống 360°.
 * Bấm vào một khu, trình xem 360 (public/360) mở chính trang tương ứng của website trong khung nội dung
 * (menu, chân trang tự ẩn – xem page.css), nên nội dung và giao diện luôn giống hệt bên ngoài.
 * Trình xem đọc cấu hình này qua /360/noi-dung/cau-hinh.json.
 *
 * - u, v: vị trí điểm bấm trên ảnh toàn cảnh (0 → 1 theo chiều ngang, dọc của ảnh)
 * - page: trang mở trong khung (có thể kèm #mục)
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
    name: "Sảnh truyền thống",
    u: 0.518,
    v: 0.49,
    page: "/gioi-thieu",
    body: aboutText[0],
  },
  {
    id: "history",
    name: "Lịch sử hình thành và phát triển",
    u: 0.236,
    v: 0.5,
    page: "/thanh-tuu#lich-su",
    body: "Từ Khoa Da liễu – Bệnh viện Bạch Mai năm 1954, qua Viện Da liễu Việt Nam (1982) và Viện Da liễu Quốc gia (2006), đến Bệnh viện Da liễu Trung ương (2009).",
  },
  {
    id: "journey",
    name: "Hành trình phát triển",
    u: 0.045,
    v: 0.49,
    page: "/chang-duong",
    body: `Các dấu mốc từ năm 2022 đến nay, hướng tới kỷ niệm ${anniversary.years} năm thành lập (${anniversary.founded} – ${anniversary.date}).`,
  },
  {
    id: "party",
    name: "Đảng ủy qua các thời kỳ",
    u: 0.35,
    v: 0.5,
    page: "/lanh-dao#cac-the-he",
    body: "Đảng bộ Viện được thành lập năm 2007, đồng hành cùng mọi nhiệm vụ chính trị, chuyên môn của Bệnh viện; Đại hội Đảng bộ lần thứ V, nhiệm kỳ 2025 – 2030.",
  },
  {
    id: "board",
    name: "Ban Giám đốc qua các thời kỳ",
    u: 0.659,
    v: 0.5,
    page: "/lanh-dao",
    body: `${directors.length} thế hệ người đứng đầu, từ ${directors[0].name} đến ${directors[directors.length - 1].name}, cùng Ban Giám đốc đương nhiệm.`,
  },
  {
    id: "awards",
    name: "Giải thưởng và phần thưởng cao quý",
    u: 0.82,
    v: 0.5,
    page: "/thanh-tuu#phan-thuong",
    body: "Huân chương Lao động hạng Ba (1983), hạng Nhì (2002), hạng Nhất (2022) cùng nhiều phần thưởng, danh hiệu cao quý của Nhà nước và ngành Y tế.",
  },
  {
    id: "achievements",
    name: "Thành tựu nổi bật",
    u: 0.88,
    v: 0.51,
    page: "/thanh-tuu",
    body: "Loại trừ bệnh phong, kỹ thuật chuyên sâu, thử nghiệm lâm sàng, đào tạo nhân lực và hội nhập quốc tế.",
  },
  {
    id: "activities",
    name: "Hoạt động tiêu biểu",
    u: 0.132,
    v: 0.5,
    page: "/media",
    body: "Hình ảnh, video và tin tức về hoạt động chuyên môn, đào tạo, nghiên cứu và chỉ đạo tuyến của Bệnh viện.",
  },
  {
    id: "symbol",
    name: "Biểu tượng 45 năm và cành liễu",
    u: 0.5,
    v: 0.68,
    page: "/#bieu-tuong-45-nam",
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
  zones: showroomZones.map((zone) => ({ ...zone, kind: "content", articleIds: [] })),
  exhibits: [],
};
