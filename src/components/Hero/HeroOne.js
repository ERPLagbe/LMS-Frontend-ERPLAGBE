"use client";

import { heroOne as hero } from "@/data/hero";
import Image from "next/image";
import Link from "next/link";

import ShapeLeft from "@/../public/assets/imgs/shape/shape-left.webp";
import ShapeRight from "@/../public/assets/imgs/shape/shape-right.webp";
import ShapeBottom from "@/../public/assets/imgs/shape/shape-btm.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

export default function HeroOne() {
  const swiperOptions = {
    direction: "vertical",
    effect: "slide",
    slidesPerView: "auto",
    speed: 10000,
    loop: true,
    autoHeight: true,
    freeMode: true,
    autoplay: {
      delay: 0,
      reverseDirection: false,
      disableOnInteraction: false,
    },
    modules: [Autoplay, FreeMode],
  };
  return (
    <section className="hero__area">
      <div className="hero__wrapper">
        <div className="hero__left">
          {hero.title && (
            <h1 className="hero__title move-line-3d">
              {hero.title.sliceOne}
              {/* {hero.title.sliceThree} <span> {hero.title.sliceFour}</span> */}
            </h1>
          )}
    {hero.title && (
            <h1 className="hero__title move-line-3d">
 <span className="course-shape"> {hero.title.sliceTwo} </span> {hero.title.sliceThree}
              {/* {hero.title.sliceThree} <span> {hero.title.sliceFour}</span> */}
            </h1>
          )}
          {hero.description && (
            <p className="hero__content fade-slide top" data-slide-amount="20">
              {hero.description}
            </p>
          )}
          {hero.btn && (
            <div className="fade-slide bottom">
              <Link
                className="btn-primary btn-hover-shadow"
                data-slide-amount="20"
                href={hero.btn.link}
              >
                {hero.btn.title}
                <Image
                  className="btn-arrow-icon"
                  src={hero.btn.icon}
                  alt="Icon"
                />
              </Link>
            </div>
          )}
          {/* <!-- Reveiw  --> */}
          {/* {hero.review && (
            <div className="hero__review fade-slide bottom" data-delay="0.8">
              {hero.review.icon && <Image src={hero.review.icon} alt="Icon" />}
              {hero.review.title && (
                <p className="hero__review-text">{hero.review.title}</p>
              )}
              {hero.review.feedbackIcon && (
                <Image src={hero.review.feedbackIcon} alt="Icon" />
              )}
            </div>
          )} */}
        </div>

        <Swiper
          {...swiperOptions}
          className="swiper verticle-slider hero__right"
        >
          {hero.slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="verticle-slide-inner">
                {slide.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`hero_img_height hero__img-${idx + 1}`}
                  >
                    {item.image && (
                      <Image
                        className="main-img"
                        src={item.image}
                        alt="Image"
                        style={{
                          height: "100%",
                          width: "441px",
                        }}
                      />
                    )}
                    {/* {item.widget && (
                      <Image
                        className={`${item.widget.classNames}`}
                        src={item.widget.image}
                        alt="Shape"
                      />
                    )} */}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <!-- Shape image  --> */}
      {/* <Image
        className="hero__shape-left moveBottom"
        src={ShapeLeft}
        alt="Icon"
      />
      <Image
        className="hero__shape-right moveBottom"
        src={ShapeRight}
        alt="Icon"
      />
      <Image
        className="hero__shape-btm moveLeft"
        src={ShapeBottom}
        alt="Icon"
      /> */}
    </section>
  );
}
