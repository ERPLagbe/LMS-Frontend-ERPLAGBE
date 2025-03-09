"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ShapePartnerOne from "@/../public/assets/imgs/logo/client5-1.webp";
import ShapePartnerTwo from "@/../public/assets/imgs/logo/client5-2.webp";
import ShapePartnerThree from "@/../public/assets/imgs/logo/client5-3.webp";
import ShapePartnerFour from "@/../public/assets/imgs/logo/client5-4.webp";
import ShapePartnerFive from "@/../public/assets/imgs/logo/client5-5.webp";
import ShapePartnerSix from "@/../public/assets/imgs/logo/client5-6.webp";

export default function PartnerThree() {
  const swiperOptions = {
    slidesPerView: 6,
    spaceBetween: 100,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      374: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 100,
      },
    },
  };
  return (
    <div className="partner__area-5 pt-110 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-md-start text-center mb-md-0 mb-4">
            <h2 className="section-title-5 mobile-br-none">
              Our <br /> partner
            </h2>
          </div>
          <div className="col-md-9 align-self-center">
            <Swiper {...swiperOptions} className="swiper client-slider-five">
              <SwiperSlide className="swiper-slide client__slide text-center">
                <Image src={ShapePartnerOne} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide client__slide text-center">
                <Image src={ShapePartnerTwo} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide client__slide text-center">
                <Image src={ShapePartnerThree} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide client__slide text-center">
                <Image src={ShapePartnerFour} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide client__slide text-center">
                <Image src={ShapePartnerFive} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide client__slide text-center">
                <Image src={ShapePartnerSix} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide client__slide text-center">
                <Image src={ShapePartnerOne} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide client__slide text-center">
                <Image src={ShapePartnerTwo} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide client__slide text-center">
                <Image src={ShapePartnerThree} alt="Logo" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
