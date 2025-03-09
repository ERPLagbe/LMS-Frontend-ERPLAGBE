import ArrowRightWhiteIcon from "@/../public/assets/imgs/icon/arrow-right-dark.svg";
import ReviewIcon from "@/../public/assets/imgs/icon/review.webp";
import FeedbackIcon from "@/../public/assets/imgs/icon/feedback.webp";

import SlideOneItemOne from "@/../public/assets/imgs/hero/img1.jpeg";
import SlideOneItemTwo from "@/../public/assets/imgs/hero/img5.png";
import SlideOneItemThree from "@/../public/assets/imgs/hero/img2 1.jpg";
import SlideOneItemFour from "@/../public/assets/imgs/hero/img2 2.jpg";
import SlideOneItemFive from "@/../public/assets/imgs/hero/img4.png";

import SlideOneWidgetOne from "@/../public/assets/imgs/shape/hero-shape-1.webp";
import SlideOneWidgetTwo from "@/../public/assets/imgs/shape/hero-shape-2.webp";
import SlideOneWidgetThree from "@/../public/assets/imgs/shape/hero-shape-3.webp";

const heroOne = {
  title: {
    sliceOne: "সরাসরি ও অনলাইন",
    sliceTwo: "কোর্স",
    sliceThree: ' এর সুবিধা',
    sliceFour: "ডেভলপমেন্ট কোর্স",
    sliceFive: "স্কিল",
  },
  description:
    "স্কিল ডেভলপ করে নিজের জীবনকে পরিবর্তন করুন।",
  btn: {
    title: "যোগাযোগ করুন",
    link: "about",
    icon: ArrowRightWhiteIcon,
  },
  review: {
    icon: ReviewIcon,
    feedbackIcon: FeedbackIcon,
    title: "Based on 1,000+ reviews from",
  },
  slides: [
    {
      items: [
        {
          image: SlideOneItemOne,
        },
        {
          image: SlideOneItemTwo,
          widget: {
            image: SlideOneWidgetOne,
            classNames: "hero__shape-1 fade-slide bottom",
          },
        },
        {
          image: SlideOneItemThree,
          widget: {
            image: SlideOneWidgetThree,
            classNames: "hero__shape-2 fade-slide right",
          },
        },
        {
          image: SlideOneItemFour,
          widget: {
            image: SlideOneWidgetTwo,
            classNames: "hero__shape-3 fade-slide left",
          },
        },
        {
          image: SlideOneItemFive,
        },
      ],
    },
    {
      items: [
        {
          image: SlideOneItemOne,
        },
        {
          image: SlideOneItemTwo,
          widget: {
            image: SlideOneWidgetOne,
            classNames: "hero__shape-1 fade-slide bottom",
          },
        },
        {
          image: SlideOneItemThree,
          widget: {
            image: SlideOneWidgetThree,
            classNames: "hero__shape-2 fade-slide right",
          },
        },
        {
          image: SlideOneItemFour,
          widget: {
            image: SlideOneWidgetTwo,
            classNames: "hero__shape-3 fade-slide left",
          },
        },
        {
          image: SlideOneItemFive,
        },
      ],
    },
  ],
};

import InnerOneShapeOne from "@/../public//assets/imgs/shape/banner-shape-1.webp";
import InnerOneShapeTwo from "@/../public/assets/imgs/shape/banner-shape-2.webp";
import InnerOneShapeThree from "@/../public/assets/imgs/shape/banner-shape-3.webp";
import InnerOneShapeFour from "@/../public/assets/imgs/shape/banner-shape-4.webp";
import InnerOneShapeFive from "@/../public/assets/imgs/shape/banner-shape-5.webp";
import InnerOneShapeSix from "@/../public/assets/imgs/shape/banner-shape-6.webp";
import InnerOneShapeSeven from "@/../public/assets/imgs/shape/banner-shape-7.webp";

const innerHeroOne = {
  shapeOne: InnerOneShapeOne,
  shapeTwo: InnerOneShapeTwo,
  shapeThree: InnerOneShapeThree,
  shapeFour: InnerOneShapeFour,
  shapeFive: InnerOneShapeFive,
  shapeSix: InnerOneShapeSix,
  shapeSeven: InnerOneShapeSeven,
};

import BadgeImage from "@/../public/assets/imgs/shape/hero-circletext-4.svg";
import BadgeTextIcon from "@/../public/assets/imgs/icon/textshape-icon.svg";
import HeroTwoImageOne from "@/../public/assets/imgs/hero/children-women.webp";
import HeroTwoImageTwo from "@/../public/assets/imgs/hero/child-img.webp";

import HeroTwoShapeOne from "@/../public/assets/imgs/shape/hero-btm-shape-4.webp";
import HeroTwoShapeTwo from "@/../public/assets/imgs/shape/hero-shapefour-1.webp";
import HeroTwoShapeThree from "@/../public/assets/imgs/shape/hero-shapefour-4.webp";
import HeroTwoShapeFour from "@/../public/assets/imgs/shape/hero-shapefour-5.webp";
import HeroTwoShapeFive from "@/../public/assets/imgs/shape/hero-shapefour-8.webp";
import HeroTwoShapeSix from "@/../public/assets/imgs/shape/hero-shapefour-9.webp";
import HeroTwoShapeSeven from "@/../public/assets/imgs/shape/hero-shapefour-11.webp";
import HeroTwoShapeEight from "@/../public/assets/imgs/bg/1.webp";

const heroTwo = {
  title: {
    sliceOne: "Empowering",
    sliceTwo: "Children",
    sliceThree: "to Thrive",
  },
  link: "courses",
  imageOne: HeroTwoImageOne,
  imageTwo: HeroTwoImageTwo,
  badgeImage: BadgeImage,
  badgeTextIcon: BadgeTextIcon,
  description:
    "Our nonprofit strives to offer a top-tier education at no cost, accessible to everyone globally",
  shapeOne: HeroTwoShapeOne,
  shapeTwo: HeroTwoShapeTwo,
  shapeThree: HeroTwoShapeThree,
  shapeFour: HeroTwoShapeFour,
  shapeFive: HeroTwoShapeFive,
  shapeSix: HeroTwoShapeSix,
  shapeSeven: HeroTwoShapeSeven,
  shapeEight: HeroTwoShapeEight,
};

import HeroThreeShapeOne from "@/../public/assets/imgs/shape/banner-6-1.webp";
import HeroThreeShapeTwo from "@/../public/assets/imgs/shape/banner-6-2.webp";
import HeroThreeShapeThree from "@/../public/assets/imgs/shape/banner-6-3.webp";
import HeroThreeShapeFour from "@/../public/assets/imgs/shape/banner-6-4.webp";

const heroThree = {
  title: {
    sliceOne: "Let a health coach guide you a better",
    sliceTwo: "Health",
  },
  description:
    "At Tomorrow Health, we build technology that improves the way home-based care.",
  btn: {
    link: "contact",
    text: "Get Started",
  },
  shapeOne: HeroThreeShapeOne,
  shapeTwo: HeroThreeShapeTwo,
  shapeThree: HeroThreeShapeThree,
  shapeFour: HeroThreeShapeFour,
};

const heroFour = {
  title: {
    sliceOne: "Global leader in learning and instruction",
    sliceTwo: "Marketplace",
  },
  descriptionOne:
    "Inspiring courses for the life you want to lead. Discover our fresh approach to a life-changing educational adventure.",
  descriptionTwo:
    "We believe in putting our clients at the heart of everything we do. Your success is our success, and we are committed to delivering exceptional service tailored to your unique.",
};
export { heroOne, innerHeroOne, heroTwo, heroThree, heroFour };
