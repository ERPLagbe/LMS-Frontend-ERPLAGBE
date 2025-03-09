"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const defaultData = {
  items: [],
  type: "",
  classeNames: "",
};

export default function PartnerOne({ data = defaultData }) {
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
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 100,
      },
    },
  };
  return (
    <section
      className={`client__area${data.type != "" ? `-${data.type}` : ""} ${
        data.classeNames ?? ""
      }`}
    >
      <div className="container-lg">
        <div
          className={`client__wrapper${data.type != "" ? `-${data.type}` : ""}`}
        >
          {data.title && (
            <h2
              className={`client__title${
                data.type != "" ? `-${data.type}` : ""
              } fade-slide bottom`}
            >
              {data.title}
            </h2>
          )}
          {/* <!-- client slider--> */}
          {data.items && data.items.length > 0 && (
            <div className="client__inner">
              <Swiper {...swiperOptions} className="swiper client-slider">
                {data.items.map((partner, index) => (
                  <SwiperSlide
                    key={index}
                    className="swiper-slide client__slide"
                  >
                    <Image src={partner} alt="Logo" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
