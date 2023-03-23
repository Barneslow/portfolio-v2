import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";

import "swiper/css";
import styles from "./CustomSlider.module.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useModal2 } from "@/hooks/useModal";
import ZoomInModal from "./modal/ZoomInModal";
import { useState } from "react";

function CustomSlider({ slides }) {
  const { open, modalOpen, close } = useModal2();
  const [modalItem, setModalItem] = useState();

  function openHandler(item) {
    setModalItem(item);
    open();
  }

  return (
    <div className={styles.container}>
      <ZoomInModal modalOpen={modalOpen} close={close} item={modalItem} />
      <Swiper
        breakpoints={{
          500: {
            slidesPerView: 3,
          },
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        navigation={true}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ width: 320, height: 280 }}
            className={styles["swiper-slide"]}
            onDoubleClick={() => openHandler(item)}
          >
            <img src={`/images/cert${index + 1}.jpg`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomSlider;
