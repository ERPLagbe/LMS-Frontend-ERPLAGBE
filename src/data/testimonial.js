import quoteTopIcon from "@/../public/assets/imgs/icon/qoute-top.webp";
import quoteBottomIcon from "@/../public/assets/imgs/icon/quote-btm.webp";
import TestimonialOneImageOne from "@/../public/assets/imgs/team/img1.png";
import TestimonialOneImageTwo from "@/../public/assets/imgs/team/img2.png";
import TestimonialOneImageThree from "@/../public/assets/imgs/team/img3.png";
import TestimonialOneImageFour from "@/../public/assets/imgs/team/img4.png";
import LeftIcon from "@/../public/assets/imgs/icon/ts-icon-left.webp";
import RightIcon from "@/../public/assets/imgs/icon/ts-icon-right.webp";

const testimonialOne = {
  title: "শিক্ষার্থীদের",
  highlightedTitle: "মতামত",

  navigation: {
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
  },
  testimonials: [
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageOne,
      description:
        "কোর্সটি দারুণ। প্রতিটি ধাপ সুন্দরভাবে ব্যাখ্যা করা হয়েছে। নিজে বানানো সাবান দেখে আনন্দিত।",
      name: "আফরোজা বেগম",
      designation: "শিক্ষার্থী",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageTwo,
      description:
        "খুবই সুন্দর কোর্স। সাবান বানানোর প্রযুক্তি অনেক সহজভাবে শেখানো হয়েছে। খুবই উপকারী।",
      name: "মোঃ কামরুল হাসান",
      designation: "শিক্ষার্থী",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageThree,
      description:
        "কোর্সটি অত্যন্ত বিস্তারিত এবং সহজবোধ্য। আমি এখন নিজের সাবান বানাচ্ছি, যা খুব আনন্দের।",
      name: "ইমরান হোসেন",
      designation: "শিক্ষার্থী",
    },
    {
      quoteTopIcon: quoteTopIcon,
      quoteBottomIcon: quoteBottomIcon,
      image: TestimonialOneImageFour,
      description:
        "কোর্সটি বেশ কার্যকর। সাবান বানানোর প্রতিটি ধাপে দক্ষতা অর্জন করেছি। প্রশিক্ষক অসাধারণ ছিলেন।",
      name: "মাহমুদুল হাসান",
      designation: "শিক্ষার্থী",
    },
  ],
};

import TestimonialTwoShapeOne from "@/../public/assets/imgs/icon/star-red-lg.webp";
import TestimonialTwoShapeTwo from "@/../public/assets/imgs/shape/ts-border-shape.webp";
import TestimonialTwoClientOne from "@/../public/assets/imgs/team/ts-client-4.webp";
import TestimonialTwoClientTwo from "@/../public/assets/imgs/team/comment-1.webp";
import TestimonialTwoClientThree from "@/../public/assets/imgs/team/comment-2.webp";

const testimonialTwo = [
  {
    image: TestimonialTwoClientOne,
    shapeOne: TestimonialTwoShapeOne,
    shapeTwo: TestimonialTwoShapeTwo,
    name: "মোহাম্মদ আমিনুল",
    designation: "পিতা",
    description:
      "এই কোর্সটি আমার মেয়েকে সাবান তৈরির শিল্পে দক্ষ করে তুলেছে। সে খুবই আগ্রহী এবং আমি খুব গর্বিত।",
  },
  {
    image: TestimonialTwoClientTwo,
    shapeOne: TestimonialTwoShapeOne,
    shapeTwo: TestimonialTwoShapeTwo,
    name: "ফারহানা হাসান",
    designation: "শিক্ষার্থী",
    description:
      "এই কোর্সটি করে আমি অনেক কিছু শিখেছি। ইনস্ট্রাক্টরের ব্যাখ্যা খুবই পরিষ্কার এবং অনুসরণ করা সহজ।",
  },
  {
    image: TestimonialTwoClientThree,
    shapeOne: TestimonialTwoShapeOne,
    shapeTwo: TestimonialTwoShapeTwo,
    name: "নাঈমা আহমেদ",
    designation: "ইন্সট্রাক্টর",
    description:
      "এই কোর্সে যোগ দিতে পেরে আমি খুবই আনন্দিত। এটি একটি দুর্দান্ত এবং শিক্ষণীয় অভিজ্ঞতা ছিল।",
  },
];

import TestimonialThreeImageOne from "@/../public/assets/imgs/thumb/testimonial-6-1.webp";
import TestimonialThreeImageTow from "@/../public/assets/imgs/thumb/blog-6-1.webp";
import TestimonialThreeImageThree from "@/../public/assets/imgs/thumb/testimonial-6-1.webp";

import TestimonialThreeShapeOne from "@/../public/assets/imgs/shape/testi-6-1.webp";
import TestimonialThreeShapeTwo from "@/../public/assets/imgs/shape/testi-6-2.webp";
import TestimonialThreeShapeThree from "@/../public/assets/imgs/shape/testi-6-3.webp";
import TestimonialThreeShapeFour from "@/../public/assets/imgs/shape/testi-6-4.webp";

const testimonialThree = {
  title: "আমাদের সম্পর্কে কি বলে",
  testimonials: [
    {
      image: TestimonialThreeImageOne,
      title:
        "শুরুতে একটু দ্বিধাগ্রস্ত ছিলাম, কিন্তু কোর্সের প্রতিটি ধাপ এমনভাবে উপস্থাপন করা হয়েছে যে আমি সহজেই বুঝতে পেরেছি।",
      name: "সুমন করিম",
      designation: "— কৌশলগত সদস্য, ঢাকা",
    },
    {
      image: TestimonialThreeImageTow,
      title:
        "কোর্সটি অত্যন্ত কার্যকরী, এবং আমি এটি করে খুবই আনন্দিত। এটি একটি দুর্দান্ত শিক্ষণীয় অভিজ্ঞতা ছিল।",
      name: "মারুফা ইসলাম",
      designation: " — কৌশলগত সদস্য, চট্টগ্রাম",
    },
    {
      image: TestimonialThreeImageThree,
      title:
        "কোর্সটি আমাকে অনেক নতুন কৌশল শিখতে সাহায্য করেছে। আমি এটি নিয়ে বেশ সন্তুষ্ট।",
      name: "রিয়াজ হোসেন",
      designation: "— কৌশলগত সদস্য, সিলেট",
    },
  ],
  shapeOne: TestimonialThreeShapeOne,
  shapeTwo: TestimonialThreeShapeTwo,
  shapeThree: TestimonialThreeShapeThree,
  shapeFour: TestimonialThreeShapeFour,
};

export { testimonialOne, testimonialTwo, testimonialThree };
