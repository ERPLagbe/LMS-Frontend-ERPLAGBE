import Image from "next/image";
import Link from "next/link";

import FeatureThumbTwo from "@/../public/assets/imgs/thumb/features-2.webp";
import FeatureShapeOne from "@/../public/assets/imgs/shape/features-shape-1.webp";
import FeatureShapeTwo from "@/../public/assets/imgs/shape/features-shape-2.webp";
import CheckIcon from "@/../public/assets/imgs/icon/check-icon.svg";
import ArrowLeft from "@/../public/assets/imgs/icon/arrow-left.svg";

export default function FeatureTwo() {
  return (
    <div className="features__area-2 pt-140 pb-140">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div
            className="col-xl-6 col-lg-12 col-md-12 fade-slide left"
            data-delay="0.4"
          >
            <div className="features__left-2">
              <div className="features__img-2">
                <Image
                  className="features__thumb-2"
                  src={FeatureThumbTwo}
                  alt="Image"
                />
              </div>
              <Image
                className="features__shapeTwo-1 moveBottom"
                src={FeatureShapeOne}
                alt="Shape"
              />
              <Image
                className="features__shapeTwo-2 moveRight"
                src={FeatureShapeTwo}
                alt="Shape"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-12">
            <div className="features__right-2">
              <h2 className="section-title-2 move-line-3d">
                Unleash your teaching creativity on our expanding platform
              </h2>
              <p className="features__text-2 move-line-3d">
                Educators globally share their expertise with millions on Udemy.
                We equip you with the tools and skills to teach your passions.
              </p>
              <ul className="features__list-2">
                <li
                  className="features__list-text2 fade-slide bottom"
                  data-delay="0.2"
                >
                  <Image src={CheckIcon} alt="Icon" />
                  Access a worldwide audience
                </li>
                <li
                  className="features__list-text2 fade-slide bottom"
                  data-delay="0.4"
                >
                  <Image src={CheckIcon} alt="Icon" />
                  Manage courses at your own pace
                </li>
                <li
                  className="features__list-text2 fade-slide bottom"
                  data-delay="0.6"
                >
                  <Image src={CheckIcon} alt="Icon" />
                  Earn through course sales.
                </li>
                <li
                  className="features__list-text2 fade-slide bottom"
                  data-delay="0.8"
                >
                  <Image src={CheckIcon} alt="Icon" />
                  Increase personal or brand visibility
                </li>
              </ul>
              <div className="fade-slide bottom" data-delay={1}>
                <Link className="btn-apply btn-hover-border" href="#">
                  Apply Now
                  <Image
                    className="btn-arrow-right"
                    src={ArrowLeft}
                    alt="Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
