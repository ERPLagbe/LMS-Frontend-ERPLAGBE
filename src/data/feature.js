import FeatureOneImageOne from "@/../public/assets/imgs/thumb/feature-6-1.webp";
import FeatureOneImageTwo from "@/../public/assets/imgs/thumb/feature-6-2.webp";
import FeatureOneImageThree from "@/../public/assets/imgs/thumb/feature-6-3.webp";

import FeatureOneShapeOne from "@/../public/assets/imgs/shape/feature-6-1.webp";
import FeatureOneShapeTwo from "@/../public/assets/imgs/shape/feature-6-2.webp";
import FeatureOneShapeThree from "@/../public/assets/imgs/shape/feature-6-3.webp";

import FeatureOneShapeFour from "@/../public/assets/imgs/shape/feature-6-5.webp";
import FeatureOneShapeFive from "@/../public/assets/imgs/shape/feature-6-4.webp";

import FeatureOneShapeSix from "@/../public/assets/imgs/shape/feature-6-6.webp";
import FeatureOneShapeSeven from "@/../public/assets/imgs/shape/feature-6-7.webp";
import FeatureOneShapeEight from "@/../public/assets/imgs/shape/feature-6-8.webp";

const featureOne = {
  title: "A platform designed for Life Coach",
  features: [
    {
      title: {
        sliceOne: "Weight",
        sliceTwo: "Loss",
      },
      description:
        "Start with our online Fitness Assessment so we fully understand",
      image: FeatureOneImageOne,
      card: 1,
      btn: {
        text: "Get Started",
        link: "contact",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      shapeOne: FeatureOneShapeOne,
      shapeTwo: FeatureOneShapeTwo,
      shapeThree: FeatureOneShapeThree,
    },
    {
      title: {
        sliceOne: "Erectile",
        sliceTwo: "Dysfunction",
      },
      description:
        "Start with our online Fitness Assessment so we fully understand",
      image: FeatureOneImageTwo,
      card: 2,
      btn: {
        text: "Get Started",
        link: "contact",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      shapeOne: FeatureOneShapeFour,
      shapeTwo: FeatureOneShapeFive,
    },
    {
      title: {
        sliceOne: "Premature",
        sliceTwo: "Ejaculation",
      },
      description:
        "Start with our online Fitness Assessment so we fully understand",
      image: FeatureOneImageThree,
      card: 3,
      btn: {
        text: "Get Started",
        link: "contact",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "1.0",
      },
      shapeOne: FeatureOneShapeSix,
      shapeTwo: FeatureOneShapeSeven,
      shapeThree: FeatureOneShapeEight,
    },
  ],
};

import FeatureTwoIconOne from "@/../public/assets/imgs/icon/achieve-6-1.webp";
import FeatureTwoIconTwo from "@/../public/assets/imgs/icon/achieve-6-2.webp";
import FeatureTwoIconThree from "@/../public/assets/imgs/icon/achieve-6-3.webp";

const whatYouCanAcheive = {
  title: "What can you achieve with coaching?",
  features: [
    {
      icon: FeatureTwoIconOne,
      name: "Clarity",
      description:
        "Your organization’s leaders must have a strategic roadmap to drive performance & make impactful decisions. ",
    },
    {
      icon: FeatureTwoIconTwo,
      name: "Strategy",
      description:
        "Your organization’s leaders must have a strategic roadmap to drive performance & make impactful decisions. ",
    },
    {
      icon: FeatureTwoIconThree,
      name: "Accountability",
      description:
        "Your organization’s leaders must have a strategic roadmap to drive performance & make impactful decisions. ",
    },
  ],
};

export { featureOne, whatYouCanAcheive };
