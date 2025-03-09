import Logo from "@/../public/assets/imgs/logo/logo-white.png";
import AppleStoreIcon from "@/../public/assets/imgs/icon/apple-icon.svg";
import PlayStoreIcon from "@/../public/assets/imgs/icon/play-stor.svg";

import Mail from "@/../public/assets/imgs/icon/mail-dark.webp";
import Phone from "@/../public/assets/imgs/icon/phone-dark.webp";
import Location from "@/../public/assets/imgs/icon/location-dark.webp";

const footerOne = {
  logo: Logo,
  title: "Our Apps",
  appleIcon: AppleStoreIcon,
  appleTitle: "Apps Store",
  appleLink: "#",
  playIcon: PlayStoreIcon,
  playTitle: "Play Store",
  playLink: "#",
  copyrightText: "Copyright © 2024 ",
  companyName: "Jobayer Academy",
  copyrightLink: "https://jobayeracademy.com",
  widgets: [
    // {
    //   title: "কোর্স ক্যাটাগরি",
    //   menus: [
    //     {
    //       name: "Creative",
    //       link: "courses",
    //     },
    //     {
    //       name: "Animation",
    //       link: "courses",
    //     },
    //     {
    //       name: "Web Design",
    //       link: "courses",
    //     },
    //     {
    //       name: "Business",
    //       link: "courses",
    //     },
    //     {
    //       name: "Marketing",
    //       link: "courses",
    //     },
    //   ],
    // },
    {
      title: "কোম্পানি",
      menus: [
        {
          name: "আমাদের সম্পর্কে",
          link: "about",
        },
        {
          name: "ব্লগ",
          link: "blogs",
        },
        {
          name: "সকল কোর্স",
          link: "course",
        },
        // {
        //   name: "Instructor",
        //   link: "instructors",
        // },
        // {
        //   name: "404",
        //   link: "not_found",
        // },
      ],
    },
    {
      title: "সাহায্য এবং সমর্থন",
      menus: [
        {
          name: "সাহায্য গাইড",
          link: "contact",
        },
        // {
        //   name: "কোর্সের তথ্য",
        //   link: "course-detail",
        // },
        {
          name: "প্রাইভেসি পলিসি",
          link: "privacy-policy",
        },
        {
          name: "ক্যান্সেলেশন ও রিফান্ড পলেসি",
          link: "refund-policy",
        },

        {
          name: "যোগাযোগ",
          link: "contact",
        },
      ],
    },
    {
      title: "যোগাযোগ",
      menus: [
        {
          icon: Mail,
          name: "contact@jobayeracademy.com",
          link: "mailto:contact@jobayeracademy.com",
        },
        {
          icon: Phone,
          name: "01719295000",
          link: "tel:01719295000",
        },
        {
          icon: Location,
          name: "খিলক্ষেত, লেকসিটি কমপ্লেক্স, ৪থ ফ্লোর, ঢাকা ১২২৯ ",
        },
      ],
    },
  ],
};

import MicroBusImage from "@/../public/assets/imgs/icon/microbus.svg";
import FooterTwoLogo from "@/../public/assets/imgs/logo/children-logo.webp";
import StarRedShape from "@/../public/assets/imgs/shape/star-red.webp";
import ShapeGreen from "@/../public//assets/imgs/shape/shape-green.webp";
import FtShape from "@/../public/assets/imgs/shape/ft-shape.webp";

const footerTwo = {
  microBusImage: MicroBusImage,
  footerTwoLogo: FooterTwoLogo,
  appleStoreIcon: AppleStoreIcon,
  playStoreIcon: PlayStoreIcon,
  starRedShape: StarRedShape,
  shapeGreen: ShapeGreen,
  ftShape: FtShape,
};

const footerThree = {
  title: {
    sliceOne: "Subscribe for exclusive offers,",
    sliceTwo: "Giveaways",
    sliceThree: "& more",
  },
  btnText: "Join Now",
  widgets: [
    {
      name: "About Us",
      menus: [
        {
          name: "About Us",
          link: "about",
        },
        {
          name: "Health professional",
          link: "courses",
        },
        {
          name: "Blog",
          link: "blogs",
        },
        {
          name: "Contact",
          link: "contact",
        },
      ],
    },
    {
      name: "Our Course",
      menus: [
        {
          name: "Fundamental health coaching",
          link: "course-detail",
        },
        {
          name: "Prime wellness coaching",
          link: "course-detail",
        },
        {
          name: "Stress management coaching",
          link: "course-detail",
        },
        {
          name: "Behavioral Change Coaching",
          link: "course-detail",
        },
      ],
    },
    {
      name: "Our Apps",
      menus: [
        {
          name: "Apps Store",
          link: "course-detail",
          icon: AppleStoreIcon,
          className: "btn-appStore btn-hover-effect",
        },
        {
          name: "Play Store",
          link: "course-detail",
          icon: PlayStoreIcon,
          className: "btn-playstor btn-hover-effect",
        },
      ],
    },
  ],
};

export { footerOne, footerTwo, footerThree };
