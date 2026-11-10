import Reveal from "../common/Reveal";
import Emblem3D from "./Emblem3D";
import { emblemText } from "@/data/showroom";

/** Khối biểu tượng 45 năm dạng 3D (tự xoay, kéo để xoay tay). */
export default function EmblemSection() {
  return (
    <section className="section emblem-section" id="bieu-tuong-45-nam">
      <div className="container emblem-section__inner">
        <Reveal className="emblem-section__stage">
          <Emblem3D />
          <span className="emblem-section__hint">Kéo để xoay biểu tượng</span>
        </Reveal>
        <Reveal className="emblem-section__text" delay={0.1}>
          <span className="section__kicker">Hướng tới kỷ niệm 45 năm</span>
          <h2 className="section__title">
            <em>45 năm</em> và cành liễu
          </h2>
          <p>{emblemText}</p>
        </Reveal>
      </div>
    </section>
  );
}
