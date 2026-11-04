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
 * Tin 2026 tổng hợp từ dalieu.vn; các tin cũ tổng hợp từ Kỷ yếu 40 năm.
 * Ngày đăng là ngày của quyết định / sự kiện được nêu trong bài.
 */
export const news = [
  {
    slug: "hoi-thao-da-ton-thuong-trong-thuc-hanh-da-lieu",
    date: "2026-10-30",
    tag: "Đào tạo",
    title: "Hội thảo khoa học “Da tổn thương trong thực hành da liễu: Từ cơ chế đến chiến lược chăm sóc toàn diện”",
    excerpt: "Hội thảo khoa học và đào tạo y khoa liên tục do Bệnh viện phối hợp tổ chức, kết hợp trực tiếp và trực tuyến.",
    src: "/images/tin-tuc/hoi-thao-da-ton-thuong-2026.jpg",
    tone: "teal",
    content: [
      "Chiều ngày 30/10/2026, Bệnh viện Da liễu Trung ương phối hợp với nhãn hàng Bioderma tổ chức Hội thảo Khoa học và Đào tạo Y khoa liên tục với chủ đề “Da tổn thương trong thực hành da liễu: Từ cơ chế đến chiến lược chăm sóc toàn diện”. Hội thảo diễn ra theo hình thức kết hợp: trực tiếp tại khách sạn JW Marriott Hà Nội và trực tuyến qua nền tảng Zoom.",
      "PGS.TS. Lê Hữu Doanh – Giám đốc Bệnh viện chủ trì hội thảo, nhấn mạnh yêu cầu cập nhật kiến thức và chăm sóc toàn diện cho người bệnh có tình trạng da tổn thương.",
      "Chương trình gồm bốn báo cáo chuyên sâu về cơ chế sinh học, nhận diện biểu hiện lâm sàng và yếu tố nguy cơ, các hướng phục hồi – chăm sóc da và cá thể hóa điều trị qua ca lâm sàng, với sự tham gia trình bày của TS.BS. Vũ Nguyệt Minh, BS.CKII. Nguyễn Thị Tuyến, BS. Stéphane Fauverghe và ThS.BSNT. Trịnh Ngọc Phát.",
    ],
  },
  {
    slug: "hoi-thi-tay-nghe-bac-si-khoi-ngoai-duoc-si-2026",
    date: "2026-10-30",
    tag: "Nhân lực",
    title: "Hội thi tay nghề bác sĩ khối ngoại, dược sĩ năm 2026",
    excerpt: "Đánh giá năng lực chuyên môn, kỹ năng thực hành, góp phần nâng cao chất lượng đội ngũ cán bộ y tế.",
    src: "/images/tin-tuc/hoi-thi-tay-nghe-2026.jpg",
    tone: "sand",
    content: [
      "Chiều ngày 30/10/2026, Bệnh viện Da liễu Trung ương tổ chức Hội thi tay nghề bác sĩ khối ngoại, dược sĩ năm 2026 nhằm đánh giá năng lực chuyên môn, kỹ năng thực hành và nâng cao chất lượng đội ngũ cán bộ y tế.",
      "Nội dung thi gồm kiến thức lý thuyết và kỹ năng thực hành. Các bác sĩ được kiểm tra kiến thức pháp luật, quy định chuyên môn và kỹ năng thực hiện các kỹ thuật chuyên ngành đang triển khai tại Bệnh viện; các dược sĩ được đánh giá kiến thức chuyên môn và khả năng vận dụng vào thực tiễn công tác dược.",
      "Hội thi được tổ chức nghiêm túc, khách quan, công bằng và minh bạch. Kết quả hội thi là cơ sở để Bệnh viện tiếp tục đào tạo, bồi dưỡng và phát triển nguồn nhân lực, hướng tới đội ngũ bác sĩ, dược sĩ có chuyên môn vững vàng, đáp ứng nhu cầu chăm sóc sức khỏe của người dân.",
    ],
  },
  {
    slug: "bo-nhiem-pho-giam-doc-phu-trach-chuyen-mon-2026",
    date: "2026-10-27",
    tag: "Sự kiện",
    title: "Công bố quyết định bổ nhiệm Phó Giám đốc phụ trách chuyên môn",
    excerpt: "TS.BS. Lê Huyền My được Bộ trưởng Bộ Y tế bổ nhiệm giữ chức Phó Giám đốc phụ trách chuyên môn Bệnh viện Da liễu Trung ương.",
    src: "/images/tin-tuc/bo-nhiem-pho-giam-doc-2026.jpg",
    tone: "ink",
    content: [
      "Chiều ngày 27/10/2026, Bệnh viện Da liễu Trung ương tổ chức Lễ công bố và trao Quyết định số 3238/QĐ-BYT ngày 15/10/2026 của Bộ trưởng Bộ Y tế về việc bổ nhiệm TS.BS. Lê Huyền My, Trưởng khoa Hóa sinh, Huyết học và Miễn dịch, giữ chức Phó Giám đốc phụ trách chuyên môn Bệnh viện.",
      "Dự buổi lễ có đồng chí Vũ Mạnh Hà – Ủy viên dự khuyết Ban Chấp hành Trung ương Đảng, Phó Bí thư Thường trực Đảng ủy, Thứ trưởng Thường trực Bộ Y tế; đại diện Vụ Tổ chức cán bộ – Bộ Y tế, Trường Đại học Y Hà Nội và chính quyền phường Kim Liên. Về phía Bệnh viện có PGS.TS. Lê Hữu Doanh – Bí thư Đảng ủy, Giám đốc Bệnh viện cùng Ban Giám đốc, Đảng ủy, các đoàn thể và lãnh đạo các khoa, phòng, trung tâm.",
      "Phát biểu nhận nhiệm vụ, TS.BS. Lê Huyền My cam kết phát huy cao nhất tinh thần trách nhiệm, giữ vững đoàn kết nội bộ, phối hợp chặt chẽ với tập thể lãnh đạo và các đơn vị trong Bệnh viện; tập trung nâng cao chất lượng xét nghiệm, phát triển các kỹ thuật chẩn đoán chuyên sâu, đẩy mạnh nghiên cứu khoa học gắn với ứng dụng thực tiễn, góp phần nâng cao chất lượng khám bệnh, chữa bệnh.",
    ],
  },
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
