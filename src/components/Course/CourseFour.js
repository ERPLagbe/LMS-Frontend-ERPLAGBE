import Image from "next/image";
import Link from "next/link";

import CourseThumbOne from "@/../public/assets/imgs/thumb/course-thumb-1.webp";
import CourseThumbTwo from "@/../public/assets/imgs/thumb/course-thumb-2.webp";
import CourseThumbThree from "@/../public/assets/imgs/thumb/course-thumb-3.webp";
import CourseThumbFour from "@/../public/assets/imgs/thumb/course-thumb-4.webp";
import CourseThumbFive from "@/../public/assets/imgs/thumb/course-thumb-5.webp";
import CourseThumbSix from "@/../public/assets/imgs/thumb/course-thumb-6.webp";

import CourseInstructorTwo from "@/../public/assets/imgs/team/course-instructor-2.webp";
import CourseInstructorThree from "@/../public/assets/imgs/team/course-instructor-3.webp";
import CourseInstructorFour from "@/../public/assets/imgs/team/course-instructor-4.webp";
import CourseInstructorFive from "@/../public/assets/imgs/team/course-instructor-5.webp";
import CourseInstructorSix from "@/../public/assets/imgs/team/course-instructor-6.webp";

import StarBlack from "@/../public/assets/imgs/icon/star-black.svg";
import LavelBlack from "@/../public/assets/imgs/icon/cart-black.svg";
import ClockBlack from "@/../public/assets/imgs/icon/time-circel.svg";

import ArrowLeft from "@/../public/assets/imgs/icon/arrow-left.svg";

