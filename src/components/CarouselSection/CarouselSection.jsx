import React, { useRef, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarouselSection = () => {
  const swiperRef = useRef(null);

  const slides = [
    { url: "/perfume-2.png", alt: "Floral Perfume Bottle" },
    { url: "/perfume-1.png", alt: "Purple Eau de Parfum" },
    { url: "/perfume-3.jpeg", alt: "Perfume Bottle 3" },
    { url: "/perfume-4.jpeg", alt: "Perfume Bottle 4" },
    { url: "/perfume-5.jpeg", alt: "Perfume Bottle 5" },
  ];

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      swiperRef.current.swiper.params.navigation
    ) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = ".custom-swiper-button-prev";
      swiper.params.navigation.nextEl = ".custom-swiper-button-next";
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-20 flex flex-col lg:flex-row justify-center items-center gap-5">
      <div className="lg:w-1/2 w-full relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-[450px] object-cover rounded"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-button-prev absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer">
          ←
        </div>
        <div className="custom-swiper-button-next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer">
          →
        </div>
      </div>

      <div className="bg-[#27282C] lg:w-1/2 w-full h-[450px] flex flex-col justify-center items-start p-10 rounded">
        <p className="text-[#FF9D65] pb-4">Ready to Shop</p>
        <h1 className="text-white text-[40px] font-semibold pb-5 leading-tight">
          Revolutionizing Your Skin's <br />
          Journey to Radiance
        </h1>
        <button className="py-2 px-6 bg-white rounded flex justify-center items-center gap-2 font-semibold text-black hover:bg-gray-100 transition">
          Shop Now <BsArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CarouselSection;
