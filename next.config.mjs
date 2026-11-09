/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Phòng truyền thống 360° nay là trang chủ
  async redirects() {
    return [{ source: "/phong-truyen-thong", destination: "/", permanent: true }];
  },
};

export default nextConfig;
