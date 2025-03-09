'use client';
import { getCourseCategories } from "@/services/course";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MegaMenuOne() {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="row g-0">
      <div className="col-lg-12 menu-right-side-inner">
        {/* <!-- mega menu right categories --> */}

          <div className="tab-content" id="nav-tabContent">
            {categories?.map((category, index) => (
              <div
                key={index}
                className={`tab-pane fade show active`}
                id={`nav-tab-${index + 1}`}
                role="tabpanel"
                aria-labelledby={`nav-tab-${index + 1}-tab`}
              >
                <div className="demo-list-wrap">
                  <div className="single-demo-list text-center">
                    <div className="thumb">
                      {/* Use category thumbnail image if available, else show placeholder */}
                      <Link href={`/courses?custom_category=${category?.custom_name}`}>
                        {category?.custom_thumbnail_image && (
                          <Image
                          width={500}
                          height={500}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}${category?.custom_thumbnail_image}`}
                            alt={category?.custom_name}
                          />
                        ) }
                      </Link>
                    </div>
                    <h4>
                      {/* Link to category courses or relevant page */}
                      <Link href="#">
                        {category?.custom_name} ({category?.total_courses} )
                      </Link>
                    </h4>
                    {/* Optionally show the total number of courses */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
      
      </div>
    </div>
  );
}
