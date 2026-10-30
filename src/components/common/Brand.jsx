import Image from "next/image";
import Link from "next/link";
import { hospital } from "@/data/hospital";

/** Logo + tên bệnh viện. light = phiên bản trên nền tối (footer). */
export default function Brand({ light = false }) {
  return (
    <Link href="/" className={`brand ${light ? "brand--light" : ""}`} aria-label={`${hospital.name} – Trang chủ`}>
      <span className="brand__mark" aria-hidden="true">
        <Image src="/images/logo.png" alt="" width={150} height={138} quality={100} />
      </span>
      <span className="brand__text">
        <strong>{hospital.name}</strong>
        <small>{hospital.nameEn}</small>
      </span>
    </Link>
  );
}
