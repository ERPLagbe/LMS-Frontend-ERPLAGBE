'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isFixedTop, setIsFixedTop] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const el = document.querySelector(".skillhub-header");
      if (el) {
        const navbarHeight = el.offsetHeight;
        if (window.scrollY > navbarHeight + 150) {
          setIsFixedTop(true);
        } else if (window.scrollY < navbarHeight) {
          setIsFixedTop(false);
        }
        if (window.scrollY > window.innerHeight) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Open and close mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const drawer = document.querySelector(".offcanvas");
      if (isMobileMenuOpen && drawer && !drawer.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleSubMenu = (index, event) => {
    event.preventDefault();
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        isFixedTop,
        openSubMenuIndex,
        setOpenSubMenuIndex,
        toggleSubMenu,
        toggleMobileMenu,
        showScrollTop,
        scrollToTop,
        currentPage,
        setCurrentPage,
        isMobileMenuOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
