import { showroomConfig } from "@/data/showroom";

export const dynamic = "force-static";

/** Cấu hình nội dung cho trình xem Phòng truyền thống 360° (public/360). */
export function GET() {
  return Response.json(showroomConfig);
}
