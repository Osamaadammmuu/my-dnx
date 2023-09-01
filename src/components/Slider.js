import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../styles/Slider.scss";
// -----------------------------------------
function Slider() {
  return (
    <Swiper className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="pic" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" alt="pic" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt="pic" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png" alt="pic" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="pic" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" alt="pic" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt="pic" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png" alt="pic" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="pic" /></SwiperSlide>
      <SwiperSlide><img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" alt="pic" /></SwiperSlide>
    </Swiper>
  );
}
export default Slider;
