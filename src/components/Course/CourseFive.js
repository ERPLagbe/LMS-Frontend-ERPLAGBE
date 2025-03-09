import Image from "next/image";
import Link from "next/link";

import ArrowLeft from "@/../public/assets/imgs/icon/arrow-left.svg";

import CourseThreeThumbOne from "@/../public/assets/imgs/thumb/cr3-1.webp";
import CourseThreeThumbTwo from "@/../public/assets/imgs/thumb/cr3-2.webp";
import CourseThreeThumbThree from "@/../public/assets/imgs/thumb/cr3-3.webp";
import CourseThreeThumbFour from "@/../public/assets/imgs/thumb/cr3-4.webp";

import StarBlack from "@/../public/assets/imgs/icon/star-black.svg";
import ClockBlack from "@/../public/assets/imgs/icon/time-circel.svg";
import LavelBlack from "@/../public/assets/imgs/icon/course-line.svg";

import CourseInstructorTwo from "@/../public/assets/imgs/team/instr-2.webp";
import CourseInstructorThree from "@/../public/assets/imgs/team/instr-3.webp";
import CourseInstructorFour from "@/../public/assets/imgs/team/instr-4.webp";

export default function CourseFive() {
  return (
    <section className="course__area-3 pt-130 pb-130">
      <div className="container">
        <div className="course__top-wrap3">
          <h2 className="section-title-2">Featured courses</h2>
          <div>
            <Link className="btn-course-3 btn-hover-border" href="course">
              Explore more
              <Image className="btn-arrow-right" src={ArrowLeft} alt="Icon" />
            </Link>
          </div>
        </div>
        <div className="row gy-4">
          {/* Course item */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <Link href="course">
              <div className="course__item-3">
                <div className="course__thumb-3">
                  <Image src={CourseThreeThumbOne} alt="Course" />
                </div>
                <div className="course__content-3">
                  <ul className="course__meta-3">
                    <li className="course__meta-item3">
                      <Image src={StarBlack} alt="Icon" />
                      4.9 Rating
                    </li>
                    <li className="course__meta-item3">
                      <Image src={ClockBlack} alt="Icon" />
                      2h 30m
                    </li>
                    <li className="course__meta-item3">
                      <Image src={LavelBlack} alt="icon" />
                      Beginner
                    </li>
                  </ul>
                  <h3 className="course__title-3">
                    Web Development For Beginner Webflow
                  </h3>
                  <div className="course__instructor-wrap3">
                    <div className="course__instructor-left3">
                      <h3 className="course__instructor-name3">
                        Jackie Rippin
                      </h3>
                    </div>
                    <div className="course__instructor-right23">
                      <p className="course__price-3">$19.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Course item */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <Link href="course">
              <div className="course__item-3">
                <div className="course__thumb-3">
                  <Image src={CourseThreeThumbTwo} alt="Course" />
                </div>
                <div className="course__content-3">
                  <ul className="course__meta-3">
                    <li className="course__meta-item3">
                      <Image src={StarBlack} alt="Icon" />
                      4.9 Rating
                    </li>
                    <li className="course__meta-item3">
                      <Image src={ClockBlack} alt="Icon" />
                      2h 30m
                    </li>
                    <li className="course__meta-item3">
                      <Image src={LavelBlack} alt="icon" />
                      Beginner
                    </li>
                  </ul>
                  <h3 className="course__title-3">
                    Web Development For Beginner Webflow
                  </h3>
                  <div className="course__instructor-wrap3">
                    <div className="course__instructor-left3">
                      <Image src={CourseInstructorTwo} alt="Team" />
                      <h3 className="course__instructor-name3">
                        Jackie Rippin
                      </h3>
                    </div>
                    <div className="course__instructor-right23">
                      <p className="course__price-3">$19.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Course item */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <Link href="course">
              <div className="course__item-3">
                <div className="course__thumb-3">
                  <Image src={CourseThreeThumbThree} alt="Course" />
                </div>
                <div className="course__content-3">
                  <ul className="course__meta-3">
                    <li className="course__meta-item3">
                      <Image src={StarBlack} alt="Icon" />
                      4.9 Rating
                    </li>
                    <li className="course__meta-item3">
                      <Image src={ClockBlack} alt="Icon" />
                      2h 30m
                    </li>
                    <li className="course__meta-item3">
                      <Image src={LavelBlack} alt="icon" />
                      Beginner
                    </li>
                  </ul>
                  <h3 className="course__title-3">
                    Web Development For Beginner Webflow
                  </h3>
                  <div className="course__instructor-wrap3">
                    <div className="course__instructor-left3">
                      <Image src={CourseInstructorThree} alt="Team" />
                      <h3 className="course__instructor-name3">
                        Jackie Rippin
                      </h3>
                    </div>
                    <div className="course__instructor-right23">
                      <p className="course__price-3">$19.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Course item */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <Link href="course">
              <div className="course__item-3">
                <div className="course__thumb-3">
                  <Image src={CourseThreeThumbFour} alt="Course" />
                </div>
                <div className="course__content-3">
                  <ul className="course__meta-3">
                    <li className="course__meta-item3">
                      <Image src={StarBlack} alt="Icon" />
                      4.9 Rating
                    </li>
                    <li className="course__meta-item3">
                      <Image src={ClockBlack} alt="Icon" />
                      2h 30m
                    </li>
                    <li className="course__meta-item3">
                      <Image src={LavelBlack} alt="icon" />
                      Beginner
                    </li>
                  </ul>
                  <h3 className="course__title-3">
                    Web Development For Beginner Webflow
                  </h3>
                  <div className="course__instructor-wrap3">
                    <div className="course__instructor-left3">
                      <Image src={CourseInstructorFour} alt="Team" />
                      <h3 className="course__instructor-name3">
                        Jackie Rippin
                      </h3>
                    </div>
                    <div className="course__instructor-right23">
                      <p className="course__price-3">$19.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
