/**
 * Thế hệ Đảng ủy – Giám đốc.
 * - photo: đường dẫn ảnh, đặt ảnh trong thư mục /public/images/... rồi ghi "/images/ten-anh.jpg".
 *   Để trống "" sẽ hiển thị chữ cái đầu của tên.
 * Nguồn: Kỷ yếu 40 năm (2022). Danh sách "đương nhiệm" là tại thời điểm biên soạn Kỷ yếu –
 * cần cập nhật nếu Ban Giám đốc / Đảng ủy đã thay đổi.
 */

export const currentLeaders = [
  { name: "PGS.TS. Nguyễn Văn Thường", role: "Bí thư Đảng ủy – Giám đốc Bệnh viện", featured: true, photo: "/images/lanh-dao/nguyen-van-thuong.jpg" },
  { name: "PGS.TS. Lê Hữu Doanh", role: "Phó Bí thư Đảng ủy – Phó Giám đốc", photo: "/images/lanh-dao/le-huu-doanh.jpg" },
  { name: "GS.TS. Nguyễn Hữu Sáu", role: "Phó Giám đốc", photo: "/images/lanh-dao/nguyen-huu-sau.jpg" },
  { name: "ThS. Nguyễn Văn Thành", role: "Phó Giám đốc", photo: "/images/lanh-dao/nguyen-van-thanh.jpg" },
];

