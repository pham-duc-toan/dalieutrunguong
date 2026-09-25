import Image from "next/image";
import Placeholder from "./Placeholder";

/**
 * Ảnh phủ kín khung cha (khung cha cần position: relative/absolute).
 * Có `src` → ảnh tối ưu bằng next/image; chưa có → khung màu giữ chỗ.
 */
export default function Cover({ src, alt = "", tone, label, sizes = "100vw", priority = false }) {
  if (!src) return <Placeholder tone={tone} label={label} />;
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />;
}
