"use client";

import menus from "@/data/menu";
import Link from "next/link";
import Image from "next/image";
import { useThemeContext } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import CanvasAbout from "@/../public/assets/imgs/logo/logo.png";
import { useEffect, useRef, useState } from "react";
import { getCourseCategories } from "@/services/course";
import MenuIconTwo from "@/../public/assets/imgs/menu-icon/s2.svg";
import MenuIconThree from "@/../public/assets/imgs/menu-icon/s3.svg";
import MenuIconFive from "@/../public/assets/imgs/menu-icon/s5.svg";

export default function Offcanvas() {
  const [categories, setCategories] = useState([]);
  const offcanvasRef = useRef(null);
  const { openSubMenuIndex, setOpenSubMenuIndex, toggleSubMenu, toggleMobileMenu, isMobileMenuOpen } = useThemeContext();
  const pathName = usePathname();
  const routePath = pathName === "/" ? pathName : pathName.replace(/^\/+/g, "");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesData = await getCourseCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  // Close drawer when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (isMobileMenuOpen && offcanvasRef.current && !offcanvasRef.current.contains(event.target)) {
        toggleMobileMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, toggleMobileMenu]);

  const checkActiveMenu = (menu) => {
    if (menu.href === "#" && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find((subMenu) => subMenu.href === routePath) ? "active" : "";
    }
    return routePath === menu.href ? "active" : "";
  };

  const hideMobileMenu = (index = null) => {
    toggleMobileMenu();
    setOpenSubMenuIndex(index);
  };

  return (
    <div ref={offcanvasRef} className={`offcanvas offcanvas-end ${isMobileMenuOpen ? "show" : ""}`} tabIndex={-1} id="offcanvasRight">
      <div className="c-backdrop" onClick={toggleMobileMenu}></div>
      <button
        type="button"
        className="offcanvas-icon"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        onClick={toggleMobileMenu}
      >
        <i className="ph ph-x" />
      </button>
      <div className="offcanvas-inner">
        <div className="offcanvas-body">
          <div className="mobile_menu_nav">
            {menus && menus.length > 0 && (
              <ul className="menu_list">
                {menus.map((menu, index) => (
                  <li
                    key={index}
                    className={`menu-item ${
                      menu.subMenus && menu.subMenus.length > 0
                        ? "menu-item-has-children"
                        : ""
                    } ${openSubMenuIndex === index ? "show" : ""}`}
                  >
                    <Link
                      href={menu.subMenus && menu.subMenus.length > 0 ? "#" : menu.link}
                      onClick={(event) =>
                        menu.subMenus && menu.subMenus.length > 0
                          ? toggleSubMenu(index, event)
                          : hideMobileMenu(null)
                      }
                      className={`${checkActiveMenu(menu)}`}
                    >
                      {(menu.subMenus || menu.megaMenu) && (
                        <span>{`(${categories?.length})`}</span>
                      )}
                      {menu.name}
                    </Link>
                    {menu.subMenus && menu.subMenus.length > 0 && (
                      <ul className={`sub-menu ${openSubMenuIndex === index ? "open" : ""}`}>
                        {categories?.map((subMenu, key) => (
                          <li key={key} className="menu-item">
                            <Link
                              href={`/courses?custom_category=${subMenu?.custom_name}`}
                              className={`${routePath === subMenu.link ? "current" : ""}`}
                              onClick={() => hideMobileMenu(index)}
                            >
                              {subMenu.custom_name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="offcanvas-about">
          <div className="offcanvas-about-inner">
            {/* <h4>About Us</h4>
            <p>
              Academe, study, and life on campus are interconnected aspects that
              shape the experience.
            </p> */}
            <div className="thumb">
              <Image className="w-100" src={CanvasAbout} alt="img" />
            </div>
          </div>
        </div>
        <div className="offcanvas-social">
          <Link href="https://www.facebook.com/jobayeracademybd">
            <Image src={MenuIconTwo} alt="img" />
          </Link>
          <Link href="https://www.linkedin.com/company/jobayeracademy">
            <Image src={MenuIconThree} alt="img" />
          </Link>
          <Link href="https://www.instagram.com/jobayeracademy">
            <Image src={MenuIconFive} alt="img" />
          </Link>
        </div>
        <div className="offcanvas-copyright">
          <p className="mb-0 text-center">Copyright © 2024 Jobayer Academy</p>
        </div>
      </div>
    </div>
  );
}
