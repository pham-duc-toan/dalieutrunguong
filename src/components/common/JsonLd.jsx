/** Chèn dữ liệu có cấu trúc (schema.org JSON-LD) vào trang. */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // Thoát ký tự "<" để không thể đóng thẻ <script> sớm
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
