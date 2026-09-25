/**
 * Media & tin tức.
 * - type: "photo" | "video"
 * - src: đường dẫn ảnh (vd "/images/toan-canh.jpg" – đặt file trong /public/images). Để trống sẽ hiện khung màu.
 * - youtube: mã video YouTube (vd "dQw4w9WgXcQ"), chỉ dùng cho video.
 * - size: "wide" (rộng 2 cột) | "tall" (cao 2 hàng) | "" (ô thường)
 * - tone: màu khung giữ chỗ khi chưa có ảnh: teal | sand | mint | ink | rose
 */

export const mediaItems = [
  { type: "photo", title: "Toàn cảnh Bệnh viện Da liễu Trung ương", tag: "Cơ sở vật chất", src: "", size: "wide", tone: "teal" },
  { type: "video", title: "Phóng sự: Hơn 40 năm xây dựng và phát triển", tag: "Phóng sự", youtube: "", size: "tall", tone: "ink" },
  { type: "photo", title: "Khu khám bệnh hiện đại", tag: "Cơ sở vật chất", src: "", size: "", tone: "sand" },
  { type: "photo", title: "Ứng dụng laser trong điều trị", tag: "Chuyên môn", src: "", size: "", tone: "mint" },
  { type: "video", title: "Chương trình khám bệnh cộng đồng", tag: "Hoạt động", youtube: "", size: "", tone: "rose" },
  { type: "photo", title: "Hội nghị Da liễu quốc tế", tag: "Sự kiện", src: "", size: "wide", tone: "ink" },
  { type: "photo", title: "Đào tạo bác sĩ chuyên khoa", tag: "Đào tạo", src: "", size: "", tone: "teal" },
  { type: "video", title: "Hướng dẫn chăm sóc da đúng cách", tag: "Kiến thức", youtube: "", size: "wide", tone: "sand" },
];

export const news = [
  {
    date: "2026-09-10",
    tag: "Sự kiện",
    title: "Hội nghị Da liễu toàn quốc thường niên",
    excerpt: "Quy tụ chuyên gia trong nước và quốc tế, cập nhật những tiến bộ mới trong chẩn đoán và điều trị.",
    url: "#",
    tone: "teal",
  },
  {
    date: "2026-08-22",
    tag: "Chuyên môn",
    title: "Triển khai kỹ thuật mới trong điều trị bệnh da mạn tính",
    excerpt: "Mở ra hy vọng cho người bệnh vảy nến, viêm da cơ địa mức độ nặng.",
    url: "#",
    tone: "sand",
  },
  {
    date: "2026-07-30",
    tag: "Cộng đồng",
    title: "Khám sàng lọc bệnh da miễn phí cho người dân vùng cao",
    excerpt: "Đoàn y bác sĩ đã khám, tư vấn và cấp phát thuốc cho hàng nghìn người dân.",
    url: "#",
    tone: "mint",
  },
];
