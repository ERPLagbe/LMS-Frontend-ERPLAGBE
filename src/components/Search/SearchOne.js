"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SearchIcon from "@/../public/assets/imgs/icon/search-icon.svg";

export default function SearchOne({ textClass = "" }) {
  const [showBox, setShowBox] = useState(false);

  const toggleSearchBox = (e) => {
    e.stopPropagation();
    setShowBox(!showBox);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    const closeSearch = () => {
      setShowBox(false);
    };

    window.addEventListener("click", closeSearch);

    return () => {
      window.removeEventListener("click", closeSearch);
    };
  }, []);

  return (
    <>
      <div className="search-wrap" onClick={toggleSearchBox}>
        {showBox ? (
          <span id="search_close" className={textClass}>
            <i className="ph ph-x"></i>
          </span>
        ) : (
          <span id="search_icon">
            <Image src={SearchIcon} alt="Icon" />
          </span>
        )}
      </div>
      <div
        className={`search-form ${showBox ? "open-search" : ""}`}
        onClick={stopPropagation}
      >
        <form action="#">
          <input
            className="search-input"
            type="text"
            name="s"
            id="s"
            placeholder="Search.."
          />
        </form>
      </div>
    </>
  );
}
