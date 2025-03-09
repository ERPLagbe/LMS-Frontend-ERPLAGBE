import DemoOne from "@/../public/assets/imgs/demo/1.png";
import DemoTwo from "@/../public/assets/imgs/demo/2.png";
import DemoThree from "@/../public/assets/imgs/demo/3.png";
import DemoFour from "@/../public/assets/imgs/demo/4.png";
import DemoFive from "@/../public/assets/imgs/demo/5.png";
import DemoSix from "@/../public/assets/imgs/demo/6.png";
import ComingSoonDemo from "@/../public/assets/imgs/demo/8.png";

const megaMenuOne = [
  {
    name: "Top 10",
    items: [
      {
        image: DemoOne,
        link: "/",
        title: "Online Course",
      },
      {
        image: DemoTwo,
        link: "children-education",
        title: "Kids Education",
      },
      {
        image: DemoThree,
        link: "health-coach",
        title: "Health Course",
      },
      {
        image: DemoFour,
        link: "course-platform",
        title: "Course Platfrom",
      },
      {
        image: DemoFive,
        link: "online-university",
        title: "Online University",
      },
      {
        image: DemoSix,
        link: "chef",
        title: "Chef",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "AI Course Learning",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Devs Coaching",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Language Academy",
      },
      {
        image: ComingSoonDemo,
        link: "#",
        title: "Business Coach",
      },
    ],
  },
  {
    name: "Online Course",
    items: [
      {
        image: DemoOne,
        link: "/",
        title: "Online Course",
      },
    ],
  },
  {
    name: "Kids Education",
    items: [
      {
        image: DemoTwo,
        link: "children-education",
        title: "Kids Education",
      },
    ],
  },
  {
    name: "Health Coach",
    items: [
      {
        image: DemoThree,
        link: "health-coach",
        title: "Health Coach",
      },
    ],
  },
  {
    name: "Course Platfrome",
    items: [
      {
        image: DemoFour,
        link: "course-platform",
        title: "Course Platfrome",
      },
    ],
  },
  {
    name: "Online University",
    items: [
      {
        image: DemoFive,
        link: "online-university",
        title: "Online University",
      },
    ],
  },
  {
    name: "Chef",
    items: [
      {
        image: DemoSix,
        link: "chef",
        title: "Chef",
      },
    ],
  },
];

const menus = [
  {
    name: "হোম",
    link: "/",
    // megaMenu: megaMenuOne,
    // subMenus: [
    //   {
    //     link: "/",
    //     name: "Online Course",
    //   },
    //   {
    //     link: "children-education",
    //     name: "Kids Education",
    //   },
    //   {
    //     link: "health-coach",
    //     name: "Health Course",
    //   },
    //   {
    //     link: "course-platform",
    //     name: "Course Platfrom",
    //   },
    //   {
    //     link: "online-university",
    //     name: "Online University",
    //   },
    //   {
    //     link: "chef",
    //     name: "Chef",
    //   },
    // ],
  },
  {
    name: "আমাদের সম্পর্কে",
    link: "about",
  },
  
  {
    name: "কোর্স",
    link: "/courses",
    megaMenu: megaMenuOne,
    subMenus: [
      {
        link: "/",
        name: "Online Course",
      },
      {
        link: "children-education",
        name: "Kids Education",
      },
      {
        link: "health-coach",
        name: "Health Course",
      },
      {
        link: "course-platform",
        name: "Course Platfrom",
      },
      {
        link: "online-university",
        name: "Online University",
      },
      {
        link: "chef",
        name: "Chef",
      },
    ],
  },

  {
    name: "ব্লগ",
    link: "blogs",
  },
  

  {
    name: "যোগাযোগ",
    link: "contact",
  },
];

import OnlineLogo from "@/../public/assets/imgs/logo/online-logo.svg";

const menuTwo = [
  {
    name: "Home",
    link: "#",
    megaMenu: megaMenuOne,
    subMenus: [
      {
        link: "/",
        name: "Online Course",
      },
      {
        link: "children-education",
        name: "Kids Education",
      },
      {
        link: "health-coach",
        name: "Health Course",
      },
    ],
  },
  {
    name: "Courses",
    link: "#",
    subMenus: [
      {
        name: "Course List",
        link: "courses",
      },
      {
        name: "Course Detail",
        link: "course-detail",
      },
      {
        name: "Course Filter",
        link: "course-filter",
      },
    ],
  },
  {
    name: "Pages",
    link: "#",
    subMenus: [
      {
        name: "Instructor",
        link: "instructors",
      },
      {
        name: "Instructor Detail",
        link: "instructor-detail",
      },
      {
        name: "404",
        link: "not-found",
      },
    ],
  },
  {
    name: "",
    logo: OnlineLogo,
    link: "#",
  },
  {
    name: "Blog",
    link: "#",
    subMenus: [
      {
        name: "Blog List",
        link: "blogs",
      },
      {
        name: "Blog Sidebar",
        link: "#",
        menus: [
          {
            name: "Right Sidebar",
            link: "blogs",
          },
          {
            name: "Left Sidebar",
            link: "blog-left-sidebar",
          },
        ],
      },
      {
        name: "Blog Layout",
        link: "#",
        menus: [
          {
            name: "1 Column",
            link: "blog-column-one",
          },
          {
            name: "2 Column",
            link: "blog-column-two",
          },
          {
            name: "3 Column",
            link: "blog-column-three",
          },
          {
            name: "4 Column",
            link: "blog-column-four",
          },
        ],
      },
      {
        name: "Blog Details",
        link: "#",
        menus: [
          {
            name: "Right Sidebar",
            link: "blog-detail-right-sidebar",
          },
          {
            name: "Left Sidebar",
            link: "blog-detail-left-sidebar",
          },
          {
            name: "Without Sidebar",
            link: "blog-detail",
          },
        ],
      },
    ],
  },
  {
    name: "Conatct",
    link: "contact",
  },
];

export default menus;

export { menuTwo };
