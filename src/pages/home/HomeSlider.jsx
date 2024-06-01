import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeSlider = ({ data }) => {
  return (
    <div className="slider-container flex object-cover w-full h-72 mt-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        loop={true}
        lazyPreloadPrevNext={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          //Khi màn hình đạt 640px thì hiển thị 2 slide
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          //Khi màn hình đạt 768px thì hiển thị 3 slide
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-11/12 h-11/12"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              className="object-cover h-72 rounded-lg"
              src={slide.images}
              alt={slide.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
