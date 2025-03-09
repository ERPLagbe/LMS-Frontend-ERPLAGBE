import LogoOne from "@/../public/assets/imgs/logo/logo.png";
import LogoTwo from "@/../public//assets/imgs/logo/logo-children.webp";
import LogoThree from "@/../public/assets/imgs/logo/health-coach-logo.webp";
import SearchIcon from "@/../public/assets/imgs/icon/search-icon.svg";
import CartIcon from "@/../public/assets/imgs/icon/cart-icon.svg";

import CategoryMenuOneIconOne from "@/../public/assets/imgs/menu-icon/2.svg";
import CategoryMenuOneIconTwo from "@/../public/assets/imgs/menu-icon/3.svg";
import CategoryMenuOneIconThree from "@/../public/assets/imgs/menu-icon/4.svg";
import CategoryMenuOneIconFour from "@/../public/assets/imgs/menu-icon/5.svg";
import CategoryMenuOneIconFive from "@/../public/assets/imgs/menu-icon/6.svg";
import CategoryMenuOneIconSix from "@/../public/assets/imgs/menu-icon/7.svg";

const HeaderOne = {
  logo: LogoOne,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  categories: [
    {
      name: "Graphic Design",
      link: "courses",
      icon: CategoryMenuOneIconOne,
    },
    {
      name: "Web Development",
      link: "courses",
      icon: CategoryMenuOneIconTwo,
    },
    {
      name: "Digital Marketing",
      link: "courses",
      icon: CategoryMenuOneIconThree,
    },
    {
      name: "It and Software",
      link: "courses",
      icon: CategoryMenuOneIconFour,
    },
    {
      name: "Development",
      link: "courses",
      icon: CategoryMenuOneIconFive,
    },
    {
      name: "Data Science",
      link: "courses",
      icon: CategoryMenuOneIconSix,
    },
  ],
};

const headerTwo = {
  logo: LogoTwo,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  link: "children-education",
};

const headerThree = {
  logo: LogoThree,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  link: "children-education",
};
export { HeaderOne, headerTwo, headerThree };
