# Bệnh viện Da liễu Trung ương – Website giới thiệu

Next.js 15 (App Router), mọi trang được tạo sẵn thành HTML tĩnh (SSG) để tối ưu SEO.

## Chạy dự án

```bash
npm install
npm run dev     # phát triển: http://localhost:3000
npm run build   # build production
npm start       # chạy bản production sau khi build
```

## Các trang

| URL | Nội dung |
|---|---|
| `/` | Trang chủ – tóm tắt 4 mục |
| `/gioi-thieu` | 01. Giới thiệu chung |
| `/thanh-tuu` | 02. Thành tựu nổi bật |
| `/lanh-dao` | 03. Thế hệ Đảng ủy – Giám đốc |
| `/media` | 04. Media (ảnh, video, tin mới) |
| `/tin-tuc`, `/tin-tuc/<slug>` | Danh sách & chi tiết tin tức |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Tự sinh cho SEO |

## Sửa nội dung

Toàn bộ nội dung nằm trong `src/data/`:

- `site.js` – tên miền, mô tả, từ khóa SEO, link mạng xã hội
- `hospital.js` – thông tin chung, số liệu, sứ mệnh, nhiệm vụ, thành tựu, khen thưởng, mốc thời gian
- `leaders.js` – lãnh đạo đương nhiệm & các thế hệ lãnh đạo
- `media.js` – ảnh/video & tin tức (mỗi tin tự có trang riêng, tự vào sitemap)

Ảnh: chép vào `public/images/` rồi ghi đường dẫn, vd `photo: "/images/giam-doc.jpg"`.
Ảnh chia sẻ mạng xã hội: `public/og-image.png` (1200×630).

## Deploy lên Vercel

1. Đẩy code lên GitHub → vào vercel.com → **Add New Project** → chọn repo (Vercel tự nhận Next.js).
2. **Settings → Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL` = tên miền thật, vd `https://gioithieu.dalieu.vn` (**bắt buộc** – dùng cho canonical, sitemap, Open Graph)
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = mã xác minh Google Search Console (tùy chọn)
3. **Settings → Domains** → thêm tên miền, trỏ DNS theo hướng dẫn của Vercel.
4. Redeploy để áp dụng biến môi trường.

## Sau khi deploy

- Google Search Console: xác minh tên miền, gửi `https://<tên-miền>/sitemap.xml`
- Kiểm tra dữ liệu có cấu trúc: https://search.google.com/test/rich-results
- Kiểm tra ảnh chia sẻ Facebook: https://developers.facebook.com/tools/debug/
- Kiểm tra tốc độ: https://pagespeed.web.dev/
