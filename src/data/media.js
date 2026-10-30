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
 * Chú thích ảnh lấy theo Kỷ yếu 40 năm (số trang Kỷ yếu ghi ở cuối mỗi dòng).
 */

export const mediaItems = [
  { type: "photo", title: "Khánh thành tòa nhà Kỹ thuật cao năm 2016", tag: "Cơ sở vật chất", src: "/images/media/le-khanh-thanh-2016.jpg", size: "wide", tone: "teal" }, // tr. 18
  { type: "video", title: "Tổng quan Bệnh viện Da liễu Trung ương", tag: "Giới thiệu", youtube: "Wr64e08qzGA", src: "/images/media/video-tong-quan.jpg", size: "tall", tone: "ink" },
  { type: "photo", title: "Khoa Da liễu – Bệnh viện Bạch Mai, tiền thân của Bệnh viện", tag: "Lịch sử", src: "/images/media/khoa-da-lieu-bach-mai.jpg", size: "", tone: "sand" }, // tr. 8
  { type: "photo", title: "Phẫu thuật Mohs điều trị ung thư da", tag: "Chuyên môn", src: "/images/media/phau-thuat-mohs.jpg", size: "", tone: "mint" }, // tr. 44
  { type: "photo", title: "Khám bệnh phong tại Tây Nguyên năm 1995", tag: "Cộng đồng", src: "/images/media/kham-phong-tay-nguyen-1995.jpg", size: "", tone: "rose" }, // tr. 12
  { type: "photo", title: "Hội nghị Da liễu châu Á – Australia lần thứ 21 tại Đà Nẵng năm 2014", tag: "Sự kiện", src: "/images/media/hoi-nghi-chau-a-australia-2014.jpg", size: "wide", tone: "ink" }, // tr. 37
  { type: "photo", title: "Bảo vệ luận văn Bác sĩ nội trú tại Trường Đại học Y Hà Nội", tag: "Đào tạo", src: "/images/media/bao-ve-luan-van-bsnt.jpg", size: "", tone: "teal" }, // tr. 27
  { type: "photo", title: "Đón nhận chứng nhận Thực hành tốt thử thuốc trên lâm sàng năm 2019", tag: "Nghiên cứu", src: "/images/media/chung-nhan-gcp-2019.jpg", size: "wide", tone: "sand" }, // tr. 39
];

/**
 * Tin tức – mỗi tin có trang riêng tại /tin-tuc/<slug>.
 * - slug: đường dẫn (chữ thường, không dấu, nối bằng "-"), KHÔNG đổi sau khi đã đăng
 * - content: danh sách đoạn văn của bài viết
 * Nội dung tổng hợp từ Kỷ yếu 40 năm; ngày đăng là ngày của quyết định / sự kiện được nêu trong bài.
 */
