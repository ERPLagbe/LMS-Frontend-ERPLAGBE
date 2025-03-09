"use client";
import Image from "next/image";
import Link from "next/link";

import Instructor from "@/../public/assets/imgs/team/instructor.webp";
import StarRedIcon from "@/../public/assets/imgs/icon/star-red.svg";
import StatusIcon from "@/../public/assets/imgs/icon/status-icon.svg";
import CourseVideo from "@/../public/assets/imgs/thumb/course-video.webp";
import PlayBtnIconWhite from "@/../public/assets/imgs/icon/play-white.webp";
import UserStarIcon from "@/../public/assets/imgs/icon/user-star.webp";
import UserTwoIcon from "@/../public/assets/imgs/icon/user-two.webp";
import TimeCircleIcon from "@/../public/assets/imgs/icon/time-circel.webp";
import ChartIcon from "@/../public/assets/imgs/icon/chart-icon.webp";
import GlobalIcon from "@/../public/assets/imgs/icon/global.webp";
import CertificateIcon from "@/../public/assets/imgs/icon/cirtificate.webp";
import CheckmarkIcon from "@/../public/assets/imgs/icon/checkmark-icon.webp";
import LessonIcon from "@/../public/assets/imgs/icon/lessons.webp";
import FileIcon from "@/../public/assets/imgs/icon/file.webp";
import QuizIcon from "@/../public/assets/imgs/icon/quiz.webp";
import ReviewerImage from "@/../public/assets/imgs/team/review-avatar.webp";
import ReviewerStarIcon from "@/../public/assets/imgs/icon/instr-review.webp";
import YouTubeIconSmall from "@/../public/assets/imgs/icon/youtube-icon-sm.webp";
import ReviewIconBold from "@/../public/assets/imgs/icon/review-bold.webp";
import StarIcon from "@/../public/assets/imgs/icon/single-star.webp";
import CommentorOne from "@/../public/assets/imgs/team/comment-1.webp";
import CommentorTwo from "@/../public/assets/imgs/team/comment-2.webp";
import CommentorThree from "@/../public/assets/imgs/team/comment-3.webp";
import ShareIcon from "@/../public/assets/imgs/icon/share-icon.webp";
import { getCourseBySlug } from "@/services/course";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CourseDetailOne() {
  const params = useParams();

  const [course, setCourse] = useState(); // State to store fetched courses
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch all courses when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseData = await getCourseBySlug(params.slug);
        setCourse(courseData);
      } catch (err) {
        setError("Failed to fetch courses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [params]);

  return (
    <div className="courseDetails__area pt-130 pb-130">
      <div className="container">
        <h2 className="courseDetails__title">{course?.title}</h2>
        <ul className="courseDetails__meta-list d-flex align-items-center gap-3">
          {/* <li className="courseDetails__meta-item">
            <Image src={Instructor} alt="Instructors" />
            <p>Jackie Rippin</p>
          </li> */}
          {/* <li className="courseDetails__meta-item">
            <Image src={StarRedIcon} alt="Icon" />
            <p>{course?.custom_average_rating} রেটিং</p>
          </li> */}
          <li className="courseDetails__meta-item">
            <Image src={StatusIcon} alt="Icon" />
            <p>{course?.custom_level}</p>
          </li>
        </ul>
        <div className="courseDetails__inner">
          <div className="courseDetails__left">
            <div className="courseDetails__video-wrap">
              <Image
                className="courseDetails__video-thumb"
                width={1000}
                height={1000}
                src={
                  course && process.env.NEXT_PUBLIC_IMAGE_ROOT + course?.image
                }
                alt="Course"
              />
              {/* <Link
                href="../assets/media/videos/features-video.mp4"
                className="courseDetails__video-icon popup_video"
              >
                <Image src={PlayBtnIconWhite} alt="Icon" />
              </Link> */}
            </div>
            <div className="price-show-tab">
              <div className="courseDetails__fixed-bar">
                <div style={{display:"flex"}}>
              <p className="courseDetails__price">
                      ৳ {course?.amount}
                    </p>
                    {course?.discount_price > 0 && ( <p className="courseDetails__discount">
                      ৳ <span>{course?.course_price}</span>
                    </p>)}
             </div>
                    <Link className="btn-buyNow btn-hover-secondary" href={`${process.env.NEXT_PUBLIC_ROOT}/lms/billing/course/${course?.meta_title}`}>
                      ভর্তি হন
                    </Link>
              </div>
              <div className="courseDetails__price-wrap mt-4">
                <div className="courseDetails__price-inner d-flex align-items-center justify-content-between">
                  <div>
                    <p className="courseDetails__price">
                      ৳ {course?.amount}
                    </p>
                    
                    {course?.discount_price > 0 && ( <p className="courseDetails__discount">
                      ৳ <span>{course?.course_price}</span>
                    </p>)}
                    {/* <p className="courseDetails__discount">
                      90% Disc.&nbsp;Original price <span>$99.99</span>
                    </p> */}
                    <Link className="btn-buyNow btn-hover-secondary" href={`${process.env.NEXT_PUBLIC_ROOT}/lms/billing/course/${course?.meta_title}`}>
                      ভর্তি হন
                    </Link>
                  </div>
                  <div>
                    <ul className="courseDetails__price-list">
                      {/* <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={UserStarIcon} alt="Icon" />
                          কোর্স রেটিং :
                        </span>
                        <span className="courseDetails__duration">
                          {(course?.custom_average_rating * 100) / 5}% ইতিবাচক
                        </span>
                      </li> */}
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={UserTwoIcon} alt="Icon" />
                          শিক্ষার্থী :
                        </span>
                        <span className="courseDetails__duration">
                          {course?.custom_total_enrolled}
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={TimeCircleIcon} alt="Icon" />
                          সময়কাল :
                        </span>
                        <span className="courseDetails__duration">
                          {course?.custom_course_duration}
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={ChartIcon} alt="Icon" />
                          স্তর :
                        </span>
                        <span className="courseDetails__duration">
                          {course?.custom_level}
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={GlobalIcon} alt="Icon" />
                          ভাষা :
                        </span>
                        <span className="courseDetails__duration">বাংলা</span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={CertificateIcon} alt="Icon" />
                          সার্টিফিকেট :
                        </span>
                        <span className="courseDetails__duration">
                          {course?.enable_certification === 0 ? "না" : "হ্যাঁ"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <ul className="courseDetails__tab-wrap">
              <li>
                <Link className="courseDetails__tab-list" href="#course">
                  কোর্স বিস্তারিত
                </Link>
              </li>
              <li>
                <Link className="courseDetails__tab-list" href="#curriculum">
                  পাঠ্যসুচি
                </Link>
              </li>
              {/* <li>
                <Link className="courseDetails__tab-list" href="#instructor">
                  শিক্ষক
                </Link>
              </li> */}
              {/* <li>
                <Link className="courseDetails__tab-list" href="#reeviews">
                কোর্স রেটিং
                </Link>
              </li>
              <li>
                <Link className="courseDetails__tab-list" href="#comment">
                  মন্তব্য
                </Link>
              </li> */}
            </ul>
            <div className="course" id="course">
              {/* <h3 className="courseDetails__overview-title">বিস্তারিত</h3> */}
              {course?.description && (
                <div
                  className="courseDetails__overview-content"
                  dangerouslySetInnerHTML={{
                    __html: course?.description,
                  }}
                />
              )}
              {/* <h3 className="courseDetails__overview-title">
                এই কোর্সে, আপনি শিখবেন
              </h3>
              <ul className="courseDetails__overview-list">
                {course?.custom_what_you_will_learn?.map((item) => {
                  return (
                    <li key={item} className="courseDetails__overview-item">
                      <Image src={CheckmarkIcon} alt="Icon" />
                      {item}
                    </li>
                  );
                })}
              </ul> */}
            </div>
            <div className="curriculum" id="curriculum">
              <p className="courseDetails__overview-title">
                কোর্সের বিষয়বস্তু
              </p>
              <ul className="courseDetails__curriculum-list">
                <li className="courseDetails__curriculum-listItem">
                  <span className="courseDetails__curriculum-icon">
                    <Image src={LessonIcon} alt="Icon" />
                  </span>
                  <span className="courseDetails__curriculum-text">
                    {/* ২০টি পাঠ (৩ঘন্টা ৪৩ মিনিট)  */}
                    {course?.custom_course_duration}
                  </span>
                </li>
                <li className="courseDetails__curriculum-listItem">
                  <span className="courseDetails__curriculum-icon">
                    <Image src={FileIcon} alt="Icon" />
                  </span>
                  <span className="courseDetails__curriculum-text">
                    {course?.custom_total_videos} ভিডিও
                  </span>
                </li>
                <li className="courseDetails__curriculum-listItem">
                  <span className="courseDetails__curriculum-icon">
                    <Image src={QuizIcon} alt="Icon" />
                  </span>
                  <span className="courseDetails__curriculum-text">
                    {course?.custom_total_quizes} কুইজ 
                  </span>
                </li>
              </ul>
            </div>
            <div className="faq">
              {course?.chapters?.map((chapter) => {
                return (
                  <>
                    <p className="courseDetails__faq-title">{chapter?.title}</p>
                    {chapter?.lessons.map((lesson) => (
                      <Link  key={lesson?.title} href={`https://portal.jobayeracademy.com/lms/courses/${course?.id}`}>
                        <div className="accordion_item">
                        <button
                          className="accordion_title course-lock popup_video"
                          data-mfp-src="../assets/media/videos/features-video.mp4"
                        >
                          {lesson?.title}{" "}
                          <span className="accordion_durations">
                            {lesson?.custom_duration}
                          </span>
                        </button>
                      </div>
                      </Link>
                    ))}
                  </>
                );
              })}
            </div>
            {/* instructor */}
            {/* <div className="courseDetails__instractor-wrap" id="instructor">
              <div className="courseDetails__instractor-inner">
                <div className="courseDetails__instractor-left">
                  <Image src={ReviewerImage} alt="Avatar" />
                </div>
                <div className="courseDetails__instractor-right">
                  <h4 className="courseDetails__instractor-name">
                    Bessie Wiegand
                  </h4>
                  <p className="courseDetails__instractor-designation">
                    UI/UX Designer Expert
                  </p>
                  <ul className="courseDetails__instractor-meta d-flex align-items-center gap-3">
                    <li className="courseDetails__instractor-item">
                      <Image src={ReviewerStarIcon} alt="Icon" />
                      <span>(50 Reviews)</span>
                    </li>
                    <li className="courseDetails__instractor-item">
                      <Image src={UserTwoIcon} alt="Icon" />
                      2,480 Student
                    </li>
                    <li className="courseDetails__instractor-item">
                      <Image src={YouTubeIconSmall} alt="Icon" />
                      05 Course
                    </li>
                  </ul>
                </div>
              </div>
              <p className="courseDetails__instractor-content">
                Quis vel eros donec ac odio. Nunc mattis enim ut tellus
                elementum sagittis vitae. Lacus viverra vitae congue eu
                consequat ac felis. Tellus at urna condimentum mattis
                pellentesque.
              </p>
            </div> */}
            {/* course rating */}
            {/* <div className="courseDetails__review-wrap" id="reeviews">
              <div className="courseDetails__rating-inner">
                <div className="courseDetails__rating-left">
                  <span className="courseDetails__rating-title">{course?.custom_average_rating}</span>
                  <Image src={ReviewIconBold} alt="Icon" />
                  <p className="courseDetails__rating-count">{course?.total_reviews} রিভিও</p>
                </div>
                <div className="courseDetails__rating-right">
                  <ul className="courseDetails__rating-list">
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        80%
                      </span>
                      <span>
                        <Image src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" style={{
                        width: `${course?.review_percentages?.above_0_8}%`
                      }}/>
                    </li>
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        60%
                      </span>
                      <span>
                        <Image src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" style={{
                        width: `${course?.review_percentages?.above_0_6}%`
                      }}/>
                    </li>
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        40%
                      </span>
                      <span>
                        <Image src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" style={{
                        width: `${course?.review_percentages?.above_0_4}%`
                      }}/>
                    </li>
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        30%
                      </span>
                      <span>
                        <Image src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" style={{
                        width: `${course?.review_percentages?.above_0_3}%`
                      }}/>
                    </li>
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        20%
                      </span>
                      <span>
                        <Image src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" style={{
                        width: `${course?.review_percentages?.above_0_2}%`
                      }}/>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            
            {/* course comments */}
            {/* <div className="courseDetails__comment" id="comment">
              <p className="courseDetails__comment-title">রিভিউ</p>

              {course?.reviews.map((review) => (
                <div key={review?.id} className="courseDetails__comment-item">
                  <div className="courseDetails__left">
                    <Image width={70} height={70} src={ review?.owner_profile_picture !== null ? `${process.env.NEXT_PUBLIC_IMAGE_ROOT}${review?.image}` :CommentorTwo  } alt="Review" />
                  </div>
                  <div className="courseDetails__right">
                    <p className="courseDetails__comment-date">
                      {review?.creation}
                    </p>
                    <h5 className="courseDetails__comment-name">
                      {review?.owner}
                    </h5>
                    <Image src={ReviewIconBold} alt="Icon" />
                    <p className="courseDetails__comment-text">
                      {review?.review}
                    </p>
         
                  </div>
                </div>
              ))}

              
            </div> */}
          </div>
            <div className="md-none">
          <div className="courseDetails__right" style={{ height: "100%" }}>
              <div className="courseDetails__price-wrap mt-4">
                <div className="courseDetails__price-inner">
                  <div>
                    <p className="courseDetails__price">
                      ৳ {course?.amount}
                    </p>

                    {course?.discount_price > 0 && ( <p className="courseDetails__discount">
                      ৳ <span>{course?.course_price}</span>
                    </p>)}
                   
                    <Link className="btn-buyNow btn-hover-secondary" href={`${process.env.NEXT_PUBLIC_ROOT}/lms/billing/course/${course?.meta_title}`}>
                      ভর্তি হন
                    </Link>
                  </div>
                  <div>
                    <ul className="courseDetails__price-list">
                      {/* <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={UserStarIcon} alt="Icon" />
                          কোর্স রেটিং :
                        </span>
                        <span className="courseDetails__duration">
                          {(course?.custom_average_rating * 100) / 5}% ইতিবাচক
                        </span>
                      </li> */}
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={UserTwoIcon} alt="Icon" />
                          শিক্ষার্থী :
                        </span>
                        <span className="courseDetails__duration">
                          {course?.custom_total_enrolled}
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={TimeCircleIcon} alt="Icon" />
                          সময়কাল :
                        </span>
                        <span className="courseDetails__duration">
                          {course?.custom_course_duration}
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={ChartIcon} alt="Icon" />
                          স্তর :
                        </span>
                        <span className="courseDetails__duration">
                          {course?.custom_level}
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={GlobalIcon} alt="Icon" />
                          ভাষা :
                        </span>
                        <span className="courseDetails__duration">বাংলা</span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <Image src={CertificateIcon} alt="Icon" />
                          সার্টিফিকেট :
                        </span>
                        <span className="courseDetails__duration">
                          {course?.enable_certification === 0 ? "না" : "হ্যাঁ"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