export const leaderGenerations = [
  {
    period: "1954 – 1981",
    title: "Khoa Da liễu – Bệnh viện Bạch Mai",
    note: "Tiền thân của Bệnh viện; điều trị bệnh da, bệnh phong, bệnh hoa liễu, đào tạo cán bộ và xây dựng mạng lưới chuyên khoa cả nước.",
    people: [
      { name: "GS. Đặng Vũ Hỷ", role: "Chủ nhiệm Khoa Da liễu (1954 – 1972)", photo: "/images/lanh-dao/dang-vu-hy.jpg" },
      { name: "GS. Lê Kinh Duệ", role: "Chủ nhiệm Khoa Da liễu (1972 – 1982)", photo: "/images/lanh-dao/le-kinh-due.jpg" },
      { name: "GS. Lê Tử Vân", role: "Phó Chủ nhiệm Khoa Da liễu (từ 1964)", photo: "/images/lanh-dao/le-tu-van.jpg" },
    ],
  },
  {
    period: "1982 – 2005",
    title: "Viện Da liễu Việt Nam",
    note: "Triển khai đa hóa trị liệu bệnh phong từ năm 1983, cả nước loại trừ bệnh phong theo tiêu chuẩn WHO năm 2000; mở rộng hợp tác quốc tế.",
    people: [
      { name: "GS. Lê Kinh Duệ", role: "Viện trưởng (1982 – 1994)", photo: "/images/lanh-dao/le-kinh-due.jpg" },
      { name: "PGS.TS. Phạm Văn Hiển", role: "Viện trưởng (1995 – 2006)", photo: "/images/lanh-dao/pham-van-hien.jpg" },
      { name: "GS. Lê Tử Vân", role: "Phó Viện trưởng (1984 – 1996)", photo: "/images/lanh-dao/le-tu-van.jpg" },
      { name: "BS. Nguyễn Ngọc Lâm", role: "Phó Viện trưởng (1991 – 1994)", photo: "/images/lanh-dao/nguyen-ngoc-lam.jpg" },
      { name: "TS.BS. Nguyễn Sỹ Hóa", role: "Phó Viện trưởng (từ 1992)", photo: "/images/lanh-dao/nguyen-sy-hoa.jpg" },
      { name: "GS.TS. Trần Hậu Khang", role: "Phó Viện trưởng (từ 1998)", photo: "/images/lanh-dao/tran-hau-khang.jpg" },
    ],
  },
  {
    period: "2006 – 2009",
    title: "Viện Da liễu Quốc gia",
    note: "Trực thuộc Bộ Y tế, gồm 11 khoa, phòng; thành lập Đảng bộ Viện năm 2007.",
    people: [
      { name: "PGS.TS. Phạm Văn Hiển", role: "Viện trưởng (2006 – 2008)", photo: "/images/lanh-dao/pham-van-hien.jpg" },
      { name: "GS.TS. Trần Hậu Khang", role: "Viện trưởng (2008 – 2009)", photo: "/images/lanh-dao/tran-hau-khang.jpg" },
      { name: "TS.BS. Nguyễn Sỹ Hóa", role: "Bí thư Đảng ủy (2007 – 2012) – Phó Viện trưởng", photo: "/images/lanh-dao/nguyen-sy-hoa.jpg" },
    ],
  },
  {
    period: "2009 – 2015",
    title: "Bệnh viện Da liễu Trung ương",
    note: "Được giao là đơn vị đầu ngành chỉ đạo tuyến chuyên ngành Da liễu; hoàn thiện cơ cấu khoa, phòng, trung tâm.",
    people: [
      { name: "GS.TS. Trần Hậu Khang", role: "Giám đốc (2009 – 2015)", photo: "/images/lanh-dao/tran-hau-khang.jpg" },
      { name: "TS.BS. Nguyễn Sỹ Hóa", role: "Bí thư Đảng ủy – Phó Giám đốc (đến 2012)", photo: "/images/lanh-dao/nguyen-sy-hoa.jpg" },
      { name: "ThS.BS. Trần Mẫn Chu", role: "Bí thư Đảng ủy (2013 – 2015) – Phó Giám đốc (2008 – 2015)", photo: "/images/lanh-dao/tran-man-chu.jpg" },
      { name: "PGS.TS. Trần Văn Tiến", role: "Phó Giám đốc (2008 – 2014)", photo: "/images/lanh-dao/tran-van-tien.jpg" },
      { name: "PGS.TS. Nguyễn Văn Thường", role: "Phó Giám đốc (2013 – 2015)", photo: "/images/lanh-dao/nguyen-van-thuong.jpg" },
    ],
  },
  {
    period: "2015 – nay",
    title: "Hội nhập và phát triển",
    note: "Khánh thành tòa nhà Kỹ thuật cao (2016), chứng nhận GCP (2019), đón nhận Huân chương Lao động hạng Nhất (2022).",
    people: [
      { name: "PGS.TS. Nguyễn Văn Thường", role: "Bí thư Đảng ủy – Giám đốc (2015 – nay)", photo: "/images/lanh-dao/nguyen-van-thuong.jpg" },
      { name: "PGS.TS. Lê Hữu Doanh", role: "Phó Bí thư Đảng ủy – Phó Giám đốc (2014 – nay)", photo: "/images/lanh-dao/le-huu-doanh.jpg" },
      { name: "GS.TS. Nguyễn Hữu Sáu", role: "Phó Giám đốc (2014 – nay)", photo: "/images/lanh-dao/nguyen-huu-sau.jpg" },
      { name: "ThS. Nguyễn Văn Thành", role: "Phó Giám đốc (2016 – nay)", photo: "/images/lanh-dao/nguyen-van-thanh.jpg" },
    ],
  },
];

/**
 * Các đời người đứng đầu (Chủ nhiệm Khoa → Viện trưởng → Giám đốc) – trang /lanh-dao.
 * Tiểu sử tóm lược theo Kỷ yếu 40 năm (tr. 49–53). "nay" = thời điểm biên soạn Kỷ yếu (2022).
 */
