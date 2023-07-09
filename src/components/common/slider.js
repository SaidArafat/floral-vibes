import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Plan from "./plan";
import Card from "./card";

const Slider = ({ slides, testimonials }) => {
  const renderedSlides = slides.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        {testimonials ? (
          <Card
            image={item.image}
            title={item.title}
            message={item.message}
            job={item.job}
          />
        ) : (
          <Plan
            item={item}
            // image={item.image}
            // title={item.title}
            // price={item.price}
          />
        )}
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        navigation
        grabCursor
        slidesPerView={1}
        spaceBetween={30}
        // loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {renderedSlides}
      </Swiper>
    </>
  );
};

export default Slider;
