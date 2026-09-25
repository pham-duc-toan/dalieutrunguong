import Link from "next/link";
import { hospital } from "@/data/hospital";

/** Logo + tên bệnh viện. light = phiên bản trên nền tối (footer). */
export default function Brand({ light = false }) {
  return (
    <Link href="/" className={`brand ${light ? "brand--light" : ""}`} aria-label={`${hospital.name} – Trang chủ`}>
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <rect width="40" height="40" rx="11" />
          <path d="M17 8h6v9h9v6h-9v9h-6v-9H8v-6h9z" />
        </svg>
      </span>
      <span className="brand__text">
        <strong>{hospital.name}</strong>
        <small>{hospital.nameEn}</small>
      </span>
    </Link>
  );
}
