"use client";

import { useEffect, useState } from "react";

/** true khi trang đã cuộn quá `offset` px. */
export function useScrolledPast(offset) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return past;
}