export const news = [
  {
    slug: "chung-nhan-thuc-hanh-tot-thu-thuoc-tren-lam-sang-gcp",
    date: "2019-10-29",
    tag: "Nghiên cứu",
    title: "Bệnh viện công lập đầu tiên được cấp chứng nhận Thực hành tốt thử thuốc trên lâm sàng (GCP)",
    excerpt: "Bệnh viện đủ chức năng thử nghiệm lâm sàng các thuốc mới chuyên ngành Da liễu trước khi lưu hành tại Việt Nam.",
    src: "/images/tin-tuc/gcp.jpg",
    tone: "teal",
    content: [
      "Bệnh viện Da liễu Trung ương đã đáp ứng đầy đủ các tiêu chí và được cấp giấy chứng nhận “Thực hành tốt thử thuốc trên lâm sàng (GCP)” theo Quyết định số 244/QĐ-K2ĐT ngày 29/10/2019 của Cục Khoa học công nghệ và Đào tạo – Bộ Y tế.",
      "Đây là lần đầu tiên một bệnh viện công lập ở nước ta được trao chứng nhận này, với đủ chức năng, khả năng thử nghiệm lâm sàng tất cả các loại thuốc mới chuyên ngành Da liễu từ nước ngoài trước khi lưu hành tại Việt Nam.",
      "Ngày 03/01/2020, Trung tâm Thử nghiệm lâm sàng được thành lập, chịu trách nhiệm điều phối, quản lý các nghiên cứu cơ sở và các thử nghiệm lâm sàng tại Bệnh viện. Trung tâm đã và đang thực hiện 07 thử nghiệm lâm sàng đa trung tâm, 22 thử nghiệm sản phẩm phối hợp với Unilever Việt Nam và 09 nghiên cứu tương đương sinh học.",
    ],
  },
  {
    slug: "ma-co-so-dao-tao-lien-tuc-b62",
    date: "2014-12-30",
    tag: "Đào tạo",
    title: "Bệnh viện được cấp mã cơ sở đào tạo liên tục B62",
    excerpt: "Mở rộng các khóa đào tạo liên tục, đào tạo thực hành cho y bác sĩ chuyên ngành Da liễu trên cả nước.",
    src: "/images/tin-tuc/dao-tao-lien-tuc.jpg",
    tone: "sand",
    content: [
      "Theo Quyết định số 258/QĐ-K2ĐT ngày 30/12/2014 của Cục Khoa học công nghệ và Đào tạo – Bộ Y tế, Bệnh viện Da liễu Trung ương được cấp mã cơ sở đào tạo liên tục B62.",
      "Bệnh viện thường xuyên tổ chức các lớp đào tạo liên tục, đào tạo kèm cặp, đào tạo thực hành 18 tháng, cấp chứng nhận và chứng chỉ cho y bác sĩ trên cả nước với nhiều chủ đề: Da liễu cơ bản, phẫu thuật da cơ bản, ứng dụng laser, chăm sóc da thẩm mỹ, xét nghiệm nấm và ký sinh trùng, giải phẫu bệnh da…",
      "Bệnh viện đồng thời là cơ sở đào tạo thực hành lâm sàng của Trường Đại học Y Hà Nội, Học viện Y Dược học cổ truyền Việt Nam, Trường Đại học Y Dược – Đại học Quốc gia Hà Nội, Đại học Kỹ thuật Y tế Hải Dương; mỗi năm tiếp nhận hàng nghìn sinh viên và học viên sau đại học.",
    ],
  },
  {
    slug: "don-vi-dau-nganh-chi-dao-tuyen-chuyen-nganh-da-lieu",
    date: "2010-10-20",
    tag: "Chỉ đạo tuyến",
    title: "Bệnh viện Da liễu Trung ương là đơn vị đầu ngành chỉ đạo tuyến chuyên ngành Da liễu",
    excerpt: "Dẫn dắt mạng lưới Da liễu toàn quốc và Chương trình phòng chống phong Quốc gia.",
    src: "/images/tin-tuc/loai-tru-phong.jpg",
    tone: "mint",
    content: [
      "Ngày 20/10/2010, Bộ Y tế ban hành Quyết định số 4026/QĐ-BYT phân công Bệnh viện Da liễu Trung ương là đơn vị đầu ngành trong phạm vi chỉ đạo tuyến và khám chữa bệnh chuyên ngành Da liễu.",
      "Là đơn vị đứng đầu Chương trình phòng chống phong Quốc gia, Bệnh viện phối hợp chặt chẽ với Bệnh viện Phong – Da liễu Trung ương Quỳnh Lập, Quy Hòa và Bệnh viện Da liễu TP. Hồ Chí Minh. Đến năm 2015, 63/63 tỉnh, thành đã hoàn thành loại trừ bệnh phong tuyến tỉnh; đến tháng 9/2021 có 218/705 huyện, thị được công nhận loại trừ bệnh phong quy mô cấp huyện.",
      "Thông qua Đề án 1816 và Quy hoạch phát triển mạng lưới chuyên ngành (Quyết định 5656/QĐ-BYT năm 2015), Bệnh viện chuyển giao nhiều gói kỹ thuật cho tuyến dưới, góp phần hình thành 26 bệnh viện chuyên ngành Da liễu cùng nhiều trung tâm, đơn vị Da liễu trên cả nước.",
    ],
  },
];

export const getNewsBySlug = (slug) => news.find((item) => item.slug === slug);
