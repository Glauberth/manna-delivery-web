import { Group } from "../../types/Group";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  data: Group[];
};

export default function GrupoSlider({ data }: Props) {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={3}
        loop={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <a href={"#l" + item.CODGRUPO}>
              <div className={styles.center}>
                <div className={styles.groupname}>{item.NOMEGRUPOAPP}</div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
