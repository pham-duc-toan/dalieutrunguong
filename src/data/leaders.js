/**
 * Thế hệ Đảng ủy – Giám đốc.
 * - photo: đường dẫn ảnh, đặt ảnh trong thư mục /public/images/... rồi ghi "/images/ten-anh.jpg".
 *   Để trống "" sẽ hiển thị chữ cái đầu của tên.
 * LƯU Ý: Tên, chức danh, nhiệm kỳ là DỮ LIỆU MẪU – cần đối chiếu thông tin chính thức.
 */

export const currentLeaders = [
  { name: "PGS.TS. Lê Hữu Doanh", role: "Bí thư Đảng ủy – Giám đốc Bệnh viện", featured: true, photo: "" },
  { name: "Họ và tên", role: "Phó Bí thư Đảng ủy – Phó Giám đốc", photo: "" },
  { name: "Họ và tên", role: "Phó Giám đốc", photo: "" },
  { name: "Họ và tên", role: "Phó Giám đốc", photo: "" },
  { name: "Họ và tên", role: "Ủy viên Ban Thường vụ Đảng ủy", photo: "" },
];

export const leaderGenerations = [
  {
    period: "1982 – 1990s",
    title: "Thế hệ đặt nền móng",
    note: "Thành lập Viện Da liễu Việt Nam, xây dựng hệ thống chuyên ngành từ Trung ương đến địa phương.",
    people: [
      { name: "GS. Nguyễn Cảnh Cầu", role: "Viện trưởng" },
      { name: "Họ và tên", role: "Bí thư Đảng ủy" },
    ],
  },
  {
    period: "1990s – 2000s",
    title: "Thế hệ kế thừa & mở rộng",
    note: "Đẩy mạnh chương trình phòng chống phong, đạt mục tiêu loại trừ bệnh phong quy mô quốc gia.",
    people: [
      { name: "GS. Lê Kinh Duệ", role: "Viện trưởng" },
      { name: "Họ và tên", role: "Bí thư Đảng ủy" },
    ],
  },
  {
    period: "2000s – 2010s",
    title: "Thế hệ đổi mới",
    note: "Chuyển đổi thành Bệnh viện Da liễu Trung ương, đầu tư kỹ thuật cao và mở rộng hợp tác quốc tế.",
    people: [
      { name: "GS.TS. Trần Hậu Khang", role: "Giám đốc" },
      { name: "Họ và tên", role: "Bí thư Đảng ủy" },
    ],
  },
  {
    period: "2010s – 2020",
    title: "Thế hệ hội nhập",
    note: "Phát triển các trung tâm chuyên sâu, nâng cao chất lượng dịch vụ và đào tạo.",
    people: [
      { name: "PGS.TS. Nguyễn Văn Thường", role: "Giám đốc" },
      { name: "Họ và tên", role: "Bí thư Đảng ủy" },
    ],
  },
  {
    period: "2020 – nay",
    title: "Thế hệ chuyển đổi số",
    note: "Hướng tới bệnh viện thông minh, hiện đại, ngang tầm khu vực.",
    people: [{ name: "PGS.TS. Lê Hữu Doanh", role: "Bí thư Đảng ủy – Giám đốc" }],
  },
];
