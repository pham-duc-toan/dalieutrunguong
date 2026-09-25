/**
 * Thông tin chung & nội dung các mục Giới thiệu / Thành tựu.
 * LƯU Ý: số liệu, mốc thời gian, khen thưởng là DỮ LIỆU MẪU – cần đối chiếu
 * với thông tin chính thức của bệnh viện trước khi công bố.
 */

export const hospital = {
  name: "Bệnh viện Da liễu Trung ương",
  nameEn: "National Hospital of Dermatology & Venereology",
  founded: 1982,
  address: "15A Phương Mai, Hà Nội",
  website: "dalieu.vn",
  authority: "Bộ Y tế",
};

/* ---------- Đầu trang ---------- */
export const heroStats = [
  { value: 40, suffix: "+", label: "Năm xây dựng & phát triển" },
  { value: 1, suffix: " triệu+", label: "Lượt khám mỗi năm" },
  { value: 30, suffix: "+", label: "Khoa, phòng, trung tâm" },
  { value: 63, suffix: "", label: "Tỉnh, thành được chỉ đạo tuyến" },
];

/* ---------- 01. Giới thiệu chung ---------- */
export const infoItems = [
  { icon: "pin", label: "Địa chỉ", value: hospital.address },
  { icon: "globe", label: "Website", value: hospital.website },
  { icon: "building", label: "Cơ quan chủ quản", value: hospital.authority },
];

export const missionVisionValues = [
  {
    icon: "star",
    title: "Sứ mệnh",
    text: "Cung cấp dịch vụ chăm sóc, điều trị bệnh da liễu chất lượng cao, an toàn, lấy người bệnh làm trung tâm.",
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
  { title: "Khám, chữa bệnh", text: "Tuyến cao nhất về chẩn đoán, điều trị bệnh da, bệnh lây truyền qua đường tình dục, bệnh phong." },
  { title: "Đào tạo", text: "Đào tạo đại học, sau đại học và đào tạo liên tục cho cán bộ chuyên ngành trên cả nước." },
  { title: "Nghiên cứu khoa học", text: "Triển khai đề tài các cấp, ứng dụng kỹ thuật mới và công nghệ cao trong điều trị." },
  { title: "Chỉ đạo tuyến", text: "Hỗ trợ chuyên môn, chuyển giao kỹ thuật cho mạng lưới Da liễu các tỉnh, thành phố." },
  { title: "Phòng bệnh", text: "Đầu mối các chương trình quốc gia về phòng chống bệnh phong và bệnh da cộng đồng." },
  { title: "Hợp tác quốc tế", text: "Kết nối với các tổ chức, bệnh viện, trường đại học uy tín trong khu vực và thế giới." },
];

/* ---------- 02. Thành tựu nổi bật ---------- */
export const featuredAchievement = {
  tag: "Chương trình quốc gia",
  title: "Loại trừ bệnh phong trên quy mô toàn quốc",
  text: "Là đơn vị đầu mối Chương trình phòng chống bệnh phong, góp phần quan trọng giúp Việt Nam đạt tiêu chuẩn loại trừ bệnh phong ở quy mô quốc gia.",
  year: 1995,
  yearLabel: "Năm đạt mục tiêu loại trừ",
};

export const achievements = [
  { icon: "flask", title: "Kỹ thuật cao", text: "Làm chủ laser, ánh sáng trị liệu, phẫu thuật Mohs, cấy ghép tế bào trong điều trị bệnh da." },
  { icon: "chart", title: "Nghiên cứu khoa học", text: "Nhiều đề tài cấp Nhà nước, cấp Bộ; công bố quốc tế và ứng dụng thành công vào thực tiễn." },
  { icon: "cap", title: "Đào tạo nhân lực", text: "Đào tạo hàng nghìn bác sĩ chuyên khoa, thạc sĩ, tiến sĩ Da liễu cho cả nước." },
  { icon: "monitor", title: "Chuyển đổi số", text: "Ứng dụng bệnh án điện tử, đặt lịch khám trực tuyến, khám từ xa kết nối các tuyến." },
];

export const awards = [
  { title: "Huân chương Lao động", note: "Hạng Nhất, Nhì, Ba" },
  { title: "Huân chương Độc lập", note: "Ghi nhận những đóng góp to lớn" },
  { title: "Cờ thi đua Chính phủ", note: "Đơn vị dẫn đầu phong trào thi đua" },
  { title: "Bằng khen Bộ Y tế", note: "Nhiều năm liên tục" },
];

export const milestones = [
  { year: "1982", title: "Thành lập Viện Da liễu Việt Nam", text: "Đặt nền móng cho hệ thống chuyên ngành Da liễu cả nước." },
  { year: "1995", title: "Loại trừ bệnh phong quy mô quốc gia", text: "Dấu mốc quan trọng của Chương trình phòng chống phong." },
  { year: "2000s", title: "Đổi tên thành Bệnh viện Da liễu Trung ương", text: "Mở rộng quy mô, nâng cao năng lực khám chữa bệnh." },
  { year: "2010s", title: "Phát triển kỹ thuật cao", text: "Đầu tư hệ thống laser, trung tâm thẩm mỹ da, phẫu thuật da." },
  { year: "Nay", title: "Hướng tới bệnh viện thông minh", text: "Chuyển đổi số toàn diện, hội nhập quốc tế sâu rộng." },
];
