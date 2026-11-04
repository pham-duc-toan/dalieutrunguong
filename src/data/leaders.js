/**
 * Thế hệ Đảng ủy – Giám đốc.
 * - photo: đường dẫn ảnh, đặt ảnh trong thư mục /public/images/... rồi ghi "/images/ten-anh.jpg".
 *   Để trống "" sẽ hiển thị chữ cái đầu của tên.
 * Nguồn: Kỷ yếu 40 năm (2022); Ban Giám đốc đương nhiệm cập nhật theo dalieu.vn (11/2026).
 */

/**
 * Ban Giám đốc đương nhiệm – mỗi người có trang hồ sơ /lanh-dao/[slug].
 * education / career: [{ time, text }] theo thứ tự thời gian; honors: [] (để trống thì ẩn mục).
 * Nguồn: hồ sơ bác sĩ & tin bổ nhiệm trên dalieu.vn, các mục lãnh đạo tiền nhiệm trong Kỷ yếu 40 năm.
 */
export const currentLeaders = [
  {
    slug: "le-huu-doanh",
    name: "PGS.TS. Lê Hữu Doanh",
    role: "Bí thư Đảng ủy – Giám đốc Bệnh viện",
    featured: true,
    photo: "/images/lanh-dao/le-huu-doanh.jpg",
    intro:
      "PGS.TS. Lê Hữu Doanh từng phụ trách công tác chỉ đạo tuyến, đào tạo và giữ cương vị Phó Giám đốc Bệnh viện từ năm 2014, Phó Bí thư Đảng ủy từ năm 2015. Ngày 29/6/2022, ông được Bộ trưởng Bộ Y tế bổ nhiệm giữ chức Giám đốc Bệnh viện Da liễu Trung ương, tiếp nối chặng đường đổi mới, nâng tầm chuyên môn và hội nhập quốc tế.",
    education: [
      { time: "8/1998", text: "Tốt nghiệp Bác sĩ đa khoa, Trường Đại học Y Hà Nội" },
      { time: "12/2002", text: "Tốt nghiệp Bác sĩ nội trú, Trường Đại học Y Hà Nội" },
      { time: "5/2005 – 3/2006", text: "Học Diploma chuyên ngành Da tại Viện Da, Bangkok, Thái Lan" },
      { time: "3/2013", text: "Tốt nghiệp Tiến sĩ tại Khoa Da, Đại học Y – Đại học Kanazawa, Nhật Bản" },
      { time: "11/2016", text: "Được phong hàm Phó Giáo sư" },
    ],
    career: [
      { time: "6/2013 – 9/2014", text: "Trưởng phòng Chỉ đạo tuyến" },
      { time: "2014 – 2015", text: "Giám đốc Trung tâm Đào tạo và Chỉ đạo tuyến" },
      { time: "2014 – 2022", text: "Phó Giám đốc Bệnh viện" },
      { time: "Từ 2015", text: "Phó Bí thư Đảng ủy Bệnh viện" },
      { time: "9/2022 – nay", text: "Giám đốc Bệnh viện theo Quyết định số 1716/QĐ-BYT ngày 29/6/2022 của Bộ trưởng Bộ Y tế, có hiệu lực từ ngày 01/9/2022" },
      { time: "2025 – 2030", text: "Bí thư Đảng ủy Bệnh viện (Đại hội Đảng bộ lần thứ V)" },
      { time: "10/2023 – nay", text: "Trưởng Bộ môn Da liễu, Trường Đại học Y Hà Nội" },
    ],
    honors: [],
  },
  {
    slug: "pham-thi-minh-phuong",
    name: "TS.BS. Phạm Thị Minh Phương",
    role: "Phó Giám đốc – Phó Bí thư Đảng ủy",
    photo: "/images/lanh-dao/pham-thi-minh-phuong.jpg",
    intro:
      "TS.BS. Phạm Thị Minh Phương gắn bó lâu năm với Bệnh viện, từng phụ trách công tác nghiên cứu khoa học – hợp tác quốc tế, chỉ đạo tuyến và đào tạo trước khi giữ cương vị Trưởng khoa Khám bệnh. Tháng 6/2025, bà được Bộ trưởng Bộ Y tế bổ nhiệm giữ chức Phó Giám đốc phụ trách chuyên môn của Bệnh viện.",
    education: [
      { time: "8/1996", text: "Tốt nghiệp Bác sĩ đa khoa, Trường Đại học Y Hà Nội" },
      { time: "12/1998", text: "Hoàn thành chương trình bác sĩ định hướng chuyên khoa Da liễu, Trường Đại học Y Hà Nội" },
      { time: "5/2004", text: "Thạc sĩ Y tế công cộng, Đại học Emory, Hoa Kỳ" },
      { time: "3/2008", text: "Hoàn thành khóa học về Da liễu tại Thái Lan" },
      { time: "7/2014", text: "Tiến sĩ Y học, Viện Vệ sinh Dịch tễ Trung ương" },
    ],
    career: [
      { time: "3/2010 – 4/2017", text: "Trưởng phòng Nghiên cứu khoa học và Hợp tác quốc tế" },
      { time: "2015 – 2018", text: "Giám đốc Trung tâm Đào tạo và Chỉ đạo tuyến" },
      { time: "3/2017 – 6/2018", text: "Trưởng phòng Chỉ đạo tuyến" },
      { time: "Đến 6/2025", text: "Trưởng khoa Khám bệnh" },
      { time: "6/2025 – nay", text: "Phó Giám đốc Bệnh viện; được bổ nhiệm Phó Giám đốc phụ trách chuyên môn theo Quyết định số 1818/QĐ-BYT ngày 02/6/2025 của Bộ trưởng Bộ Y tế" },
      { time: "2025 – 2030", text: "Phó Bí thư Đảng ủy Bệnh viện (Đại hội Đảng bộ lần thứ V)" },
    ],
    honors: [],
  },
  {
    slug: "le-huyen-my",
    name: "TS.BS. Lê Huyền My",
    role: "Phó Giám đốc phụ trách chuyên môn",
    photo: "/images/lanh-dao/le-huyen-my.jpg",
    intro:
      "TS.BS. Lê Huyền My nhiều năm công tác tại Bệnh viện, từng là Bí thư Đoàn Thanh niên Bệnh viện (2007 – 2012) và Trưởng khoa Hóa sinh, Huyết học và Miễn dịch. Ngày 27/10/2026, bà nhận Quyết định bổ nhiệm giữ chức Phó Giám đốc phụ trách chuyên môn, với định hướng nâng cao chất lượng xét nghiệm, phát triển kỹ thuật chẩn đoán chuyên sâu và đẩy mạnh nghiên cứu khoa học gắn với thực tiễn.",
    education: [
      { time: "8/2001", text: "Tốt nghiệp Bác sĩ đa khoa, Trường Đại học Y Hà Nội" },
      { time: "12/2003", text: "Hoàn thành chương trình bác sĩ định hướng chuyên khoa Da liễu, Trường Đại học Y Hà Nội" },
      { time: "3/2011", text: "Thạc sĩ chuyên ngành Da liễu, Trường Đại học Y Hà Nội" },
      { time: "3/2019", text: "Tiến sĩ chuyên ngành Da liễu, Trường Đại học Y Hà Nội" },
    ],
    career: [
      { time: "2007 – 2012", text: "Bí thư Ban Chấp hành Đoàn Thanh niên Bệnh viện" },
      { time: "3/2023 – 10/2026", text: "Trưởng khoa Hóa sinh, Huyết học và Miễn dịch" },
      { time: "2025 – 2030", text: "Ủy viên Ban Thường vụ Đảng ủy Bệnh viện" },
      { time: "10/2026 – nay", text: "Phó Giám đốc phụ trách chuyên môn theo Quyết định số 3238/QĐ-BYT ngày 15/10/2026 của Bộ trưởng Bộ Y tế" },
    ],
    honors: [],
  },
  {
    slug: "nguyen-van-thanh",
    name: "ThS. Nguyễn Văn Thành",
    role: "Phó Giám đốc phụ trách kinh tế",
    photo: "/images/lanh-dao/nguyen-van-thanh.jpg",
    intro:
      "ThS. Nguyễn Văn Thành nhiều năm phụ trách công tác tài chính – kế toán của Bệnh viện với cương vị Trưởng phòng Tài chính Kế toán. Từ năm 2016, ông giữ chức Phó Giám đốc Bệnh viện Da liễu Trung ương; ngày 09/01/2026, ông được Bộ trưởng Bộ Y tế bổ nhiệm lại giữ chức Phó Giám đốc phụ trách kinh tế.",
    education: [],
    career: [
      { time: "2010 – 2015", text: "Trưởng phòng Tài chính Kế toán" },
      { time: "2016 – nay", text: "Phó Giám đốc Bệnh viện" },
      { time: "1/2026", text: "Được bổ nhiệm lại Phó Giám đốc phụ trách kinh tế theo Quyết định số 3909/QĐ-BYT ngày 22/12/2025 của Bộ trưởng Bộ Y tế" },
    ],
    honors: ["Huy hiệu 30 năm tuổi Đảng (2022)"],
  },
];

