/**
 * Media & tin tức.
 * Ảnh: đặt file trong /public/images rồi ghi đường dẫn, vd "/images/toan-canh.jpg".
 *
 * mediaItems:
 * - type: "photo" | "video"
 * - src: ảnh (để trống sẽ hiện khung màu)
 * - youtube: mã video YouTube (vd "dQw4w9WgXcQ"), chỉ dùng cho video
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

/**
 * Tin tức – mỗi tin có trang riêng tại /tin-tuc/<slug>.
 * - slug: đường dẫn (chữ thường, không dấu, nối bằng "-"), KHÔNG đổi sau khi đã đăng
 * - content: danh sách đoạn văn của bài viết
 * LƯU Ý: nội dung dưới đây là BÀI MẪU.
 */
export const news = [
  {
    slug: "hoi-nghi-da-lieu-toan-quoc-thuong-nien",
    date: "2026-09-10",
    tag: "Sự kiện",
    title: "Hội nghị Da liễu toàn quốc thường niên",
    excerpt: "Quy tụ chuyên gia trong nước và quốc tế, cập nhật những tiến bộ mới trong chẩn đoán và điều trị.",
    src: "",
    tone: "teal",
    content: [
      "Hội nghị Da liễu toàn quốc thường niên do Bệnh viện Da liễu Trung ương chủ trì đã diễn ra với sự tham gia của đông đảo chuyên gia, bác sĩ đến từ các bệnh viện, cơ sở da liễu trên cả nước cùng nhiều diễn giả quốc tế.",
      "Hội nghị tập trung cập nhật các tiến bộ mới trong chẩn đoán và điều trị bệnh da mạn tính, ứng dụng công nghệ laser, trí tuệ nhân tạo trong chẩn đoán hình ảnh da và các phác đồ điều trị bằng thuốc sinh học.",
      "Bên cạnh các phiên báo cáo khoa học, hội nghị còn tổ chức các buổi hội thảo chuyên đề, thực hành kỹ thuật, tạo cơ hội trao đổi kinh nghiệm giữa các thế hệ bác sĩ chuyên ngành.",
    ],
  },
  {
    slug: "trien-khai-ky-thuat-moi-dieu-tri-benh-da-man-tinh",
    date: "2026-08-22",
    tag: "Chuyên môn",
    title: "Triển khai kỹ thuật mới trong điều trị bệnh da mạn tính",
    excerpt: "Mở ra hy vọng cho người bệnh vảy nến, viêm da cơ địa mức độ nặng.",
    src: "",
    tone: "sand",
    content: [
      "Bệnh viện Da liễu Trung ương vừa triển khai thành công kỹ thuật mới trong điều trị các bệnh da mạn tính như vảy nến, viêm da cơ địa mức độ trung bình đến nặng.",
      "Kỹ thuật giúp kiểm soát tổn thương da hiệu quả hơn, giảm tần suất tái phát và cải thiện rõ rệt chất lượng cuộc sống của người bệnh.",
      "Các bác sĩ khuyến cáo người bệnh nên thăm khám tại cơ sở chuyên khoa để được chẩn đoán chính xác và xây dựng phác đồ điều trị phù hợp, tránh tự ý sử dụng thuốc.",
    ],
  },
  {
    slug: "kham-sang-loc-benh-da-mien-phi-vung-cao",
    date: "2026-07-30",
    tag: "Cộng đồng",
    title: "Khám sàng lọc bệnh da miễn phí cho người dân vùng cao",
    excerpt: "Đoàn y bác sĩ đã khám, tư vấn và cấp phát thuốc cho hàng nghìn người dân.",
    src: "",
    tone: "mint",
    content: [
      "Hưởng ứng các hoạt động vì cộng đồng, đoàn y bác sĩ Bệnh viện Da liễu Trung ương đã tổ chức chương trình khám sàng lọc bệnh da miễn phí cho người dân tại các xã vùng cao.",
      "Trong nhiều ngày, đoàn đã khám, tư vấn và cấp phát thuốc miễn phí cho hàng nghìn lượt người dân, đồng thời hướng dẫn cách phòng ngừa và chăm sóc da đúng cách.",
      "Chương trình góp phần phát hiện sớm các bệnh da liễu, trong đó có bệnh phong, giúp người bệnh được điều trị kịp thời.",
    ],
  },
];

export const getNewsBySlug = (slug) => news.find((item) => item.slug === slug);