export default function CourseFour() {
  return (
    <section
      className="course__area-2 pt-130 pb-140 fade-slide bottom"
      data-delay="0.4"
    >
      <div className="container">
        <div className="row">
          <div className="course__title-wrap2">
            <h2 className="section-title-2 move-line-3d">
              Explore popular Course
            </h2>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-xl-4 col-lg-4 col-md-6">
            {/* Course item  */}
            <div className="course__item-2">
              <div className="course__thumb-2">
                <Image src={CourseThumbOne} alt="Course" />
              </div>
              <div className="course__content-wrap-2">
                <div className="course__trand-wrap">
                  <span className="course__trending">Trending</span>
                </div>
                <div className="course__instructor-wrap2">
                  <div className="course__instructor-left2">
                    <h3 className="course__instructor-name2">Jackie Rippin</h3>
                  </div>
                  <div className="course__instructor-right2">
                    <p className="course__price-2">$19.00</p>
                  </div>
                </div>
                <ul className="course__meta-2">
                  <li className="course__meta-item2">
                    <Image src={StarBlack} alt="Icon" />
                    4.9 Rating
                  </li>
                  <li className="course__meta-item2">
                    <Image src={LavelBlack} alt="Icon" />
                    Beginner
                  </li>
                  <li className="course__meta-item2">
                    <Image src={ClockBlack} alt="Icon" />
                    2h 30m
                  </li>
                </ul>
                <h4 className="course__title-2">
                  <Link href="course-detail">
                    Web Development For Beginner Webflow
                  </Link>
                </h4>
                <Link
                  className="btn-course-2 btn-hover-border"
                  href="course-detail"
                >
                  Enroll now
                  <Image
                    className="btn-arrow-right"
                    src={ArrowLeft}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            {/* Course item  */}
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            {/* Course item  */}
            <div className="course__item-2">
              <div className="course__thumb-2">
                <Image src={CourseThumbTwo} alt="Course" />
              </div>
              <div className="course__content-wrap-2">
                <div className="course__trand-wrap">
                  <span className="course__trending">Trending</span>
                </div>
                <div className="course__instructor-wrap2">
                  <div className="course__instructor-left2">
                    <Image src={CourseInstructorTwo} alt="Team" />
                    <h3 className="course__instructor-name2">Jackie Rippin</h3>
                  </div>
                  <div className="course__instructor-right2">
                    <p className="course__price-2">$19.00</p>
                  </div>
                </div>
                <ul className="course__meta-2">
                  <li className="course__meta-item2">
                    <Image src={StarBlack} alt="Icon" />
                    4.9 Rating
                  </li>
                  <li className="course__meta-item2">
                    <Image src={LavelBlack} alt="Icon" />
                    Beginner
                  </li>
                  <li className="course__meta-item2">
                    <Image src={ClockBlack} alt="Icon" />
                    2h 30m
                  </li>
                </ul>
                <h4 className="course__title-2">
                  <Link href="course-detail">
                    Web Development For Beginner Webflow
                  </Link>
                </h4>
                <Link
                  className="btn-course-2 btn-hover-border"
                  href="course-detail"
                >
                  Enroll now
                  <Image
                    className="btn-arrow-right"
                    src={ArrowLeft}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            {/* Course item  */}
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            {/* Course item  */}
            <div className="course__item-2">
              <div className="course__thumb-2">
                <Image src={CourseThumbThree} alt="Course" />
              </div>
              <div className="course__content-wrap-2">
                <div className="course__trand-wrap">
                  <span className="course__trending">Trending</span>
                </div>
                <div className="course__instructor-wrap2">
                  <div className="course__instructor-left2">
                    <Image src={CourseInstructorThree} alt="Team" />
                    <h3 className="course__instructor-name2">Jackie Rippin</h3>
                  </div>
                  <div className="course__instructor-right2">
                    <p className="course__price-2">$19.00</p>
                  </div>
                </div>
                <ul className="course__meta-2">
                  <li className="course__meta-item2">
                    <Image src={StarBlack} alt="Icon" />
                    4.9 Rating
                  </li>
                  <li className="course__meta-item2">
                    <Image src={LavelBlack} alt="Icon" />
                    Beginner
                  </li>
                  <li className="course__meta-item2">
                    <Image src={ClockBlack} alt="Icon" />
                    2h 30m
                  </li>
                </ul>
                <h4 className="course__title-2">
                  <Link href="course-detail">
                    Web Development For Beginner Webflow
                  </Link>
                </h4>
                <Link
                  className="btn-course-2 btn-hover-border"
                  href="course-detail"
                >
                  Enroll now
                  <Image
                    className="btn-arrow-right"
                    src={ArrowLeft}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            {/* Course item  */}
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            {/* Course item  */}
            <div className="course__item-2">
              <div className="course__thumb-2">
                <Image src={CourseThumbFour} alt="Course" />
              </div>
              <div className="course__content-wrap-2">
                <div className="course__trand-wrap">
                  <span className="course__trending">Trending</span>
                </div>
                <div className="course__instructor-wrap2">
                  <div className="course__instructor-left2">
                    <Image src={CourseInstructorFour} alt="Team" />
                    <h3 className="course__instructor-name2">Jackie Rippin</h3>
                  </div>
                  <div className="course__instructor-right2">
                    <p className="course__price-2">$19.00</p>
                  </div>
                </div>
                <ul className="course__meta-2">
                  <li className="course__meta-item2">
                    <Image src={StarBlack} alt="Icon" />
                    4.9 Rating
                  </li>
                  <li className="course__meta-item2">
                    <Image src={LavelBlack} alt="Icon" />
                    Beginner
                  </li>
                  <li className="course__meta-item2">
                    <Image src={ClockBlack} alt="Icon" />
                    2h 30m
                  </li>
                </ul>
                <h4 className="course__title-2">
                  <Link href="course-detail">
                    Web Development For Beginner Webflow
                  </Link>
                </h4>
                <Link
                  className="btn-course-2 btn-hover-border"
                  href="course-detail"
                >
                  Enroll now
                  <Image
                    className="btn-arrow-right"
                    src={ArrowLeft}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            {/* Course item  */}
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            {/* Course item  */}
            <div className="course__item-2">
              <div className="course__thumb-2">
                <Image src={CourseThumbFive} alt="Course" />
              </div>
              <div className="course__content-wrap-2">
                <div className="course__trand-wrap">
                  <span className="course__trending">Trending</span>
                </div>
                <div className="course__instructor-wrap2">
                  <div className="course__instructor-left2">
                    <Image src={CourseInstructorFive} alt="Team" />
                    <h3 className="course__instructor-name2">Jackie Rippin</h3>
                  </div>
                  <div className="course__instructor-right2">
                    <p className="course__price-2">$19.00</p>
                  </div>
                </div>
                <ul className="course__meta-2">
                  <li className="course__meta-item2">
                    <Image src={StarBlack} alt="Icon" />
                    4.9 Rating
                  </li>
                  <li className="course__meta-item2">
                    <Image src={LavelBlack} alt="Icon" />
                    Beginner
                  </li>
                  <li className="course__meta-item2">
                    <Image src={ClockBlack} alt="Icon" />
                    2h 30m
                  </li>
                </ul>
                <h4 className="course__title-2">
                  <Link href="course-detail">
                    Web Development For Beginner Webflow
                  </Link>
                </h4>
                <Link
                  className="btn-course-2 btn-hover-border"
                  href="course-detail"
                >
                  Enroll now
                  <Image
                    className="btn-arrow-right"
                    src={ArrowLeft}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            {/* Course item  */}
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            {/* Course item  */}
            <div className="course__item-2">
              <div className="course__thumb-2">
                <Image src={CourseThumbSix} alt="Course" />
              </div>
              <div className="course__content-wrap-2">
                <div className="course__trand-wrap">
                  <span className="course__trending">Trending</span>
                </div>
                <div className="course__instructor-wrap2">
                  <div className="course__instructor-left2">
                    <Image src={CourseInstructorSix} alt="Team" />
                    <h3 className="course__instructor-name2">Jackie Rippin</h3>
                  </div>
                  <div className="course__instructor-right2">
                    <p className="course__price-2">$19.00</p>
                  </div>
                </div>
                <ul className="course__meta-2">
                  <li className="course__meta-item2">
                    <Image src={StarBlack} alt="Icon" />
                    4.9 Rating
                  </li>
                  <li className="course__meta-item2">
                    <Image src={LavelBlack} alt="Icon" />
                    Beginner
                  </li>
                  <li className="course__meta-item2">
                    <Image src={ClockBlack} alt="Icon" />
                    2h 30m
                  </li>
                </ul>
                <h4 className="course__title-2">
                  <Link href="course-detail">
                    Web Development For Beginner Webflow
                  </Link>
                </h4>
                <Link
                  className="btn-course-2 btn-hover-border"
                  href="course-detail"
                >
                  Enroll now
                  <Image
                    className="btn-arrow-right"
                    src={ArrowLeft}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
            {/* Course item  */}
          </div>
        </div>
      </div>
    </section>
  );
}
