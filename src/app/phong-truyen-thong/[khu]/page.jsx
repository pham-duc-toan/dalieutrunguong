import { notFound } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import ZoneContent from "@/components/showroom/ZoneContent";
import { pageMetadata } from "@/lib/seo";
import { showroomZones, getZoneBySlug } from "@/data/showroom";

const BASE = "/phong-truyen-thong";

export const dynamicParams = false;

export function generateStaticParams() {
  return showroomZones.map((zone) => ({ khu: zone.slug }));
}

export async function generateMetadata({ params }) {
  const { khu } = await params;
  const zone = getZoneBySlug(khu);
  if (!zone) return {};
  return {
    ...pageMetadata({ title: `${zone.name} – Phòng truyền thống`, description: zone.body, path: `${BASE}/${zone.slug}` }),
    // Trang dùng trong trình xem 360°, nội dung trùng các trang chính → không đưa vào kết quả tìm kiếm
    robots: { index: false, follow: true },
  };
}

/** "Lịch sử hình thành *và phát triển*" → chữ giữa hai dấu * in nghiêng màu */
function ZoneTitle({ text }) {
  return text.split("*").map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));
}

export default async function ZonePage({ params }) {
  const { khu } = await params;
  const zone = getZoneBySlug(khu);
  if (!zone) notFound();
  const index = showroomZones.indexOf(zone);

  return (
    <>
      <PageHeader
        number={index ? String(index).padStart(2, "0") : undefined}
        kicker={index ? "Phòng truyền thống" : "Phòng truyền thống · Sảnh"}
        title={<ZoneTitle text={zone.title} />}
        lead={zone.lead ?? zone.body}
        crumbs={[
          { name: "Phòng truyền thống 360°", path: BASE },
          { name: zone.name, path: `${BASE}/${zone.slug}` },
        ]}
      />
      <ZoneContent id={zone.id} />
    </>
  );
}
