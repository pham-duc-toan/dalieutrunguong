import { useInView } from "../../hooks/useInView";

/**
 * Bọc nội dung để có hiệu ứng trượt lên + hiện dần khi cuộn tới.
 * <Reveal as="article" delay={0.1} className="card">...</Reveal>
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`.trim()}
      style={{ "--d": `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
