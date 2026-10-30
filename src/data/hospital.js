/**
 * Thông tin chung & nội dung các mục Giới thiệu / Thành tựu.
 * Nguồn: Kỷ yếu "Bệnh viện Da liễu Trung ương – 40 năm xây dựng, hội nhập và phát triển" (2022).
 * Số liệu nhân lực, quy mô là số liệu tại thời điểm biên soạn Kỷ yếu – cập nhật nếu đã thay đổi.
 */

export const hospital = {
  name: "Bệnh viện Da liễu Trung ương",
  nameEn: "National Hospital of Dermatology & Venereology",
  founded: 1982,
  address: "15A Phương Mai, Hà Nội",
  streetAddress: "15A Phương Mai",
  city: "Hà Nội",
  website: "dalieu.vn",
  authority: "Bộ Y tế",
  rank: "Bệnh viện chuyên khoa hạng I",
  /** Ảnh mục Giới thiệu – đặt trong /public/images, để trống sẽ hiện khung màu */
  images: {
    main: "/images/gioi-thieu/khanh-thanh-toa-nha-ky-thuat-cao.jpg",
    mainAlt: "Lễ khánh thành tòa nhà Kỹ thuật cao Bệnh viện Da liễu Trung ương năm 2016",
    sub: "/images/gioi-thieu/ghep-te-bao-dieu-tri-bach-bien.jpg",
    subAlt: "Kỹ thuật ghép tế bào thượng bì tự thân điều trị bạch biến",
  },
};

/* ---------- Đầu trang ---------- */
export const heroStats = [
  { value: 40, suffix: "+", label: "Năm xây dựng & phát triển" },
  { value: 27, suffix: "", label: "Khoa, phòng, trung tâm" },
  { value: 402, suffix: "", label: "Cán bộ, nhân viên" },
  { value: 63, suffix: "/63", label: "Tỉnh, thành loại trừ bệnh phong" },
];

/* ---------- 01. Giới thiệu chung ---------- */
export const infoItems = [
  { icon: "pin", label: "Địa chỉ", value: hospital.address },
  { icon: "globe", label: "Website", value: hospital.website },
  { icon: "building", label: "Cơ quan chủ quản", value: hospital.authority },
  { icon: "star", label: "Phân hạng", value: hospital.rank },
];

export const missionVisionValues = [
  {
    icon: "star",
    title: "Sứ mệnh",
    text: "Chăm sóc, bảo vệ sức khỏe nhân dân; là tuyến cao nhất về khám bệnh, chữa bệnh, phục hồi chức năng chuyên khoa Da liễu cho người bệnh trong và ngoài nước.",
  },
  {
    icon: "eye",
    title: "Tầm nhìn",
    text: "Trở thành trung tâm Da liễu hiện đại, ngang tầm khu vực và quốc tế về chuyên môn, đào tạo và nghiên cứu.",
  },
  {
    icon: "heart",
    title: "Giá trị cốt lõi",
    text: "Tận tâm – Chuyên nghiệp – Đổi mới – Hợp tác, vì sức khỏe và vẻ đẹp làn da của cộng đồng.",
  },
];

export const duties = [
  {
    title: "Khám, chữa bệnh",
    text: "Tuyến cao nhất về cấp cứu, khám bệnh, chữa bệnh, phục hồi chức năng chuyên khoa Da liễu; triển khai các dịch vụ kỹ thuật cao, kỹ thuật mới.",
  },
  {
    title: "Đào tạo",
    text: "Cơ sở thực hành của Đại học Y Hà Nội và nhiều trường Y Dược; đào tạo sau đại học, đào tạo liên tục (mã B62) cho y bác sĩ cả nước.",
  },
  {
    title: "Nghiên cứu khoa học",
    text: "Thực hiện đề tài cấp Nhà nước, cấp Bộ, thử nghiệm lâm sàng đa trung tâm; ứng dụng khoa học, kỹ thuật hiện đại phục vụ người bệnh.",
  },
  {
    title: "Chỉ đạo tuyến",
    text: "Đơn vị đầu ngành chỉ đạo tuyến (Quyết định 4026/QĐ-BYT); chuyển giao kỹ thuật theo Đề án 1816, phát triển mạng lưới Da liễu toàn quốc.",
  },
  {
    title: "Phòng chống dịch bệnh",
    text: "Đứng đầu Chương trình phòng chống phong Quốc gia; phòng chống các bệnh lây truyền qua đường tình dục và dịch bệnh.",
  },
  {
    title: "Hợp tác quốc tế",
    text: "Hợp tác với WHO, CDC Hoa Kỳ, Đại học Oxford, các Hội chống phong quốc tế và nhiều trường đại học, bệnh viện trên thế giới.",
  },
];

