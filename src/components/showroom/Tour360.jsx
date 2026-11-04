"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "../common/Icon";

/**
 * Khung tham quan 360°: hiện ảnh toàn cảnh + nút bắt đầu; bấm mới nạp bộ xem 360° (nặng, dùng WebGL)
 * nên trang vẫn mở nhanh và không tốn dữ liệu của người chỉ xem lướt.
 */
export default function Tour360() {
  const [started, setStarted] = useState(false);

  return (
    <div className="tour">
      {started ? (
        <iframe
          className="tour__frame"
          src="/360/index.html"
          title="Tham quan 360° Phòng truyền thống Bệnh viện Da liễu Trung ương"
          allow="fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="tour__poster" onClick={() => setStarted(true)} aria-label="Bắt đầu tham quan 360°">
          <Image
            src="/images/phong-truyen-thong-toan-canh.jpg"
            alt="Phối cảnh toàn cảnh Phòng truyền thống Bệnh viện Da liễu Trung ương"
            fill
            priority
            sizes="(max-width: 1240px) 100vw, 1160px"
            style={{ objectFit: "cover" }}
          />
          <span className="tour__cta">
            <span className="tour__play">
              <Icon name="play" />
            </span>
            Bắt đầu tham quan 360°
          </span>
          <span className="tour__hint">Kéo để nhìn quanh · Cuộn hoặc chụm để phóng to · Chọn khu để xem nội dung</span>
        </button>
      )}
    </div>
  );
}
