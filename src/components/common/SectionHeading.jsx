import Reveal from "./Reveal";

/**
 * Tiêu đề mỗi mục: số thứ tự lớn + nhãn nhỏ + tiêu đề.
 * `title` có thể chứa <em> để tô màu chữ nghiêng.
 */
export default function SectionHeading({ number, kicker, title, light = false, animate = true }) {
  const content = (
    <>
      <span className="section__num">{number}</span>
      <div>
        <span className="section__kicker">{kicker}</span>
        <h2 className="section__title">{title}</h2>
      </div>
    </>
  );
  const className = `section__head ${light ? "section__head--light" : ""}`;

  return animate ? <Reveal className={className}>{content}</Reveal> : <div className={className}>{content}</div>;
}
