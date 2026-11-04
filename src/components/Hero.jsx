import Image from "next/image";
import Link from "next/link";
import Reveal from "./common/Reveal";
import CountUp from "./common/CountUp";
import Icon from "./common/Icon";
import { hospital, heroStats } from "@/data/hospital";

export default function Hero() {
  return (
    <section className="hero">
      {/* Ảnh toàn cảnh: nền tràn bên phải (desktop), thẻ ảnh dưới phần chữ (mobile) */}
      <div className="hero__media">
        <Image
          src="/images/gioi-thieu/toan-canh-benh-vien.jpg"
          alt={`Toàn cảnh ${hospital.name}`}
          fill
          priority
          sizes="(max-width: 960px) 100vw, 70vw"
          quality={85}
          className="hero__img"
        />
        <span className="hero__badge">
          <strong>45</strong>
          <span>
            năm hình thành
            <br />
            và phát triển
          </span>
        </span>
        <span className="hero__tag">
          <Icon name="pin" />
          {hospital.address}
        </span>
      </div>

      <div className="container hero__inner">
        <Reveal className="hero__content">
          <span className="eyebrow">
            <span className="dot" /> {hospital.rank} · {hospital.authority}
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
          <p className="hero__since">
            <strong>{hospital.founded}</strong>
            <span>
              Thành lập Viện Da liễu Việt Nam
              <br />
              Hướng tới kỷ niệm 45 năm · 28/01/2027
            </span>
          </p>
        </Reveal>
      </div>

      <div className="container hero__stats-wrap">
        <Reveal as="ul" className="stats" delay={0.2}>
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
