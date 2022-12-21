import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Banner() {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <img src="/tmp/banner1.png" alt="banner" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/tmp/banner1.png" alt="banner" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/tmp/banner1.png" alt="banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