/* ---------- 02. Thành tựu nổi bật ---------- */
export const featuredAchievement = {
  tag: "Chương trình quốc gia",
  title: "Loại trừ bệnh phong trên quy mô toàn quốc",
  text: "Là đơn vị đứng đầu Chương trình phòng chống phong Quốc gia, cùng toàn ngành đưa Việt Nam đạt tiêu chuẩn loại trừ bệnh phong của WHO năm 2000; đến năm 2015, 63/63 tỉnh, thành hoàn thành loại trừ phong tuyến tỉnh.",
  year: 2000,
  yearLabel: "Loại trừ bệnh phong theo tiêu chuẩn WHO",
};

export const achievements = [
  {
    icon: "flask",
    title: "Kỹ thuật chuyên sâu",
    text: "Đơn vị đầu tiên ghép tế bào thượng bì tự thân không qua nuôi cấy điều trị bạch biến; cơ sở duy nhất thực hiện thường quy phẫu thuật Mohs điều trị ung thư da.",
  },
  {
    icon: "chart",
    title: "Thử nghiệm lâm sàng",
    text: "Bệnh viện công lập đầu tiên được cấp chứng nhận Thực hành tốt thử thuốc trên lâm sàng (GCP) năm 2019.",
  },
  {
    icon: "cap",
    title: "Đào tạo nhân lực",
    text: "Mỗi năm đào tạo thực hành cho hàng nghìn sinh viên, học viên sau đại học; tiếp nhận bác sĩ từ Mỹ, Pháp, Nhật Bản, Lào, Campuchia.",
  },
  {
    icon: "globe",
    title: "Hội nhập quốc tế",
    text: "Đăng cai Hội nghị Da liễu châu Á – Australia lần thứ 21 (2014), World Skin Summit (2018); bệnh viện Việt Nam đầu tiên vào “Top 10 Thương hiệu được tin dùng nhất ASIA” (2019).",
  },
];

export const awards = [
  { title: "Huân chương Lao động hạng Nhất", note: "Năm 2022" },
  { title: "Huân chương Lao động hạng Nhì", note: "Năm 2002" },
  { title: "Huân chương Lao động hạng Ba", note: "Năm 1983" },
  { title: "Đơn vị xuất sắc trong phong trào thi đua", note: "Năm 2018 và 2020" },
  { title: "Cờ thi đua Chính phủ, Cờ thi đua Bộ Y tế", note: "Cùng nhiều Bằng khen của Nhà nước và ngành Y tế" },
  { title: "Thầy thuốc Nhân dân, Thầy thuốc Ưu tú", note: "Danh hiệu cao quý trao tặng nhiều cán bộ của Bệnh viện" },
];

export const milestones = [
  {
    year: "1954",
    title: "Thành lập Khoa Da liễu – Bệnh viện Bạch Mai",
    text: "Tháng 10/1954, GS. Đặng Vũ Hỷ cùng 45 cán bộ từ chiến khu Việt Bắc về tiếp quản, đặt nền móng cho ngành Da liễu.",
  },
  {
    year: "1982",
    title: "Thành lập Viện Da liễu Việt Nam",
    text: "Quyết định số 70/BYT-QĐ ngày 28/01/1982 của Bộ Y tế; GS. Lê Kinh Duệ làm Viện trưởng.",
  },
  {
    year: "2006",
    title: "Thành lập Viện Da liễu Quốc gia",
    text: "Quyết định số 486/QĐ-TTg ngày 30/3/2006 của Thủ tướng Chính phủ, trực thuộc Bộ Y tế.",
  },
  {
    year: "2009",
    title: "Đổi tên thành Bệnh viện Da liễu Trung ương",
    text: "Quyết định số 4453/QĐ-BYT ngày 13/11/2009 của Bộ Y tế.",
  },
  {
    year: "2022",
    title: "40 năm xây dựng và phát triển",
    text: "Vinh dự đón nhận Huân chương Lao động hạng Nhất.",
  },
];