export const getLeaderBySlug = (slug) => currentLeaders.find((person) => person.slug === slug);

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
    period: "2015 – 2022",
    title: "Hội nhập và phát triển",
    note: "Khánh thành tòa nhà Kỹ thuật cao (2016), chứng nhận GCP (2019), đón nhận Huân chương Lao động hạng Nhất (2022).",
    people: [
      { name: "PGS.TS. Nguyễn Văn Thường", role: "Bí thư Đảng ủy – Giám đốc (2015 – 2022)", photo: "/images/lanh-dao/nguyen-van-thuong.jpg" },
      { name: "PGS.TS. Lê Hữu Doanh", role: "Phó Giám đốc (2014 – 2022), Phó Bí thư Đảng ủy (từ 2015)", photo: "/images/lanh-dao/le-huu-doanh.jpg" },
      { name: "GS.TS. Nguyễn Hữu Sáu", role: "Phó Giám đốc (từ 2014)", photo: "/images/lanh-dao/nguyen-huu-sau.jpg" },
      { name: "ThS. Nguyễn Văn Thành", role: "Phó Giám đốc (từ 2016)", photo: "/images/lanh-dao/nguyen-van-thanh.jpg" },
    ],
  },
  {
    period: "2022 – nay",
    title: "Đổi mới và nâng tầm",
    note: "Kiện toàn Ban Giám đốc, phát triển kỹ thuật chuyên sâu; thường niên tổ chức Hội nghị Da liễu toàn quốc và Hội nghị Da liễu thẩm mỹ.",
    people: [
      { name: "PGS.TS. Lê Hữu Doanh", role: "Bí thư Đảng ủy – Giám đốc (2022 – nay)", photo: "/images/lanh-dao/le-huu-doanh.jpg" },
      { name: "ThS. Nguyễn Văn Thành", role: "Phó Giám đốc phụ trách kinh tế", photo: "/images/lanh-dao/nguyen-van-thanh.jpg" },
      { name: "TS.BS. Phạm Thị Minh Phương", role: "Phó Giám đốc – Phó Bí thư Đảng ủy (6/2025 – nay)", photo: "/images/lanh-dao/pham-thi-minh-phuong.jpg" },
      { name: "TS.BS. Lê Huyền My", role: "Phó Giám đốc phụ trách chuyên môn (10/2026 – nay)", photo: "/images/lanh-dao/le-huyen-my.jpg" },
    ],
  },
];

