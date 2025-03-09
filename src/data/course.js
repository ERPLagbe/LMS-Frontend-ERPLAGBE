import CourseImageOne from "@/../public/assets/imgs/gallery/course-img-1.webp";
import CourseImageTwo from "@/../public/assets/imgs/gallery/course-img-2.webp";
import CourseImageThree from "@/../public/assets/imgs/gallery/course-img-3.webp";
import CourseImageFour from "@/../public/assets/imgs/gallery/course-img-4.webp";
import CourseImageFive from "@/../public/assets/imgs/gallery/course-img-5.webp";
import CourseImageSix from "@/../public/assets/imgs/gallery/course-img-6.webp";

import InstructorImageOne from "@/../public/assets/imgs/team/comment-1.webp";
import InstructorImageTwo from "@/../public/assets/imgs/team/comment-2.webp";
import InstructorImageThree from "@/../public/assets/imgs/team/comment-3.webp";
import InstructorImageFour from "@/../public/assets/imgs/team/comment-img.webp";
import InstructorImageFive from "@/../public/assets/imgs/team/instructor.webp";

import WishListIcon from "@/../public/assets/imgs/icon/wiselist.svg";
import StarRedIcon from "@/../public/assets/imgs/icon/star-red.svg";
import StatusIcon from "@/../public/assets/imgs/icon/status-icon.svg";
import UserGroupIcon from "@/../public/assets/imgs/icon/user-three-red.svg";
import RightArrowRedIcon from "@/../public/assets/imgs/icon/arrow-right-red.svg";
import RightArrowWhiteIcon from "@/../public/assets/imgs/icon/arrow-right-white.svg";

const courseOne = {
  title: {
    sliceOne: "আমাদের",
    sliceTwo: "কোর্স",
    sliceThree: "সমূহ",
  },
  filterOptions: [
    {
      name: "All",
      target: "*",
    },
    {
      name: "Online",
      target: "Online",
    },
    {
      name: "Offline",
      target: "Offline",
    },
    {
      name: "Offline+Online",
      target: "Offline/Online",
    },
  ],
  courses: [
    {
      image: CourseImageOne,
      instructor: {
        image: InstructorImageFive,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Web Development For Beginners How To Use HTML5",
      price: "$19.00",
      link: "course-detail",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageTwo,
      instructor: {
        image: InstructorImageOne,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Crafting User-Friendly Interfaces Design",
      price: "$9.00",
      link: "course-detail",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageFour,
      instructor: {
        image: InstructorImageTwo,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Responsive Web Design: Creating Sites for Any Device",
      price: "$15.00",
      link: "course-detail",
      filterClass: "popular",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageThree,
      instructor: {
        image: InstructorImageThree,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "HTML & CSS Fundamentals: Building the Web from Scratch",
      price: "$13.00",
      link: "course-detail",
      filterClass: "popular",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageFour,
      instructor: {
        image: InstructorImageFour,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "UI/UX Design Principles: Enhancing User Experience",
      price: "$11.00",
      link: "course-detail",
      filterClass: "featured",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: CourseImageSix,
      instructor: {
        image: InstructorImageFive,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: "Web Design Trends: Staying Current in a Dynamic Field",
      price: "$17.00",
      link: "course-detail",
      filterClass: "featured",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
  ],
  more: {
    name: "আরো দেখুন",
    icon: RightArrowWhiteIcon,
    link: "courses",
  },
};

import CourseTwoImageOne from "@/../public/assets/imgs/thumb/course-four-1.webp";
import CourseTwoImageTwo from "@/../public/assets/imgs/thumb/course-four-2.webp";
import CourseTwoImageThree from "@/../public/assets/imgs/thumb/course-four-3.webp";

const courseTwo = {
  title: "Explore Our Course",
  btn: {
    text: "View all course",
    link: "/",
  },
  courses: [
    {
      image: CourseTwoImageOne,
      title: "MATHS for Kids",
      description:
        "Metus aliquam eleifend mi in nulla posuere thsi sollicitudin",
      link: "course-detail",
      price: "$12",
      discount: "60%",
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.4",
      },
    },
    {
      image: CourseTwoImageTwo,
      title: "Science for Kids",
      description:
        "Metus aliquam eleifend mi in nulla posuere thsi sollicitudin",
      link: "course-detail",
      price: "$13",
      discount: "60%",
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
    },
    {
      image: CourseTwoImageThree,
      title: "English for Kids",
      description:
        "Metus aliquam eleifend mi in nulla posuere thsi sollicitudin",
      link: "course-detail",
      price: "$15",
      discount: "60%",
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
    },
  ],
};

import CourseThreeImageOne from "@/../public/assets/imgs/thumb/course-6-1.webp";
import CourseThreeImageTwo from "@/../public/assets/imgs/thumb/course-6-2.webp";
import CourseThreeImageThree from "@/../public/assets/imgs/thumb/course-6-3.webp";
import CourseThreeImageFour from "@/../public/assets/imgs/thumb/course-6-4.webp";

const courseThree = {
  title: "Our health coach online courses",
  courses: [
    {
      image: CourseThreeImageOne,
      title: "Prime & wellness coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageTwo,
      title: "Fundamental health coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageThree,
      title: "Stress management coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageFour,
      title: "Behavioral Change Coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
  ],
};

export { courseOne, courseTwo, courseThree };
