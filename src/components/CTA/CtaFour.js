import Image from "next/image";
import Link from "next/link";

import CtaFourShapeOne from "@/../public/assets/imgs/shape/cta-5-1.webp";
import CtaFourShapeTwo from "@/../public/assets/imgs/shape/cta-5-2.webp";
import CtaFourShapeThree from "@/../public/assets/imgs/shape/cta-5-3.webp";
import CtaFourShapeFour from "@/../public/assets/imgs/shape/cta-5-4.webp";
import CtaFourShapeFive from "@/../public/assets/imgs/shape/cta-5-5.webp";

export default function CtaFour() {
  return (
    <section className="cta__area-4">
      <div className="cta__wrapper-4 text-center">
        <h2 className="cta__title-4 move-line-3d">
          Enroll now to become a Professional Chef.
        </h2>
        <p className="cta__content-4 fade-slide bottom" data-delay="0.6">
          We try to create moments and memories with our food experiences in the
          comfort of your own home.
        </p>
        <div className="btn-wrap fade-slide bottom" data-delay="0.8">
          <Link className="btn-style-5" href="contact">
            Get Started Now
          </Link>
        </div>
        {/* Shape  */}
        <Image
          className="cta__shape-4-1 moveLeft"
          src={CtaFourShapeOne}
          alt="Shape"
        />
        <Image
          className="cta__shape-4-2 moveBottom"
          src={CtaFourShapeTwo}
          alt="Shape"
        />
        <Image className="cta__shape-4-3" src={CtaFourShapeThree} alt="Shape" />
        <Image
          className="cta__shape-4-4 moveLeft"
          src={CtaFourShapeFour}
          alt="Shape"
        />
        <Image className="cta__shape-4-5" src={CtaFourShapeFive} alt="Shape" />
      </div>
    </section>
  );
}
