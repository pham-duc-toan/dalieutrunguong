/**
 * Chặng đường 2022 – 2026: các dấu mốc kể từ Kỷ yếu 40 năm, hướng tới kỷ niệm 45 năm (28/01/2027).
 * Mỗi mục: date (ngày hiển thị), tag (nhóm), title, text, image (tùy chọn, trong /public/images/chang-duong).
 * Nguồn: các bài đăng chính thức trên dalieu.vn; mọi số hiệu quyết định, ngày tháng đã đối chiếu với bài gốc.
 * `featured: true` → hiện ở mục xem nhanh trên trang chủ.
 */

export const anniversary = {
  years: 45,
  date: "28/01/2027",
  founded: "28/01/1982",
};

export const journey = [
  {
    year: 2022,
    items: [
      {
        date: "20/7/2022",
        tag: "Lãnh đạo",
        title: "Công bố quyết định bổ nhiệm Giám đốc Bệnh viện",
        text: "Bộ Y tế công bố Quyết định số 1716/QĐ-BYT ngày 29/6/2022 bổ nhiệm PGS.TS. Lê Hữu Doanh giữ chức Giám đốc Bệnh viện, có hiệu lực từ ngày 01/9/2022.",
        image: "/images/chang-duong/2022-bo-nhiem-giam-doc.jpg",
        imageAlt: "Lễ công bố quyết định bổ nhiệm Giám đốc Bệnh viện Da liễu Trung ương ngày 20/7/2022",
        featured: true,
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        date: "14/3/2023",
        tag: "Tổ chức",
        title: "Thành lập Khoa Hóa sinh, Huyết học và Miễn dịch và Khoa Giải phẫu bệnh",
        text: "Bệnh viện công bố quyết định thành lập hai khoa cận lâm sàng, tổ chức chuyên sâu hơn các lĩnh vực xét nghiệm và giải phẫu bệnh.",
      },
      {
        date: "31/10/2023",
        tag: "Đào tạo",
        title: "PGS.TS. Lê Hữu Doanh làm Trưởng Bộ môn Da liễu",
        text: "Tại lễ công bố quyết định lãnh đạo quản lý của Trường Đại học Y Hà Nội, Giám đốc Bệnh viện nhận quyết định bổ nhiệm Trưởng Bộ môn Da liễu.",
        image: "/images/chang-duong/2023-truong-bo-mon.jpg",
        imageAlt: "Lễ công bố quyết định bổ nhiệm lãnh đạo quản lý Trường Đại học Y Hà Nội tháng 10/2023",
      },
      {
        date: "6/12/2023",
        tag: "Chuyên môn",
        title: "Hướng dẫn chẩn đoán và điều trị các bệnh da liễu",
        text: "Bộ Y tế ban hành Hướng dẫn chẩn đoán và điều trị các bệnh da liễu theo Quyết định số 4416/QĐ-BYT ngày 06/12/2023.",
      },
      {
        date: "Cả năm 2023",
        tag: "Tổng kết",
        title: "Các chỉ tiêu chuyên môn tăng trên 20%",
        text: "Các chỉ tiêu hoạt động chuyên môn tăng trên 20% so với năm 2022; thành lập 04 phòng khám chuyên đề; công bố 43 bài báo, trong đó có 11 bài báo quốc tế; đang thực hiện 118 đề tài nghiên cứu.",
        featured: true,
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        date: "Cả năm 2024",
        tag: "Tổng kết",
        title: "ISO 9001:2015 cho 13/13 phòng và trung tâm",
        text: "Bệnh viện đạt chứng nhận hệ thống quản lý chất lượng ISO 9001:2015 cho toàn bộ 13/13 phòng và trung tâm; thành lập hai nhóm chuyên môn về ung thư hắc tố và bệnh lý viêm mạch; hỗ trợ phòng khám chuyên đề tại tuyến tỉnh cho 21 đơn vị da liễu.",
      },
      {
        date: "30/12/2024",
        tag: "Chất lượng",
        title: "Chứng chỉ ISO 15189:2022 cho hai khoa xét nghiệm",
        text: "Khoa Hóa sinh, Huyết học và Miễn dịch cùng Khoa Xét nghiệm Vi sinh, Nấm, Ký sinh trùng đón nhận chứng chỉ ISO 15189:2022 do Văn phòng Công nhận Chất lượng (BoA) cấp, sau quá trình triển khai từ tháng 10/2023.",
        image: "/images/chang-duong/2024-iso-15189.jpg",
        imageAlt: "Lễ trao chứng chỉ ISO 15189:2022 cho hai khoa xét nghiệm ngày 30/12/2024",
        featured: true,
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        date: "6/6/2025",
        tag: "Lãnh đạo",
        title: "Bổ nhiệm Phó Giám đốc phụ trách chuyên môn",
        text: "TS.BS. Phạm Thị Minh Phương, Trưởng khoa Khám bệnh, nhận Quyết định số 1818/QĐ-BYT ngày 02/6/2025 bổ nhiệm Phó Giám đốc phụ trách chuyên môn Bệnh viện.",
        image: "/images/chang-duong/2025-bo-nhiem-pho-giam-doc.jpg",
        imageAlt: "Lễ công bố quyết định bổ nhiệm Phó Giám đốc phụ trách chuyên môn ngày 06/6/2025",
      },
      {
        date: "Nhiệm kỳ 2025 – 2030",
        tag: "Đảng bộ",
        title: "Đại hội Đảng bộ Bệnh viện lần thứ V",
        text: "Đại hội bầu Ban Chấp hành Đảng bộ nhiệm kỳ 2025 – 2030 gồm 11 đảng ủy viên; đồng chí Lê Hữu Doanh được bầu làm Bí thư, đồng chí Phạm Thị Minh Phương làm Phó Bí thư.",
      },
      {
        date: "24/10/2025",
        tag: "Mạng lưới",
        title: "Giao ban hệ thống phòng khám chuyên đề vảy nến",
        text: "Từ năm 2023 đến nay, Bệnh viện đã hỗ trợ xây dựng và phát triển 26 phòng khám chuyên đề vảy nến; hội nghị khoa học – giao ban 2024 – 2025 được tổ chức cùng Bệnh viện Đa khoa số 1 tỉnh Lào Cai.",
        image: "/images/chang-duong/2025-giao-ban-vay-nen.jpg",
        imageAlt: "Hội nghị khoa học – giao ban hệ thống phòng khám chuyên đề vảy nến 2024 – 2025",
        featured: true,
      },
      {
        date: "18/12/2025",
        tag: "Chuyển đổi số",
        title: "Ra mắt ứng dụng di động “BV Da liễu TW”",
        text: "Người bệnh có thể đăng ký khám và thanh toán trực tuyến, hủy phiếu khám, tra cứu hồ sơ khám bệnh, kết quả xét nghiệm, chẩn đoán hình ảnh, đơn thuốc, quản lý lịch hẹn và nhận thông báo nhắc tái khám.",
      },
      {
        date: "Cả năm 2025",
        tag: "Tổng kết",
        title: "Chỉ đạo tuyến và chuyển giao kỹ thuật",
        text: "Khám điều tra dịch tễ cho 10 tỉnh, trong đó có 3 tỉnh hợp tác quốc tế với WHO; chuyển giao kỹ thuật cho 15 tỉnh, thành; triển khai mô hình da liễu chuyên sâu quản lý bệnh vảy nến và các bệnh lây truyền qua đường tình dục tại 28 đơn vị trên toàn quốc.",
      },
    ],
  },
  {
    year: 2026,
    items: [
      {
        date: "9/1/2026",
        tag: "Lãnh đạo",
        title: "Bổ nhiệm lại Phó Giám đốc phụ trách kinh tế",
        text: "ThS. Nguyễn Văn Thành được bổ nhiệm lại giữ chức Phó Giám đốc phụ trách kinh tế theo Quyết định số 3909/QĐ-BYT ngày 22/12/2025 của Bộ trưởng Bộ Y tế.",
        image: "/images/lanh-dao/nguyen-van-thanh.jpg",
        imagePosition: "50% 20%",
        imageAlt: "ThS. Nguyễn Văn Thành, Phó Giám đốc phụ trách kinh tế",
      },
      {
        date: "23/1/2026",
        tag: "Kỷ niệm",
        title: "Hội nghị khoa học kỷ niệm 44 năm thành lập",
        text: "Các thế hệ thầy thuốc cùng nhìn lại chặng đường từ ngày 28/01/1982; Bệnh viện xác định 10 nhiệm vụ trọng tâm cho năm 2026.",
        image: "/images/chang-duong/2026-ky-niem-44-nam.jpg",
        imageAlt: "Hội nghị khoa học kỷ niệm 44 năm thành lập Bệnh viện Da liễu Trung ương",
      },
      {
        date: "24/4/2026",
        tag: "Tổ chức",
        title: "Công bố thành lập, kiện toàn ba khoa lâm sàng chuyên sâu",
        text: "Khoa Bệnh da Tổng hợp và Khoa Bệnh da Tự miễn và Vảy nến được tổ chức từ việc sắp xếp lại Khoa Điều trị bệnh da nam giới và Khoa Điều trị bệnh da phụ nữ và trẻ em; Khoa Bệnh da Di truyền, hiếm gặp và Ứng dụng công nghệ tế bào – tế bào gốc được kiện toàn từ khoa nghiên cứu và ứng dụng công nghệ tế bào gốc.",
        image: "/images/chang-duong/2026-ba-khoa-chuyen-sau.jpg",
        imageAlt: "Lễ công bố thành lập, kiện toàn ba khoa lâm sàng chuyên sâu ngày 24/4/2026",
        featured: true,
      },
      {
        date: "28 – 29/9/2026",
        tag: "Cộng đồng",
        title: "Giám sát phòng, chống phong tại Lâm Đồng",
        text: "Đoàn công tác giám sát hoạt động phòng, chống phong và tặng quà người bệnh tại Khu điều trị bệnh phong Di Linh, tỉnh Lâm Đồng.",
        image: "/images/chang-duong/2026-di-linh.jpg",
        imageAlt: "Đoàn công tác Bệnh viện thăm người bệnh tại Khu điều trị bệnh phong Di Linh, Lâm Đồng",
      },
      {
        date: "20/10/2026",
        tag: "Tổ chức",
        title: "Thành lập nhóm chuyên môn mới, khai trương Phòng tiêm chủng",
        text: "Bệnh viện công bố thành lập Nhóm chuyên môn Bệnh tổ chức liên kết tự miễn và vảy nến cùng Tổ tiêm chủng vắc xin thuộc Khoa Kiểm soát nhiễm khuẩn; Phòng tiêm chủng khai trương tại tầng 1 Nhà C.",
        image: "/images/chang-duong/2026-nhom-chuyen-mon.jpg",
        imageAlt: "Lễ công bố thành lập nhóm chuyên môn và Tổ tiêm chủng vắc xin ngày 20/10/2026",
        featured: true,
      },
      {
        date: "25/10/2026",
        tag: "Người bệnh",
        title: "Chương trình hưởng ứng Ngày Vảy nến Thế giới",
        text: "Chủ đề “Hiểu đúng, sống khỏe cùng bệnh vảy nến”, thông điệp “Kết nối bằng yêu thương”; Bệnh viện tổ chức tuần lễ khám và tư vấn miễn phí cho người bệnh vảy nến từ ngày 26/10 đến hết ngày 30/10/2026.",
        image: "/images/chang-duong/2026-ngay-vay-nen.jpg",
        imageAlt: "Chương trình sinh hoạt người bệnh hưởng ứng Ngày Vảy nến Thế giới 25/10/2026",
      },
      {
        date: "27/10/2026",
        tag: "Lãnh đạo",
        title: "Bổ nhiệm Phó Giám đốc phụ trách chuyên môn",
        text: "TS.BS. Lê Huyền My, Trưởng khoa Hóa sinh, Huyết học và Miễn dịch, nhận Quyết định số 3238/QĐ-BYT ngày 15/10/2026 của Bộ trưởng Bộ Y tế.",
        image: "/images/chang-duong/2026-bo-nhiem-chuyen-mon.jpg",
        imageAlt: "Lễ công bố quyết định bổ nhiệm Phó Giám đốc phụ trách chuyên môn ngày 27/10/2026",
        featured: true,
      },
    ],
  },
];

/** Các dấu mốc nổi bật dùng ở mục xem nhanh trên trang chủ, theo thứ tự thời gian. */
export const featuredJourney = journey.flatMap((group) =>
  group.items.filter((item) => item.featured).map((item) => ({ ...item, year: group.year }))
);
