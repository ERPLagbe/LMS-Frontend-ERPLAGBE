import { ctaOne as data } from "@/data/cta";
import Image from "next/image";
import Link from "next/link";
export default function CtaOne() {
  return (
    <section className="cta__area">
      <div className="cta__wrapper">
        {data.title && (
          <h2 className="cta__title move-line-3d">
            {data.title.sliceOne}
          </h2>
        )}
        <br/>
        {data.title && (
          <h2 className="cta__title move-line-3d">
            {data.title.sliceTwo} <span>{data.title.sliceThree} <Image src={data.footerTitleVector} alt="Shape" /></span>
        </h2>
        )}
        <div className="fade-slide bottom">
          <Link
            className="btn-getstarted btn-hover-shadow"
            href={data.action.link}
          >
            {data.action.name}
            {data.action.icon && (
              <Image
                className="btn-arrow-icon"
                src={data.action.icon}
                alt="Icon"
              />
            )}
          </Link>
        </div>
        {/* <!-- Shape  --> */}
        {/* <Image className="cta__shape-1" src={data.shapeOne} alt="Shape" />
        <Image
          className="cta__shape-2 rotate"
          src={data.shapeTwo}
          alt="Shape"
        />
        <Image
          className="cta__shape-3 moveLeft"
          src={data.shapeThree}
          alt="Shape"
        />
        <Image className="cta__shape-4" src={data.shapeFour} alt="Shape" />
        <Image className="cta__shape-5" src={data.shapeFive} alt="Shape" />
        <Image
          className="cta__shape-6 moveLeft"
          src={data.shapeSix}
          alt="Shape"
        /> */}
      </div>
    </section>
  );
}
