import Image from "next/image";
import Link from "next/link";

import FaqIconOne from "@/../public/assets/imgs/icon/faq-icon-1.webp";
import FaqIconTwo from "@/../public/assets/imgs/icon/faq-icon-2.webp";
import FaqIconThree from "@/../public/assets/imgs/icon/faq-icon-3.webp";

import ArrowLeft from "@/../public/assets/imgs/icon/arrow-left.svg";

import Faq from "@/../public/assets/imgs/thumb/faq.webp";
import FaqEdu from "@/../public/assets/imgs/shape/faq-edu.webp";
import FaqMsg from "@/../public/assets/imgs/shape/faq-msg.webp";

import FaqShapeOne from "@/../public//assets/imgs/shape/faq-shape-1.webp";
import FaqShapeTwo from "@/../public//assets/imgs/shape/faq-shape-2.webp";
import FaqShapeThree from "@/../public//assets/imgs/shape/faq-shape-3.webp";
import FaqShapeFour from "@/../public//assets/imgs/shape/faq-shape-4.webp";
import FaqShapeFive from "@/../public//assets/imgs/shape/faq-shape-5.webp";

export default function FaqTwo() {
  return (
    <section className="faq__area pt-190 pb-160">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div className="faq__left">
              <h2 className="section-title-2 move-line-3d">
                Gain career growth by accessing our learning platform
              </h2>
              <p className="faq__text  move-line-3d">
                Inspiring courses for the life you want to lead. Discover our
                fresh approach to a life-changing educational adventure.
              </p>
              <div className="faq__wrapper" id="accordionPanelsStayOpenExample">
                <div
                  className="accordion-item fade-slide bottom"
                  data-delay="0.2"
                >
                  <h2 className="accordion-header faq__item-title">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <Image
                        className="faq__icon"
                        src={FaqIconOne}
                        alt="Icon"
                      />
                      Level up at your own pace by tuning into our content
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <p className="faq__item-content">
                        Montes nascetur ridiculus mus mauris vitae ultricies.
                        Nulla facilisi morbi tempus iaculis urna id volutpat
                        lacus laoreet. Dolor sit amet consectetur adipiscing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item fade-slide bottom"
                  data-delay="0.4"
                >
                  <h2 className="accordion-header faq__item-title">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <Image
                        className="faq__icon"
                        src={FaqIconTwo}
                        alt="Icon"
                      />
                      Premier certifications in the realms of technology
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <p className="faq__item-content">
                        Montes nascetur ridiculus mus mauris vitae ultricies.
                        Nulla facilisi morbi tempus iaculis urna id volutpat
                        lacus laoreet. Dolor sit amet consectetur adipiscing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item fade-slide bottom"
                  data-delay="0.6"
                >
                  <h2 className="accordion-header faq__item-title border-0">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      <Image
                        className="faq__icon"
                        src={FaqIconThree}
                        alt="Icon"
                      />
                      Diverse course collection available in 30 languages
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <p className="faq__item-content">
                        Montes nascetur ridiculus mus mauris vitae ultricies.
                        Nulla facilisi morbi tempus iaculis urna id volutpat
                        lacus laoreet. Dolor sit amet consectetur adipiscing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" fade-slide bottom" data-delay="0.8">
                <Link className="btn-faq btn-hover-border" href="courses">
                  Learn more
                  <Image
                    className="btn-arrow-right"
                    src={ArrowLeft}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 col-lg-6 col-md-12 fade-slide right"
            data-delay="0.2"
          >
            <div className="faq__right">
              <Image className="faq__img" src={Faq} alt="Faq" />
              <Image
                className="faq__edu-shape moveLeft"
                src={FaqEdu}
                alt="Icon"
              />
              <Image
                className="faq__mesg-shape moveRight"
                src={FaqMsg}
                alt="Icon"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Faq shape  */}
      <Image className="faq__shape-1 moveLeft" src={FaqShapeOne} alt="Faq" />
      <Image className="faq__shape-2 moveBottom" src={FaqShapeTwo} alt="Faq" />
      <Image
        className="faq__shape-3 zoom-in-out"
        src={FaqShapeThree}
        alt="Faq"
      />
      <Image className="faq__shape-4 moveRight" src={FaqShapeFour} alt="Faq" />
      <Image
        className="faq__shape-5 zoom-in-out"
        src={FaqShapeFive}
        alt="Faq"
      />
      {/*Faq shape  */}
    </section>
  );
}
