
// "use client";

// import { courseOne as data } from "@/data/course";
// import imagesLoaded from "imagesloaded";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import CourseCardOne from "@/components/Card/Course/CourseCardOne";
// import { getAllCourses } from "@/services/course";
// import { useSearchParams } from "next/navigation";
// import Pagination from "../Pagination/Pagination";

// export default function CourseOne({ isHome = false }) {
//   const isotope = useRef();
//   const [filterType, setFilterType] = useState("*");
//   const [courses, setCourses] = useState(); // State to store fetched courses
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const [page, setPage] = useState(1); // Current page
//   const [totalPages, setTotalPages] = useState(1);
//   const searchParams = useSearchParams()
//   // Fetch all courses when the component mounts
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const query = { ...Object.fromEntries(searchParams.entries()), page };
//         const courseData = await getAllCourses(query);
//         setCourses(courseData?.courses);
//         setTotalPages(courseData?.total_pages); 

//       } catch (err) {
//         setError("Failed to fetch courses");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, [page, searchParams]); 
//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   useEffect(() => {
//     let Isotope = require("isotope-layout");
//     isotope.current = new Isotope(".course__wrapper", {
//       itemSelector: ".course_item_wrapper",
//       percentPosition: true,
//       masonry: {
//         columnWidth: 0,
//       },
//       transitionDuration: "0.5s",
//     });

//     // Initialize imagesLoaded
//     imagesLoaded(".course__wrapper").on("progress", () => {
//       isotope.current.layout();
//     });
//   }, []);
//   // handling filter key change
//   useEffect(() => {
//     if (courses) {
//       filterType === "*"
//         ? setCourses(courses)
//         : setCourses(courses.filter((course) => course.custom_sorting_badge === filterType));
//     }
//   }, [courses,filterType]);

//   const handleFilterTypeChange = (key) => () => setFilterType(key);

//   // if(loading){
//   //   return <h1>Loading....</h1>
//   // }

//   return (
//     <section className="course__area pt-110 pb-130">
//       <div className="container">
//         <div className="course__top-wrap">
//           {data.title && (
//             <h2 className="section-title move-line-3d">
//               {data.title.sliceOne} <span>{data.title.sliceTwo}</span> {data.title.sliceThree}
//             </h2>
//           )}
//           {/* <!-- Tab button   --> */}
//           {data.filterOptions && data.filterOptions.length > 0 && (
//             <div className="course__tab-wrap fade-slide right">
//               {data.filterOptions.map((option, index) => (
//                 <button
//                   key={index}
//                   className={`course__btn ${
//                     filterType == option.target ? "active" : ""
//                   }`}
//                   data-filter={`.${option.target}`}
//                   onClick={handleFilterTypeChange(option.target)}
//                 >
//                   {option.name}
//                 </button>
//               ))}
//             </div>
//           )}
//           {/* <!-- Tab button   --> */}
//         </div>
//      {courses &&   <div className="row course__wrapper fade-slide bottom">
//           {courses && courses?.map((course, index) => (
//             <div
//               key={index}
//               // className={`col-xl-4 col-lg-4 col-md-6 course_item_wrapper ${course.filterClass}`}
//               className={`col-xl-4 col-lg-4 col-md-6 course_item_wrapper `}
//             >
//               <CourseCardOne course={course}/>
//             </div>
//           ))}
//         </div>}
// {isHome === false && (
  
//   <div className="course__btm">
//   <Pagination
//       currentPage={page}
//       totalPages={totalPages}
//       onPageChange={handlePageChange}
//     />
//   </div>
// )}
//       </div>
//     </section>
//   );
// }
"use client";

import { courseOne as data } from "@/data/course";
import imagesLoaded from "imagesloaded";
import { useEffect, useRef, useState } from "react";
import CourseCardOne from "@/components/Card/Course/CourseCardOne";
import { getAllCourses } from "@/services/course";
import { useSearchParams } from "next/navigation";
import Pagination from "../Pagination/Pagination";

export default function CourseOne({ isHome = false }) {
  const isotope = useRef();
  const [filterType, setFilterType] = useState("*");
  const [courses, setCourses] = useState([]); // Original fetched courses
  const [filteredCourses, setFilteredCourses] = useState([]); // Filtered courses
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1);
  const searchParams = useSearchParams();

  // Fetch all courses when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const query = { ...Object.fromEntries(searchParams.entries()), page };
        const courseData = await getAllCourses(query);
        setCourses(courseData?.courses || []);
        setFilteredCourses(courseData?.courses || []); // Set filtered courses initially
        setTotalPages(courseData?.total_pages || 1);
      } catch (err) {
        setError("Failed to fetch courses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [page, searchParams]);

  // Handle filter changes
  useEffect(() => {
    if (filterType === "*") {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(
        courses.filter((course) => course.custom_sorting_badge === filterType)
      );
    }
  }, [filterType, courses]);

  const handlePageChange = (newPage) => setPage(newPage);

  const handleFilterTypeChange = (key) => () => setFilterType(key);

  // Initialize Isotope layout and imagesLoaded
  useEffect(() => {
    let Isotope = require("isotope-layout");
    isotope.current = new Isotope(".course__wrapper", {
      itemSelector: ".course_item_wrapper",
      percentPosition: true,
      masonry: {
        columnWidth: 0,
      },
      transitionDuration: "0.5s",
    });

    imagesLoaded(".course__wrapper").on("progress", () => {
      isotope.current.layout();
    });
  }, []);

  return (
    <section className="course__area pt-110 pb-130">
      <div className="container">
        <div className="course__top-wrap">
          {data.title && (
            <h2 className="section-title move-line-3d">
              {data.title.sliceOne} <span>{data.title.sliceTwo}</span>{" "}
              {data.title.sliceThree}
            </h2>
          )}
          {data.filterOptions && data.filterOptions.length > 0 && (
            <div className="course__tab-wrap fade-slide right">
              {data.filterOptions.map((option, index) => (
                <button
                  key={index}
                  className={`course__btn ${
                    filterType === option.target ? "active" : ""
                  }`}
                  onClick={handleFilterTypeChange(option.target)}
                >
                  {option.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {loading && <h1>Loading...</h1>}

        {!loading && filteredCourses && (
          <div className="row course__wrapper fade-slide bottom">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-6 course_item_wrapper"
              >
                <CourseCardOne course={course} />
              </div>
            ))}
          </div>
        )}

        {isHome === false && !loading && (
          <div className="course__btm">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
}
