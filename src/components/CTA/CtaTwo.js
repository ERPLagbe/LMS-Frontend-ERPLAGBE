import { ctaTwo as cta } from "@/data/cta";
import Image from "next/image";

export default function CtaTwo() {
  return (
    <section className="cta__area-3">
      <div className="container-lg">
        <div className="cta__wrapper-3">
          {cta.title && (
            <h2 className="section-title-4 move-line-3d" data-delay="0.4">
              {cta.title}
            </h2>
          )}
          {cta.description && (
            <p className="cta__content-3 fade-slide bottom" data-delay="0.8">
              {cta.description}
            </p>
          )}
          {/* <!-- Form  --> */}
          <form
            action="/"
            className="cta__form-3 fade-slide bottom"
            data-delay="1"
          >
            <input
              className="cta__formInput-3"
              type="text"
              placeholder="Search here..."
              name="search"
            />
            <button className="cta__btn-3 btn-hover-bubble" type="submit">
              {cta.btnText}
              <Image className="cta-btnIcon-3" src={cta.icon} alt="Icon" />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </form>

          {cta.shapeOne && (
            <Image
              className="cta__shapeThree-1 moveBottom"
              src={cta.shapeOne}
              alt="Shape"
            />
          )}
          {cta.shapeTwo && (
            <Image
              className="cta__shapeThree-2 moveRight"
              src={cta.shapeTwo}
              alt="Shape"
            />
          )}
          {cta.shapeThree && (
            <Image
              className="cta__shapeThree-3 moveLeft"
              src={cta.shapeThree}
              alt="Shape"
            />
          )}
          {cta.shapeFour && (
            <Image
              className="cta__shapeThree-4 moveLeft"
              src={cta.shapeFour}
              alt="Shape"
            />
          )}
          {cta.shapeFive && (
            <Image
              className="cta__shapeThree-5 moveRight"
              src={cta.shapeFive}
              alt="Shape"
            />
          )}
          {cta.shapeSix && (
            <Image
              className="cta__shapeThree-6 moveLeft"
              src={cta.shapeSix}
              alt="Shape"
            />
          )}
          {cta.shapeSeven && (
            <Image
              className="cta__shapeThree-7 moveRight"
              src={cta.shapeSeven}
              alt="Shape"
            />
          )}
          {cta.shapeEight && (
            <Image
              className="cta__shapeThree-8 moveBottom"
              src={cta.shapeEight}
              alt="Shape"
            />
          )}
        </div>
      </div>
    </section>
  );
}
