"use client";

import { Fragment, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/../public/assets/js/SplitText.min.js";
import TweenMax from "@/../public/assets/js/TweenMax.min.js";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, TweenMax);

export default function AnimationClient({ children }) {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const fadeItems = gsap.utils.toArray(".fade");

      fadeItems.forEach((fadeItem) => {
        let startPosition = "top 90%",
          tweenOptions = {
            duration: 1.5,
            delay: 0.5,
            opacity: 1,
          };

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: fadeItem,
            start: startPosition,
            markers: false,
          },
        });
        timeline.to(fadeItem, tweenOptions);
      });

      const fadeSlideItems = gsap.utils.toArray(".fade-slide");

      fadeSlideItems.forEach((fadeSlideItem) => {
        let slideAmount = 80,
          startPosition = "top 90%",
          tweenOptions = {
            duration: 1.3,
            delay: 0.5,
            opacity: 0,
            ease: "power2.out",
          };

        if (fadeSlideItem.hasAttribute("data-slide-amount")) {
          slideAmount = fadeSlideItem.getAttribute("data-slide-amount");
        }

        if (fadeSlideItem.hasAttribute("data-opacity")) {
          tweenOptions.opacity = fadeSlideItem.getAttribute("data-opacity");
        }

        if (fadeSlideItem.hasAttribute("data-ease")) {
          tweenOptions.ease = fadeSlideItem.getAttribute("data-ease");
        }

        if (fadeSlideItem.hasAttribute("data-duration")) {
          tweenOptions.duration = fadeSlideItem.getAttribute("data-duration");
        }

        if (fadeSlideItem.hasAttribute("data-delay")) {
          tweenOptions.delay = fadeSlideItem.getAttribute("data-delay");
        }

        if (fadeSlideItem.classList.contains("right")) {
          tweenOptions.x = slideAmount;
        }

        if (fadeSlideItem.classList.contains("left")) {
          tweenOptions.x = -slideAmount;
        }

        if (fadeSlideItem.classList.contains("top")) {
          tweenOptions.y = -slideAmount;
        }

        if (fadeSlideItem.classList.contains("bottom")) {
          tweenOptions.y = slideAmount;
        }

        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: fadeSlideItem,
            start: startPosition,
            markers: false,
          },
        });
        timeline.from(fadeSlideItem, tweenOptions);
      });

      const splitChars = gsap.utils.toArray(".split_chars");

      splitChars.forEach((item) => {
        let isScrollAble = true,
          tweenOptions = {
            duration: 1.3,
            delay: 0.5,
            autoAlpha: 0,
            stagger: 0.15,
            ease: "power2.out",
          },
          scrollTrigger = {
            trigger: item,
            start: "top 90%",
            markers: false,
          };

        if (item.hasAttribute("data-duration")) {
          tweenOptions.duration = item.getAttribute("data-duration");
        }

        if (item.hasAttribute("data-delay")) {
          tweenOptions.delay = item.getAttribute("data-delay");
        }

        if (item.hasAttribute("data-ease")) {
          tweenOptions.ease = item.getAttribute("data-ease");
        }

        if (item.hasAttribute("data-stagger")) {
          tweenOptions.stagger = item.getAttribute("data-stagger");
        }

        if (item.hasAttribute("data-translate-x")) {
          tweenOptions.x = item.getAttribute("data-translate-x");
        }

        if (item.hasAttribute("data-translate-y")) {
          tweenOptions.y = item.getAttribute("data-translate-y");
        }

        if (
          !item.hasAttribute("data-translate-x") &&
          !item.hasAttribute("data-translate-x")
        ) {
          tweenOptions.x = 100;
        }

        if (item.hasAttribute("data-scroll-trigger")) {
          isScrollAble = item.getAttribute("data-scroll-trigger");
        }

        if (item.hasAttribute("data-trigger-start")) {
          scrollTrigger.start = item.getAttribute("data-trigger-start");
        }

        if (isScrollAble) {
          tweenOptions.scrollTrigger = scrollTrigger;
        }

        let splittedText = new SplitText(item, {
          type: "chars, words",
        });

        gsap.from(splittedText.chars, tweenOptions);
      });

      const moveLine3DItems = gsap.utils.toArray(".move-line-3d");

      moveLine3DItems.forEach((item) => {
        let startPosition = "top 90%",
          tweenOptions = {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          };

        if (item.hasAttribute("data-start")) {
          startPosition = item.getAttribute("data-start");
        }

        if (item.hasAttribute("data-duration")) {
          tweenOptions.duration = item.getAttribute("data-duration");
        }

        if (item.hasAttribute("data-delay")) {
          tweenOptions.delay = item.getAttribute("data-delay");
        }

        if (item.hasAttribute("data-opacity")) {
          tweenOptions.opacity = item.getAttribute("data-opacity");
        }

        if (item.hasAttribute("data-stagger")) {
          tweenOptions.stagger = item.getAttribute("data-stagger");
        }

        if (item.hasAttribute("data-rotate")) {
          tweenOptions.rotationX = item.getAttribute("data-rotate");
        }

        if (item.hasAttribute("data-origin")) {
          tweenOptions.transformOrigin = item.getAttribute("data-origin");
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: startPosition,
            duration: tweenOptions.duration,
            scrub: false,
            markers: false,
          },
        });

        const splitedText = new SplitText(item, {
          type: "lines",
        }).split({
          type: "lines",
        });
        gsap.set(item, {
          perspective: 400,
        });
        timeline.from(splitedText.lines, tweenOptions);
      });
    });

    return () => ctx.revert();
  }, []);
  return <div ref={container}>{children}</div>;
}

const moveOnMouse = function move(selector) {
  function touches(e) {
    var x = e.touches ? e.touches[0].clientX : e.clientX,
      y = e.touches ? e.touches[0].clientY : e.clientY;
    var w = window.innerWidth / 2.5;
    var h = window.innerHeight / 2.5;

    var l = -(x - w) / (w / 1) - 1;
    var t = -(y - h) / (h / 1) - 1;

    TweenMax.to(selector, 1, {
      top: t + "%",
      left: l + "%",
    });
  }

  window.addEventListener("mousemove", touches);
  window.addEventListener("touchstart", touches);
  window.addEventListener("touchmove", touches);
};

export { moveOnMouse };
