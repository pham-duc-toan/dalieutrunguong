import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icon";

/** Nút "Xem đầy đủ" ở cuối mỗi mục trên trang chủ, dẫn tới trang chi tiết. */
export default function MoreLink({ href, children }) {
  return (
    <Reveal className="section__more">
      <Link href={href} className="btn btn--primary">
        {children} <Icon name="arrowRight" />
      </Link>
    </Reveal>
  );
}
