import Link from "next/link";
import Image from "next/image";

import ArrowLeft from "@/../public/assets/imgs/icon/arrow-left.svg";
import CtaShapeOne from "@/../public/assets/imgs/shape/ct-shape-1.webp";
import CtaShapeTwo from "@/../public/assets/imgs/shape/ct-shape-2.webp";
import CtaShapeThree from "@/../public/assets/imgs/shape/ct-shape-3.webp";
import CtaShapeFour from "@/../public/assets/imgs/shape/ct-shape-4.webp";
import CtaShapeFive from "@/../public/assets/imgs/shape/ct-shape-5.webp";

export default function CtaThree() {
  return (
    <section className="cta__area-2 pb-130">
      <div className="container-lg">
        <div className="cta__wrapper-2">
          <h2 className="cta__title-2 move-line-3d">
            Looking to learn more and Growth?
          </h2>
          <p className="cta__text-2 move-line-3d">
            To find out more about our fresh approach to global learning talk to
            us today
          </p>
          <div className="fade-slide bottom" data-delay="0.6">
            <Link className="btn-cta-2 btn-hover-border" href="#">
              Get Started. It’ Free
              <Image className="btn-arrow-right" src={ArrowLeft} alt="Icon" />
            </Link>
          </div>
          <Image
            className="cta__shapeTwo-1 moveBottom"
            src={CtaShapeOne}
            alt="Icon"
          />
          <Image
            className="cta__shapeTwo-2 zoom-in-out"
            src={CtaShapeTwo}
            alt="Icon"
          />
          <Image
            className="cta__shapeTwo-3 zoom-in-out"
            src={CtaShapeThree}
            alt="Icon"
          />
          <Image
            className="cta__shapeTwo-4 moveRight"
            src={CtaShapeFour}
            alt="Icon"
          />
          <Image
            className="cta__shapeTwo-5 zoom-in-out"
            src={CtaShapeFive}
            alt="Icon"
          />
        </div>
      </div>
    </section>
  );
}
