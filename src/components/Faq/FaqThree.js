import Image from "next/image";
import Link from "next/link";

import ArrowRightTwo from "@/../public/assets/imgs/icon/arrow-right-2.svg";
import ArrowLeft from "@/../public/assets/imgs/icon/arrow-left.svg";
import FaqThreeThumbOne from "@/../public/assets/imgs/thumb/faqtwo-1.webp";
import FaqThreeThumbTwo from "@/../public/assets/imgs/thumb/faqtwo-2.webp";

export default function FaqThree() {
  return (
    <section id="faq__area-2" className="faq__area-2 pt-160 pb-160">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-9">
            <div className="faq__left-2">
              <h2 className="section-title-3 move-line-3d">
                Academe, study and Life on our campus
              </h2>
              <div className="accordion" id="accordionExample">
                <div
                  className="accordion-item faq__item-3 fade-slide bottom"
                  data-delay="0.4"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button faq__itemTitle-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Undergraduate
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <Link className="faq__itemBtn-2" href="#">
                        Gather Required Documents
                        <Image
                          className="faq__icon-2"
                          src={ArrowRightTwo}
                          alt="Icon"
                        />
                      </Link>
                      <p className="faq__itemContent-2">
                        Collect any necessary supporting documents, such as
                        transcripts, proof of completion of required courses,
                        and any other documents.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item faq__item-3 fade-slide bottom"
                  data-delay="0.6"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed faq__itemTitle-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Graduate
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <Link className="faq__itemBtn-2" href="#">
                        Gather Required Documents
                        <Image
                          className="faq__icon-2"
                          src={ArrowRightTwo}
                          alt="Icon"
                        />
                      </Link>
                      <p className="faq__itemContent-2">
                        Collect any necessary supporting documents, such as
                        transcripts, proof of completion of required courses,
                        and any other documents.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item faq__item-3 fade-slide bottom"
                  data-delay="0.8"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed faq__itemTitle-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      International
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <Link className="faq__itemBtn-2" href="#">
                        Gather Required Documents
                        <Image
                          className="faq__icon-2"
                          src={ArrowRightTwo}
                          alt="Icon"
                        />
                      </Link>
                      <p className="faq__itemContent-2">
                        Collect any necessary supporting documents, such as
                        transcripts, proof of completion of required courses,
                        and any other documents.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item faq__item-3 fade-slide bottom"
                  data-delay={1}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed faq__itemTitle-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      College Credit Plus
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <Link className="faq__itemBtn-2" href="#">
                        Gather Required Documents
                        <Image
                          className="faq__icon-2"
                          src={ArrowRightTwo}
                          alt="Icon"
                        />
                      </Link>
                      <p className="faq__itemContent-2">
                        Collect any necessary supporting documents, such as
                        transcripts, proof of completion of required courses,
                        and any other documents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-wrap fade-slide bottom" data-delay="1.2">
                <Link href="#" className="btn-primary-2 btn-hover-shadowmt-4">
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
          <div className="col-xl-6 col-lg-6 col-md-9">
            <div className="faq__right-2 mt-lg-0 mt-4 pt-lg-0 pt-3">
              <div className="faq__review-2">
                <span className="faq__rating-2">4.9+</span>
                <p className="faq__reveiwText-2">Review</p>
              </div>
              <div className="faq__img-wrap-2">
                <Image src={FaqThreeThumbOne} alt="Faq" />
                <Image src={FaqThreeThumbTwo} alt="Faq" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
