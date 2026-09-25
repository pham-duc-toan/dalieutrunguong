import Link from "next/link";
import Reveal from "./common/Reveal";
import CountUp from "./common/CountUp";
import Icon from "./common/Icon";
import { hospital, heroStats } from "@/data/hospital";

/** Hình minh họa: dấu chữ thập trong các vòng tròn tế bào. */
function HeroArt() {
  return (
    <svg viewBox="0 0 400 400" className="cells">
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".35" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="170" fill="url(#heroGlow)" />
      <g fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.2">
        <circle cx="200" cy="200" r="150" />
        <circle cx="200" cy="200" r="115" />
        <circle cx="200" cy="200" r="80" />
      </g>
      <g fill="rgba(255,255,255,.18)">
        <circle cx="120" cy="130" r="26" />
        <circle cx="280" cy="120" r="18" />
        <circle cx="300" cy="260" r="30" />
        <circle cx="130" cy="280" r="20" />
        <circle cx="210" cy="320" r="12" />
        <circle cx="85" cy="205" r="10" />
      </g>
      <g fill="#fff">
        <path d="M188 150h24v38h38v24h-38v38h-24v-38h-38v-24h38z" opacity=".95" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="grid-dots" />
      </div>

      <div className="container hero__inner">
        <Reveal className="hero__content">
          <span className="eyebrow">
            <span className="dot" /> Bệnh viện chuyên khoa đầu ngành · {hospital.authority}
          </span>
          <h1 className="hero__title">
            Tận tâm vì <em>làn da</em>
            <br />
            và sức khỏe người Việt
          </h1>
          <p className="hero__lead">
            Hơn bốn thập kỷ xây dựng và phát triển, {hospital.name} là tuyến cuối về khám, chữa bệnh, đào tạo,
            nghiên cứu khoa học và chỉ đạo tuyến chuyên ngành Da liễu trên cả nước.
          </p>
          <div className="hero__actions">
            <Link href="/gioi-thieu" className="btn btn--primary">
              Khám phá bệnh viện <Icon name="arrowRight" />
            </Link>
            <Link href="/media" className="btn btn--ghost">
              <span className="play-ic" aria-hidden="true">
                <Icon name="play" />
              </span>
              Xem media
            </Link>
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={0.15}>
          <div className="hero-card">
            <div className="hero-card__art" aria-hidden="true">
              <HeroArt />
            </div>
            <div className="hero-card__caption">
              <span>Thành lập</span>
              <strong>{hospital.founded}</strong>
              <span>Tiền thân là Viện Da liễu Việt Nam</span>
            </div>
          </div>

          <div className="chip chip--a">
            <span className="chip__ic">
              <Icon name="heart" />
            </span>
            <div>
              <strong>Tuyến cuối</strong>
              <small>Chuyên ngành Da liễu</small>
            </div>
          </div>
          <div className="chip chip--b">
            <span className="chip__ic chip__ic--gold">
              <Icon name="starFilled" />
            </span>
            <div>
              <strong>Đào tạo &amp; NCKH</strong>
              <small>Cơ sở đầu ngành</small>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <Reveal as="ul" className="stats" delay={0.25}>
          {heroStats.map((stat) => (
            <li key={stat.label}>
              <strong>
                <CountUp to={stat.value} />
                {stat.suffix}
              </strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
