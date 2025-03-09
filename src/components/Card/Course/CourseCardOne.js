import Image from "next/image";
import Link from "next/link";
import RightArrowRedIcon from "@/../public/assets/imgs/icon/arrow-right-red.svg";
import WishListIcon from "@/../public/assets/imgs/icon/wiselist.svg";
import StarRedIcon from "@/../public/assets/imgs/icon/star-red.svg";
import StatusIcon from "@/../public/assets/imgs/icon/status-icon.svg";
import UserGroupIcon from "@/../public/assets/imgs/icon/user-three-red.svg";
export default function CourseCardOne({ course }) {
  return (
    <div className="course__item">
<Link  href={`course-detail/${encodeURIComponent(course?.meta_title)}`}>
<div className="course__thumb-wrap">
        <Image width={500} height={500} className="course__thumb" src={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}${course?.image}`} alt="Course" />
      </div>
</Link>
      {/* Tranding system api need */}
      {/* {staticData?.categories && staticData?.categories.length > 0 && (
        <Link className="btn-trending" href={staticData?.categories[0].link}>
          <i className="ph ph-fire-simple"></i>
          {staticData?.categories[0].name}
        </Link>
      )} */}
          <Link className="btn-trending" href={''}>
          <i className="ph ph-fire-simple"></i>
          {course?.custom_sorting_badge === "Offline/Online"
    ? "Online + Offline"
    : course?.custom_sorting_badge}
        </Link>

      {course?.price && (
        <div className="course__price-wrap">
          <span className="course__price">{course?.price}</span>
        </div>
      )}

      {/* Changing by Romanch */}
      <ul className="course__meta d-flex gap-3">
        {/* <li className="course__meta-item">
          <Image src={StarRedIcon} alt="Icon" />
          <span>{course?.custom_average_rating} Rating</span>
        </li> */}
        <li className="course__meta-item">
          <Image src={StatusIcon} alt="Icon" />
          <span>{course?.custom_level}</span>
        </li>
        {/* <li className="course__meta-item">
          <Image src={UserGroupIcon} alt="Icon" />
          <span>{course?.custom_total_enrolled} Students</span>
        </li> */}
      </ul>

      {course?.title && <Link href={`course-detail/${encodeURIComponent(course?.meta_title)}`}><h3 className="course__title">{course.title}</h3></Link>}
      <Link className="btn-enroll btn-hover-shadow" href={`course-detail/${encodeURIComponent(course?.meta_title)}`}>
        ভর্তি হন
        <Image className="btn-enroll-icon" src={RightArrowRedIcon} alt="Icon" />
      </Link>
    </div>
  );
}
