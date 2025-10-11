import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/effect-fade";
import BannerProductItem from "../BannerProductItem";
import { Product } from "../../types/Products";

type Props = {
  data?: Product[];
};

export default function Banner({ data }: Props) {
  return (
    <div className={styles.container}>
      <h1 style={{ marginBottom: 10 }}>Destaques</h1>
      <Swiper
        className={styles.swiper}
        slidesPerView={3}
        loop={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data &&
          data.length > 0 &&
          data.map((product, index) => (
            <SwiperSlide className={styles.slide} key={index}>
              <BannerProductItem data={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
