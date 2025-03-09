import Image from "next/image";
import Link from "next/link";

import { instructorOne as data } from "@/data/instructor";
import InstructorCardOne from "@/components/Card/Instructor/InstructorCardOne";

export default function InstructorOne({ type = "", spacingClass = "pt-110" }) {
  return (
    <section className={`team__area${type ? `-${type}` : ""} ${spacingClass}`}>
      <div className="container">
        <div className={`team__top-wrap${type ? `-${type}` : ""}`}>
          {data.title && (
            <h2 className="section-title move-line-3d">
              {data.title.sliceOne} <span>{data.title.sliceTwo}</span>
            </h2>
          )}

        </div>
        {data.instructors && data.instructors.length > 0 && (
          <div className="row gy-4">
            {data.instructors.map((instructor, index) => (
              <div
                key={index}
                className={`col-xl-3 col-lg-3 col-md-6 ${instructor.animation.classes}`}
                data-delay={instructor.animation.delay}
                data-duration={instructor.animation.duration}
              >
                <InstructorCardOne type={type} instructor={instructor} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
