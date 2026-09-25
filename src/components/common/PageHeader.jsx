import Link from "next/link";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

/**
 * Phần đầu của trang con: breadcrumb + nhãn + tiêu đề h1 + đoạn mô tả.
 * crumbs: [{ name, path }] – mục cuối là trang hiện tại.
 * children: nội dung phụ dưới đoạn mô tả (vd ngày đăng bài).
 */
export default function PageHeader({ number, kicker, title, lead, crumbs, children }) {
  return (
    <section className="page-hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="grid-dots" />
      </div>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <Reveal className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            {crumbs.map((crumb, i) =>
              i === crumbs.length - 1 ? (
                <li key={crumb.path} aria-current="page">
                  {crumb.name}
                </li>
              ) : (
                <li key={crumb.path}>
                  <Link href={crumb.path}>{crumb.name}</Link>
                </li>
              )
            )}
          </ol>
        </nav>

        <div className="page-hero__head">
          {number && <span className="section__num">{number}</span>}
          <div>
            <span className="section__kicker">{kicker}</span>
            <h1 className="page-hero__title">{title}</h1>
            {lead && <p className="page-hero__lead">{lead}</p>}
            {children && <div className="page-hero__meta">{children}</div>}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
