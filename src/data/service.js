import ServiceOneImageOne from "@/../public/assets/imgs/icon/skill-1.webp";
import ServiceOneImageTwo from "@/../public/assets/imgs/icon/skill-2.webp";
import ServiceOneImageThree from "@/../public/assets/imgs/icon/skill-3.webp";
import ServiceOneImageFour from "@/../public/assets/imgs/icon/skill-4.webp";

const serviceOne = {
  title: {
    sliceOne: "কেনো",
    sliceTwo: "জোবায়ের",
    sliceThree: "একাডেমী?",
  },
  services: [
    {
      icon: ServiceOneImageOne,
      title: "ইন্টারেক্টিভ লার্নিং",
      description: "এডভান্সড সিস্টেমে কোর্স ভিডিও, ট্র্যাকিং ও পরীক্ষা",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b1",
    },
    {
      icon: ServiceOneImageTwo,
      title: "পার্সোনাল মেন্টরশীপ",
      description: "শেখার যেকোনো সমস্যায় জোবায়ের স্যারের সাথে ফোনে, মেসেজে বা সরাসরি অফিসে এসে ১ টু ১ সমাধানের সুযোগ",
      animation: { name: "fade-slide top" },
      classNames: "border-b2 mt-md-5",
    },
    {
      icon: ServiceOneImageThree,
      title: "বিজনেস সাপোর্ট",
      description: "নিজের ব্যবসা শুরুর ক্ষেত্রে, যন্ত্রপাতি, উপাদান সোর্সিং, বিজনেস গাইডলাইনসহ সকল ধরনের সাপোর্ট ",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b1",
    },
    {
      icon: ServiceOneImageFour,
      title: "কমিউনিটি সাপোর্ট",
      description: "ফেসবুক ও হোয়াটসঅ্যাপ গ্রুপে যুক্ত হয়ে সকল স্টুডেন্টদের সাথে যোগাযোগ ও আলোচনার সুযোগ",
      animation: { name: "fade-slide top" },
      classNames: "border-b2 mt-md-5",
    },
  ],
};

import ServiceImageOne from "@/../public/assets/imgs/thumb/service-img-1.webp";
import ServiceImageTwo from "@/../public/assets/imgs/thumb/service-img-2.webp";
import ServiceImageThree from "@/../public/assets/imgs/thumb/service-img-3.webp";

import ServiceShapeOne from "@/../public/assets/imgs/shape/sr-shapefour-1.webp";
import ServiceShapeTwo from "@/../public/assets/imgs/shape/sr-shapefour-2.webp";
import ServiceShapeThree from "@/../public/assets/imgs/shape/sr-shapefour-3.webp";

const serviceTwo = {
  title: "Experi mentation fosters creativity",
  services: [
    {
      image: ServiceImageOne,
      shape: ServiceShapeOne,
      animation: {
        name: "fade-slide bottom",
        delay: "0.4",
      },
      title: "Boosting confidence",
      description:
        "Fostering your childs self-assurance to encourage learning from our platforms & Building kids self-assurance.",
    },
    {
      image: ServiceImageTwo,
      shape: ServiceShapeTwo,
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      title: "Express creatively",
      description:
        "Fostering your childs self-assurance to encourage learning from our platforms & Building kids self-assurance.",
    },
    {
      image: ServiceImageThree,
      shape: ServiceShapeThree,
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      title: "Tailored learning",
      description:
        "Fostering your childs self-assurance to encourage learning from our platforms & Building kids self-assurance.",
    },
  ],
};

import EmpowerIcon from "@/../public/assets/imgs/icon/empower.webp";
import SkillIcon from "@/../public/assets/imgs/icon/skills.webp";
import ProfitIcon from "@/../public/assets/imgs/icon/profit.webp";
import ExistingIcon from "@/../public/assets/imgs/icon/existing.webp";

const serviceThree = {
  title: "আমাদের মান",
  services: [
    {
      icon: EmpowerIcon,
      title: "শেখার ক্ষমতায়ন",
      description:
        "আপনি কাউকে একটি কলম এবং কাগজ দিয়ে লিখতে সক্ষম করতে পারেন",
      animation: {
        name: "fade-slide bottom",
      },
    },
    {
      icon: SkillIcon,
      title: "দক্ষতার উপর সার্টিফিকেট",
      description:
        "আপনি কাউকে একটি কলম এবং কাগজ দিয়ে লিখতে সক্ষম করতে পারেন",
      animation: {
        name: "fade-slide top",
      },
    },
    {
      icon: ProfitIcon,
      title: "প্রভাবের উপর লাভ",
      description:
      "আপনি কাউকে একটি কলম এবং কাগজ দিয়ে লিখতে সক্ষম করতে পারেন",
      animation: {
        name: "fade-slide bottom",
      },
    },
    {
      icon: ExistingIcon,
      title: "প্রভাবের উপর লাভ",
      description:
      "আপনি কাউকে একটি কলম এবং কাগজ দিয়ে লিখতে সক্ষম করতে পারেন",
      animation: {
        name: "fade-slide top",
      },
    },
  ],
};

export { serviceOne, serviceTwo, serviceThree };
