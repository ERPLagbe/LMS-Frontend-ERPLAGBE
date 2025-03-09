import { courseTwo as data } from "@/data/course";
import Link from "next/link";
import CourseCardTwo from "@/components/Card/Course/CourseCardTwo";

export default function CourseTwo() {
  return (
    <section className="course__area-4 pt-130 pb-140">
      <div className="container">
        <div className="course__titleWrap-4 pb-50 d-flex align-items-center justify-content-md-between">
          {data.title && (
            <h2 className="section-title-4 move-line-3d">{data.title}</h2>
          )}
          <div className="btn-wrap fade-slide right show-lg">
            {data.btn.link && (
              <Link
                href={data.btn.link}
                className="btn-primary-3 text-white btn-hover-bubble"
              >
                {data.btn.text}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            )}
          </div>
        </div>
        {data.courses && data.courses.length > 0 && (
          <div className="course__wrapper-4">
            {data.courses.map((course, index) => (
              <CourseCardTwo key={index} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
