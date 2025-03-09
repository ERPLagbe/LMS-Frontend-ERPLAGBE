import "@/../public/assets/scss/online-course.scss";

import Image from "next/image";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import Offcanvas from "@/components/Menu/Offcanvas";

import BannerShapeOne from "@/../public/assets/imgs/shape/banner-shape-1.webp";
import BannerShapeTwo from "@/../public/assets/imgs/shape/banner-shape-2.webp";
import BannerShapeThree from "@/../public/assets/imgs/shape/banner-shape-3.webp";
import BannerShapeFour from "@/../public/assets/imgs/shape/banner-shape-4.webp";
import BannerShapeFive from "@/../public/assets/imgs/shape/banner-shape-5.webp";
import BannerShapeSix from "@/../public/assets/imgs/shape/banner-shape-6.webp";
import BannerShapeSeven from "@/../public/assets/imgs/shape/banner-shape-7.webp";

import Thumb404 from "@/../public/assets/imgs/thumb/404.webp";
import CtaOne from "@/components/CTA/CtaOne";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <HeaderOne />
      <Offcanvas />
      <main>
        <div className="banner__area pt-130 pb-120">
          <div className="container">
            <div className="banner__wrapper text-center">
              <h1 className="banner-title">404 Error</h1>
              <ul className="breadcrumbs-2">
                <li className="breadcrumbs-list-2">
                  <Link className="breadcrumbs-item-2" href="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumbs-list-2">
                  <Link className="breadcrumbs-item-2" href="#">
                    404
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Image
            className="banner__shape-1 moveBottom"
            src={BannerShapeOne}
            alt="Shape"
          />
          <Image
            className="banner__shape-2 zoom-in-out"
            src={BannerShapeTwo}
            alt="Shape"
          />
          <Image
            className="banner__shape-3 zoom-in-out"
            src={BannerShapeThree}
            alt="Shape"
          />
          <Image
            className="banner__shape-4 moveLeft"
            src={BannerShapeFour}
            alt="Shape"
          />
          <Image
            className="banner__shape-5 moveRight"
            src={BannerShapeFive}
            alt="Shape"
          />
          <Image
            className="banner__shape-6 moveLeft"
            src={BannerShapeSix}
            alt="Shape"
          />
          <Image
            className="banner__shape-7 zoom-in-out"
            src={BannerShapeSeven}
            alt="Shape"
          />
        </div>
        <section className="error__area pt-130 pb-130">
          <div className="container">
            <div className="error__wrapper text-center">
              <Image className="error__img" src={Thumb404} alt="404" />
              <h2 className="error__title"> 404 Error </h2>
              <p className="error__text">
                Oops! Something went Wrong, We can’t find this page
              </p>
              <Link className="btn-error btn-hover-shadow" href="/">
                Back to home
              </Link>
            </div>
          </div>
        </section>

        <CtaOne />
      </main>
      <FooterOne />
    </>
  );
}
