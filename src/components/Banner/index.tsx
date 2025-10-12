import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
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
        slidesPerView={2}
        loop={false}
        grid={{
          fill: "row",
          rows: 1,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        style={{ height: 260 }}
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
