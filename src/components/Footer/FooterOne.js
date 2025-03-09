"use client";

import Link from "next/link";
import Image from "next/image";

import { footerOne as footer } from "@/data/footer";
import socials from "@/data/social";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { getCourseCategories } from "@/services/course";

export default function FooterOne() {


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesData = await getCourseCategories()
      
        setCategories(categoriesData); // Assuming the categories are inside the `message` key
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);


  return (
    <footer className="footer__area">
      <div className="footer__socail-wrap">
        <div className="footer__social-inner">
          <div className="footer__logo">
            <Link href="/">
            <Image width={138} height={162} src={footer.logo} alt="Logo" />
            </Link>
          </div>
  
          {/* <!-- Footer social  -->  */}
          {socials && socials.length > 0 && (
            <ul className="footer__socail">
              {socials.map((social, index) => (
                <li key={index} className="footer__social-item">
                  <Link className="footer__social-link" target="_blank" href={social.link}>
                    <Image src={social.icon} alt="Icon" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {/* <!-- Footer social  --> */}
        </div>
      </div>
      <div className="footer__btm">
        {/* <!-- Footer widget  --> */}

        <div className="footer__widget">
          <h3 className="footer__widget-title">
          আমাদের ইভেন্ট কিংবা নিউজলেটার পেতে আপনার ইমেইল 
            <span>প্রদান করুন</span>
          </h3>
          <form action="/" className="footer__form">
            <input
              className="footer__input"
              type="text"
              placeholder="Write your mail here..."
              name="search"
            />
            <button className="btn-submit" type="submit">
              <PaperPlaneTilt size={18} />
            </button>
          </form>
        </div>

        {/* <!-- Footer widget  --> */}

        {/* <!-- Dynamically fetched categories widget  --> */}
        {categories && categories.length > 0 && (
          <div className="footer__widget">
            <h3 className="footer__widget-title">কোর্স ক্যাটাগরি</h3>
            <ul className="footer__menu">
              {categories.map((category, index) => (
                <li key={index} className="footer__menu-item">
                  <Link href={`/courses?custom_category=${category?.custom_name}`}>
                    {category?.custom_name} ({category?.total_courses})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {footer.widgets &&
          footer.widgets.map((widget, index) => (
            <div key={index} className="footer__widget">
              {widget.title && (
                <h3 className="footer__widget-title">{widget.title}</h3>
              )}
              {widget.menus && widget.menus.length > 0 && (
                <ul className="footer__menu">
                  {widget.menus.map((menu, idx) => (
                    <li
                      key={idx}
                      className={`${
                        menu.icon ? "footer__info-item" : "footer__menu-item"
                      }`}
                    >
                      {menu.icon && (
                        <span className="footer__info-icon">
                          <Image src={menu.icon} alt="Icon" />
                        </span>
                      )}
                      {menu.link ? (
                        <Link href={menu.link}>{menu.name}</Link>
                      ) : (
                        menu.name
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
      <div className="footer__copyright text-center">
        <p className="footer__copyright-text">
          {footer.copyrightText}
          <Link href={footer.copyrightLink}>{footer.companyName}</Link>
        </p>
      </div>
    </footer>
  );
}
