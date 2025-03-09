import Image from "next/image";

import FeatureImgOne from "@/../public/assets/imgs/icon/feature-5-1.webp";
import FeatureImgTwo from "@/../public/assets/imgs/icon/feature-5-2.webp";
import FeatureImgThree from "@/../public/assets/imgs/icon/feature-5-3.webp";

export default function FeatureThree() {
  return (
    <div className="features__area-3 pt-170 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <h2 className="section-title-5 pb-60  move-line-3d">
              Experience an award-winning cookery academy
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 fade-slide bottom" data-delay="0.6">
            <div
              className="features__item-3 text-center"
              style={{
                backgroundImage: 'url("../assets/imgs/bg/feature-3-bg.webp")',
              }}
            >
              <div className="icon">
                <Image src={FeatureImgOne} alt="img" />
              </div>
              <div className="details">
                <h3 className="title">Learn by Live cooking</h3>
                <p className="content">
                  Learn a wide range of skills and techniques by cooking along
                  with small
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 fade-slide bottom" data-delay="0.8">
            <div
              className="features__item-3 text-center"
              style={{
                backgroundImage: 'url("../assets/imgs/bg/feature-3-bg.webp")',
              }}
            >
              <div className="icon">
                <Image src={FeatureImgTwo} alt="img" />
              </div>
              <div className="details">
                <h3 className="title">Learn for the best way</h3>
                <p className="content">
                  Learn a wide range of skills and techniques by cooking along
                  with small
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 fade-slide bottom" data-delay={1}>
            <div
              className="features__item-3 text-center"
              style={{
                backgroundImage: 'url("../assets/imgs/bg/feature-3-bg.webp")',
              }}
            >
              <div className="icon">
                <Image src={FeatureImgThree} alt="img" />
              </div>
              <div className="details">
                <h3 className="title">Earn certification</h3>
                <p className="content">
                  Learn a wide range of skills and techniques by cooking along
                  with small
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
