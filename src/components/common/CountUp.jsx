"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const DURATION = 1600;

/**
 * Số tự đếm lên khi cuộn tới. Nếu là năm (vd 1995) thì đếm từ (năm - 60) và không có dấu chấm.
 * HTML từ server luôn chứa số cuối cùng (tốt cho SEO); hiệu ứng chỉ chạy trên trình duyệt.
 */
export default function CountUp({ to }) {
  const [ref, inView] = useInView({ threshold: 0.6, rootMargin: "0px" });
  const isYear = to > 1900 && to < 2100;
  const from = isYear ? to - 60 : 0;
  const [value, setValue] = useState(to);
  const [armed, setArmed] = useState(false);

  // Sau khi tải trang: đưa về giá trị bắt đầu để chuẩn bị đếm (trừ khi người dùng tắt hiệu ứng)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(from);
    setArmed(true);
  }, [from]);

  useEffect(() => {
    if (!inView || !armed) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, armed, from, to]);

  return <span ref={ref}>{isYear ? value : value.toLocaleString("vi-VN")}</span>;
}
