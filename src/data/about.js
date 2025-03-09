import GraduateShape from "@/../public/assets/imgs/shape/graduate-shape.webp";
import UserShape from "@/../public/assets/imgs/shape/user-shape.webp";
import MessageShape from "@/../public/assets/imgs/shape/message-shape.webp";

const aboutOne = {
  title: {
    sliceOne: "Accessing your",
    sliceTwo: "course",
    sliceThree: "anywhere to learn new skill for grow your",
    sliceFour: "Career",
  },
  description:
    "In recent years, the popularity of online learning has surged, providing individuals with a flexible and convenient avenue to pursue education.",
  video: {
    src: "/assets/media/videos/features-video.mp4",
  },
  widgets: [
    {
      shape: GraduateShape,
      classNames: "features__shape2 fade-slide right",
    },
    {
      shape: UserShape,
      classNames: "features__shape3 fade-slide left",
    },
    {
      shape: MessageShape,
      classNames: "features__shape4 fade-slide bottom",
    },
  ],
};

import AboutTwoImage from "@/../public/assets/imgs/thumb/ab-img.webp";
import AboutTwoFeatureIconOne from "@/../public/assets/imgs/icon/about-icon-1.webp";
import AboutTwoFeatureIconTwo from "@/../public/assets/imgs/icon/about-icon-2.webp";
import AboutTwoFeatureIconThree from "@/../public/assets/imgs/icon/about-icon-3.webp";
import AboutTwoFeatureIconFour from "@/../public/assets/imgs/icon/about-icon-4.webp";

import ShapeThreeOne from "@/../public//assets/imgs/shape/ts-shapethree1.webp";
import ShapeFourTwo from "@/../public/assets/imgs/shape/ab-shapefour-2.webp";
import ShapeFourThree from "@/../public/assets/imgs/shape/ab-shapefour-3.webp";
import ShapeFourFour from "@/../public/assets/imgs/shape/ab-shapefour-4.webp";
import ShapeFourFive from "@/../public/assets/imgs/shape/ab-shapefour-5.webp";
import ShapeFourSix from "@/../public/assets/imgs/shape/ab-shapefour-6.webp";
import ShapeFourSeven from "@/../public/assets/imgs/shape/ab-shapefour-7.webp";
import ShapeFourEight from "@/../public/assets/imgs/shape/ab-shapefour-8.webp";

const aboutTwo = {
  image: AboutTwoImage,
  title: "Every child deserves to learn",
  description:
    "Million children lack basic math and reading skills globally. Help us provide the education they need.",
  features: [
    {
      icon: AboutTwoFeatureIconOne,
      name: "Customized Learning",
      animation: {
        name: "fade-slide bottom",
        delay: "0.4",
      },
    },
    {
      icon: AboutTwoFeatureIconTwo,
      name: "Professional Content",
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
    },
    {
      icon: AboutTwoFeatureIconThree,
      name: "Parental Involvement",
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
    },
    {
      icon: AboutTwoFeatureIconFour,
      name: "Source & safe Kids",
      animation: {
        name: "fade-slide bottom",
        delay: "1.0",
      },
    },
  ],
  btn: {
    text: "Get Started",
    link: "contact",
  },
  shapeOne: ShapeThreeOne,
  shapeTwo: ShapeFourTwo,
  shapeThree: ShapeFourThree,
  shapeFour: ShapeFourFour,
  shapeFive: ShapeFourFive,
  shapeSix: ShapeFourSix,
  shapeSeven: ShapeFourSeven,
  shapeEight: ShapeFourEight,
};

import AboutThreeImageOne from "@/../public/assets/imgs/thumb/about-6-1.webp";
import AboutThreeShapeOne from "@/../public/assets/imgs/shape/about-6-1.webp";
import AboutThreeShapeTwo from "@/../public/assets/imgs/shape/about-6-2.webp";
import AboutThreeShapeThree from "@/../public/assets/imgs/shape/about-6-3.webp";
import AboutThreeShapeFour from "@/../public/assets/imgs/shape/about-6-4.webp";
import AboutThreeShapeFive from "@/../public/assets/imgs/shape/about-6-5.webp";

const aboutThree = {
  title: "Build A wealth of energy, happiness and strength",
  subTitle: "About Us",
  descriptionOne:
    "Health coaching is the perfect solution for identifying your challenges and addressing them with a sense of self accountability Our 60-minute, three-sessions-per-month individual and specialty coaching packages.",
  descriptionTwo:
    "Help you refocus, revise, and realign your actions with your goals. We know you’re busy doing incredible work.",
  link: "about",
  image: AboutThreeImageOne,
  shapeOne: AboutThreeShapeOne,
  shapeTwo: AboutThreeShapeTwo,
  shapeThree: AboutThreeShapeThree,
  shapeFour: AboutThreeShapeFour,
  shapeFive: AboutThreeShapeFive,
};

import ArrowRightWhite from "@/../public/assets/imgs/icon/arrow-right-red.svg";
import AboutFourThumb from "@/../public/assets/imgs/thumb/450163597_957395833065701_6368731265498816013_n.jpg";
import AboutShapeFourOne from "@/../public/assets/imgs/shape/about-shapefour-1.webp";
import ReviewShape from "@/../public/assets/imgs/shape/review-shape.webp";

const aboutFour = {
  image: AboutFourThumb,
  shapeOne: AboutShapeFourOne,
  shapeTwo: ReviewShape,
  title: {
    sliceOne: "আমরা সেরা মানের অনলাইন ",
    sliceTwo: "কোর্স",
    sliceThree: 'অফার করছি'
  },
  description:
    "জোবায়ের একাডেমিতে, আমরা এমন একটি ভবিষ্যৎ কল্পনা করি যেখানে সমগ্র বাংলাদেশ এবং এর বাইরেও ব্যক্তিরা ক্রমাগত দক্ষতা বিকাশের মাধ্যমে তাদের পূর্ণ সম্ভাবনাকে আনলক করার সুযোগ পাবেন। আমাদের ওয়েবসাইট একটি রূপান্তরমূলক শিক্ষার অভিজ্ঞতার জন্য ডিজিটাল হাব হিসাবে কাজ করে, মানসম্পন্ন শিক্ষা আপনার হাতের নাগালে নিয়ে আসে।",
  btn: {
    text: "আরো দেখুন",
    link: "courses",
    icon: ArrowRightWhite,
  },
};

export { aboutOne, aboutTwo, aboutThree, aboutFour };