export const directors = [
  {
    id: "dang-vu-hy",
    name: "GS. Đặng Vũ Hỷ",
    photo: "/images/lanh-dao/dang-vu-hy.jpg",
    term: "1954 – 1972",
    life: "1910 – 1972",
    titles: ["Chủ nhiệm Khoa Da liễu – Bệnh viện Bạch Mai", "Chủ nhiệm Bộ môn Da liễu, Trường Đại học Y Hà Nội"],
    facts: [
      { label: "Học hàm", value: "Giáo sư" },
      { label: "Đào tạo", value: "Bác sĩ nội trú Bệnh viện Paris (1937)" },
    ],
    summary:
      "Người đặt nền móng cho Khoa Da liễu – Bệnh viện Bạch Mai, tiền thân của Bệnh viện Da liễu Trung ương. Tháng 10/1954, GS. Đặng Vũ Hỷ cùng 45 cán bộ, nhân viên từ kháng chiến trở về tiếp quản khu ngoài da của Bệnh viện Bạch Mai.",
    highlights: [
      "Tham gia kháng chiến từ 12/1946, phụ trách trạm quân y tiền phương Cổ Lễ và Quân y viện Thư Điền (Ninh Bình)",
      "Giảng dạy tại trường Y sĩ Liên khu III, IV và Trường Đại học Y Dược khoa ở Việt Bắc",
      "Biên soạn 5 cuốn sách về bệnh phong, bệnh hoa liễu và bệnh ngoài da",
      "48 công trình khoa học công bố tại Việt Nam, Pháp, Anh, Đức, Rumani – trong đó 16 công trình về bệnh phong",
    ],
    honors: ["Giải thưởng Hồ Chí Minh về Khoa học Y Dược – Đợt I (truy tặng, 1996)"],
  },
  {
    id: "le-kinh-due",
    name: "GS. Lê Kinh Duệ",
    photo: "/images/lanh-dao/le-kinh-due.jpg",
    term: "1972 – 1994",
    life: "1925 – 2001",
    titles: [
      "Chủ nhiệm Khoa Da liễu – Bệnh viện Bạch Mai (1972 – 1982)",
      "Viện trưởng đầu tiên Viện Da liễu Việt Nam (1982 – 1994)",
    ],
    facts: [
      { label: "Học hàm", value: "Giáo sư" },
      { label: "Danh hiệu", value: "Nhà giáo ưu tú" },
    ],
    summary:
      "Viện trưởng đầu tiên của Viện Da liễu Việt Nam. Trong giai đoạn này, ngành Da liễu chuyển sang phác đồ đa hóa trị liệu bệnh phong (1983) và xây dựng quan hệ hợp tác với nhiều tổ chức quốc tế khi đất nước còn bị cấm vận.",
    highlights: [
      "Hơn 100 công trình nghiên cứu về bệnh phong, bệnh ngoài da và bệnh lây truyền qua đường tình dục",
      "Chủ nhiệm Bộ môn Da liễu, Trường Đại học Y Hà Nội",
      "Phó Chủ tịch Hội chống Phong Francophonie (1994)",
    ],
    honors: [
      "Huân chương Độc lập hạng Nhì",
      "Huân chương Lao động hạng Nhất, Nhì, Ba",
      "Huân chương Kháng chiến hạng Nhất, Nhì",
      "Huân chương Chống Mỹ cứu nước hạng Nhất",
      "Giải thưởng Nhà nước về khoa học kỹ thuật",
      "Huân chương “Sức khỏe cho mọi người” của WHO",
      "Giải thưởng WHO – Sasakawa Health Prize",
    ],
  },
  {
    id: "pham-van-hien",
    name: "PGS.TS. Phạm Văn Hiển",
    photo: "/images/lanh-dao/pham-van-hien.jpg",
    term: "1995 – 2008",
    life: "Sinh năm 1944",
    titles: ["Viện trưởng Viện Da liễu Việt Nam (1995 – 2006)", "Viện trưởng Viện Da liễu Quốc gia (2006 – 2008)"],
    facts: [
      { label: "Học hàm, học vị", value: "Phó Giáo sư, Tiến sĩ" },
      { label: "Danh hiệu", value: "Thầy thuốc ưu tú" },
    ],
    summary:
      "Dẫn dắt Viện trong giai đoạn cả nước hoàn thành loại trừ bệnh phong theo tiêu chuẩn WHO (2000) và Viện được nâng cấp thành Viện Da liễu Quốc gia trực thuộc Bộ Y tế (2006).",
    highlights: [
      "Tốt nghiệp Đại học Y Hà Nội (1968); tiến sĩ Y khoa tại Bratislava, Slovakia (1978 – 1982)",
      "Chuyên gia y tế tại Angola (1987 – 1991)",
      "Trưởng Bộ môn Da liễu, Trường Đại học Y Hà Nội (1998 – 2009)",
      "Chủ tịch Hội Da liễu Việt Nam (2002 – 2008)",
      "Khảo sát dịch tễ tàn tật trên bệnh nhân phong tại 61/61 tỉnh, thành và 20 khu điều trị phong",
    ],
    honors: ["Huân chương Lao động hạng Nhì", "Huân chương Lao động hạng Ba", "Bằng khen Bộ Y tế"],
  },
  {
    id: "tran-hau-khang",
    name: "GS.TS. Trần Hậu Khang",
    photo: "/images/lanh-dao/tran-hau-khang.jpg",
    term: "2008 – 2015",
    life: "Sinh năm 1954",
    titles: [
      "Viện trưởng Viện Da liễu Quốc gia (2008 – 2009)",
      "Giám đốc đầu tiên Bệnh viện Da liễu Trung ương (2009 – 2015)",
    ],
    facts: [
      { label: "Học hàm, học vị", value: "Giáo sư, Tiến sĩ" },
      { label: "Danh hiệu", value: "Thầy thuốc nhân dân (2014)" },
    ],
    summary:
      "Giám đốc đầu tiên khi Viện Da liễu Quốc gia đổi tên thành Bệnh viện Da liễu Trung ương (2009). Bệnh viện được Bộ Y tế giao là đơn vị đầu ngành chỉ đạo tuyến chuyên ngành Da liễu (2010) và từng bước hoàn thiện cơ cấu khoa, phòng, trung tâm.",
    highlights: [
      "Bác sĩ nội trú Trường Đại học Y Hà Nội (1980 – 1983), giảng dạy tại Bộ môn Da liễu từ năm 1984",
      "Phó Viện trưởng Viện Da liễu Việt Nam, Viện Da liễu Quốc gia (1998 – 2008)",
      "Chủ nhiệm Bộ môn Da liễu, Trường Đại học Y Hà Nội (2009 – 2015)",
      "Được bổ nhiệm chức danh Giáo sư năm 2015",
    ],
    honors: [
      "Huân chương Lao động hạng Ba",
      "Bằng khen của Thủ tướng Chính phủ",
      "Giải thưởng cống hiến của Liên đoàn Da liễu Thế giới",
      "Giải thưởng Nhà quản lý xuất sắc thời kỳ đổi mới",
      "Bảng vàng “Trí thức tiêu biểu vì sự nghiệp phát triển Thủ đô”",
    ],
  },
  {
    id: "nguyen-van-thuong",
    name: "PGS.TS. Nguyễn Văn Thường",
    photo: "/images/lanh-dao/nguyen-van-thuong.jpg",
    term: "2015 – nay",
    life: "Sinh năm 1962",
    current: true,
    titles: ["Bí thư Đảng ủy – Giám đốc Bệnh viện Da liễu Trung ương (2015 – nay)", "Trưởng Bộ môn Da liễu, Trường Đại học Y Hà Nội"],
    facts: [
      { label: "Học hàm, học vị", value: "Phó Giáo sư, Tiến sĩ" },
      { label: "Danh hiệu", value: "Thầy thuốc ưu tú" },
    ],
    summary:
      "Giai đoạn hội nhập và phát triển: khánh thành tòa nhà Kỹ thuật cao (2016), trở thành bệnh viện công lập đầu tiên đạt chứng nhận Thực hành tốt thử thuốc trên lâm sàng (2019) và đón nhận Huân chương Lao động hạng Nhất (2022).",
    highlights: [
      "Bác sĩ nội trú Trường Đại học Y Hà Nội (1989 – 1991), giảng viên Bộ môn Da liễu từ năm 1996",
      "Tiến sĩ Y học (2005), Phó Giáo sư (2010)",
      "Trưởng phòng Kế hoạch tổng hợp (2009 – 2015), Phó Giám đốc (2013 – 2015)",
      "Chủ nhiệm đề tài cấp Bộ điều trị vảy nến bằng tia cực tím dải hẹp UVB-311nm (nghiệm thu 2020)",
      "Trưởng Ban biên tập Kỷ yếu 40 năm Bệnh viện",
    ],
    honors: ["Danh hiệu Thầy thuốc ưu tú", "Bằng khen Bộ Y tế"],
  },
];
