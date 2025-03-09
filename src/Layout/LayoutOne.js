"use client";

import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import Offcanvas from "@/components/Menu/Offcanvas";
import AnimationClient from "@/components/Client/AnimationClient";
import "@/../public/assets/scss/online-course.scss";

export default function LayoutOne({
  children,
  options = { header: true, footer: true, offcanvas: true, animation: true },
}) {
  return (
    <>
      {options.header && <HeaderOne />}
      {options.offcanvas && <Offcanvas />}
      {children}
      {options.animation && <AnimationClient />}
      {options.footer && <FooterOne />}
    </>
  );
}
