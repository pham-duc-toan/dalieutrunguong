/**
 * Bộ icon dùng trong trang. Màu và nét vẽ được quyết định bởi CSS của phần tử cha.
 * Dùng: <Icon name="pin" />
 */
const ICONS = {
  pin: (
    <>
      <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  building: <path d="M3 21h18M5 21V8l7-5 7 5v13M10 21v-5h4v5" />,
  star: <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.6 7.1 17.2 8 11.7 4 7.8 9.5 7z" />,
  starFilled: <path d="M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z" />,
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  heart: <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />,
  flask: (
    <>
      <path d="M9 3h6v4l4 11a2 2 0 0 1-2 3H7a2 2 0 0 1-2-3L9 7z" />
      <path d="M8 14h8" />
    </>
  ),
  chart: <path d="M4 19V5M4 19h16M8 15l4-4 3 3 5-6" />,
  cap: (
    <>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  play: <path d="M8 5v14l11-7z" />,
};

export default function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}
