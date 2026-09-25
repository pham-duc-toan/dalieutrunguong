import Reveal from "./common/Reveal";
import Icon from "./common/Icon";
import Cover from "./common/Cover";
import MoreLink from "./common/MoreLink";
import SectionHeading from "./common/SectionHeading";
import { hospital, infoItems, missionVisionValues, duties } from "@/data/hospital";

/**
 * 01. Giới thiệu chung
 * variant="preview": trang chủ (có tiêu đề mục + nút xem thêm, không có chức năng nhiệm vụ)
 * variant="full":    trang /gioi-thieu (tiêu đề nằm ở PageHeader)
 */
export default function About({ variant = "full" }) {
  const isPreview = variant === "preview";
  const Heading = isPreview ? "h3" : "h2";

  return (
    <section className={`section ${isPreview ? "" : "section--flush"}`} id="gioi-thieu">
      <div className="container">
        {isPreview && (
          <SectionHeading
            number="01"
            kicker="Giới thiệu chung"
            title={
              <>
                Bệnh viện chuyên khoa <em>đầu ngành</em> về Da liễu của Việt Nam
              </>
            }
          />
        )}

        <div className="about">
          <Reveal className="about__text">
            <p className="lead">
              Bệnh viện Da liễu Trung ương là bệnh viện chuyên khoa trực thuộc Bộ Y tế, tiền thân là{" "}
              <strong>Viện Da liễu Việt Nam</strong> được thành lập năm 1982. Trải qua hơn 40 năm, bệnh viện đã trở
              thành trung tâm hàng đầu cả nước về chẩn đoán, điều trị các bệnh da, bệnh lây truyền qua đường tình dục,
              bệnh phong và thẩm mỹ da.
            </p>
            <p>
              Bệnh viện đồng thời là cơ sở đào tạo, thực hành cho các trường đại học y, là đầu mối chỉ đạo tuyến và
              triển khai các chương trình quốc gia trong lĩnh vực Da liễu; tích cực hợp tác quốc tế và ứng dụng những kỹ
              thuật tiên tiến nhất vào khám, chữa bệnh.
            </p>

            <div className="info-list">
              {infoItems.map((item) => (
                <div className="info-item" key={item.label}>
                  <span className="info-item__ic">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <small>{item.label}</small>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="about__visual" delay={0.1}>
            <div className="photo photo--main">
              <Cover
                src={hospital.images.main}
                alt={`Toàn cảnh ${hospital.name}`}
                tone="teal"
                label="Ảnh toàn cảnh bệnh viện"
                sizes="(max-width: 960px) 90vw, 45vw"
              />
            </div>
            <div className="photo photo--sub">
              <Cover
                src={hospital.images.sub}
                alt="Hoạt động chuyên môn tại bệnh viện"
                tone="sand"
                label="Ảnh hoạt động chuyên môn"
                sizes="(max-width: 960px) 50vw, 25vw"
              />
            </div>
            <div className="badge-year">
              <strong>40+</strong>
              <span>
                năm đồng hành
                <br />
                cùng người bệnh
              </span>
            </div>
          </Reveal>
        </div>

        {/* Sứ mệnh – Tầm nhìn – Giá trị cốt lõi */}
        <div className="mvv">
          {missionVisionValues.map((item, i) => (
            <Reveal as="article" className="mvv__card" delay={i * 0.08} key={item.title}>
              <span className="mvv__ic">
                <Icon name={item.icon} />
              </span>
              <Heading>{item.title}</Heading>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        {isPreview ? (
          <MoreLink href="/gioi-thieu">Xem giới thiệu đầy đủ</MoreLink>
        ) : (
          <Reveal className="duties">
            <h2 className="duties__title">Chức năng &amp; nhiệm vụ</h2>
            <div className="duties__grid">
              {duties.map((duty, i) => (
                <div className="duty" key={duty.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{duty.title}</h3>
                  <p>{duty.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