/**
 * Các đời người đứng đầu (Chủ nhiệm Khoa → Viện trưởng → Giám đốc) – trang /lanh-dao.
 * Tiểu sử tóm lược theo Kỷ yếu 40 năm (tr. 49–53); PGS.TS. Lê Hữu Doanh theo dalieu.vn và Báo Sức khỏe & Đời sống.
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
    term: "2015 – 2022",
    life: "Sinh năm 1962",
    titles: ["Bí thư Đảng ủy – Giám đốc Bệnh viện Da liễu Trung ương (2015 – 2022)", "Nguyên Trưởng Bộ môn Da liễu, Trường Đại học Y Hà Nội"],
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
  {
    id: "le-huu-doanh",
    name: "PGS.TS. Lê Hữu Doanh",
    photo: "/images/lanh-dao/le-huu-doanh.jpg",
    term: "2022 – nay",
    life: "",
    current: true,
    titles: ["Bí thư Đảng ủy – Giám đốc Bệnh viện Da liễu Trung ương (2022 – nay)", "Trưởng Bộ môn Da liễu, Trường Đại học Y Hà Nội"],
    facts: [
      { label: "Học hàm, học vị", value: "Phó Giáo sư, Tiến sĩ" },
      { label: "Đào tạo", value: "Đại học Y Hà Nội · Đại học Kanazawa (Nhật Bản)" },
    ],
    summary:
      "Trưởng thành từ Bệnh viện, nhiều năm giữ cương vị Phó Bí thư Đảng ủy – Phó Giám đốc. Ngày 29/6/2022, PGS.TS. Lê Hữu Doanh được Bộ trưởng Bộ Y tế bổ nhiệm giữ chức Giám đốc Bệnh viện Da liễu Trung ương, tiếp nối chặng đường đổi mới, nâng tầm chuyên môn và hội nhập quốc tế.",
    highlights: [
      "Tốt nghiệp Bác sĩ đa khoa (1998) và Bác sĩ nội trú (2002), Trường Đại học Y Hà Nội",
      "Diploma chuyên ngành Da liễu tại Viện Da liễu Bangkok, Thái Lan (2005 – 2006)",
      "Tiến sĩ Y học tại Đại học Kanazawa, Nhật Bản (2013); Phó Giáo sư (2016)",
      "Phó Giám đốc Bệnh viện (2014 – 2022)",
      "Giám đốc Bệnh viện theo Quyết định số 1716/QĐ-BYT ngày 29/6/2022 của Bộ trưởng Bộ Y tế, có hiệu lực từ ngày 01/9/2022",
      "Trưởng Bộ môn Da liễu, Trường Đại học Y Hà Nội (từ tháng 10/2023)",
    ],
    honors: [],
  },
];
