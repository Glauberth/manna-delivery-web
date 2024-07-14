import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/effect-fade";
import BannerProductItem from "../BannerProductItem";
import { Product } from "../../types/Products";

type Props = {
  data: Product[];
};

export default function Banner({ data }: Props) {
  return (
    <div className={styles.container}>
      <h1>Em oferta</h1>
      <Swiper
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {data &&
          data.length > 0 &&
          data.map((product, index) => (
            <SwiperSlide className={styles.slide} key={index}>
              <BannerProductItem
                data={{
                  CODBARRA: "1",
                  CODPRODUTO: 1,
                  URLIMAGE: "https://fileupload.mannatech.com.br/files/doc_17109467560006051921.jpg",
                  CODGRUPO: 1,
                  NOME: "HAMBURGUER",
                  DESCRICAO: "BIG DURO DE MATAR (NO SALAD)",
                  OBSERVACAO:
                    "Pão australiano selado na manteiga, 2 blends da casa(280g de carne), 2 fatias de cheddar, 2 fatias de bacon e zero salada, pros carnívoros",
                  PRECOVENDA: 50,
                  PRECOPROMO: 40,
                }}
              />
            </SwiperSlide>
          ))}

        {/* <SwiperSlide className={styles.slide}>
          <BannerProductItem
            data={{
              CODPRODUTO: 1,
              URLIMAGE: "https://fileupload.mannatech.com.br/files/doc_17130137830555885361.jpg",
              CODGRUPO: 1,
              NOME: "HAMBURGUER",
              DESCRICAO: "CORINGA (SANDUICHE DE CARNE DE SOL) NOVIDADE",
              OBSERVACAO:
                "Pão australiano selado na manteiga, 2 blends da casa(280g de carne), 2 fatias de cheddar, 2 fatias de bacon e zero salada, pros carnívoros",
              PRECOVENDA: 27,
              PRECOPROMO: 30,
            }}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <BannerProductItem
            data={{
              CODPRODUTO: 1,
              URLIMAGE: "https://fileupload.mannatech.com.br/files/doc_17109467560006051921.jpg",
              CODGRUPO: 1,
              NOME: "HAMBURGUER",
              DESCRICAO: "BIG DURO DE MATAR (NO SALAD)",
              OBSERVACAO:
                "Pão australiano selado na manteiga, 2 blends da casa(280g de carne), 2 fatias de cheddar, 2 fatias de bacon e zero salada, pros carnívoros",
              PRECOVENDA: 50,
              PRECOPROMO: 40,
            }}
          />
         
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <BannerProductItem
            data={{
              CODPRODUTO: 1,
              URLIMAGE: "https://fileupload.mannatech.com.br/files/doc_17109467560006051921.jpg",
              CODGRUPO: 1,
              NOME: "HAMBURGUER",
              DESCRICAO: "BIG DURO DE MATAR (NO SALAD)",
              OBSERVACAO:
                "Pão australiano selado na manteiga, 2 blends da casa(280g de carne), 2 fatias de cheddar, 2 fatias de bacon e zero salada, pros carnívoros",
              PRECOVENDA: 50,
              PRECOPROMO: 40,
            }}
          />
         
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
