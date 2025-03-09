import Image from "next/image";
import Link from "next/link";
import artRedIcon from "@/../public/assets/imgs/icon/art-red.svg";
import timeSquareIcon from "@/../public/assets/imgs/icon/time-square.svg";
import arrowRightDark from "@/../public/assets/imgs/icon/arrow-right-dark.svg";
import { formatDateToBangla } from "@/utils/formatDateToBangla";

export default function BlogCardOne({ blog, style = 1, className = "" }) {

  return (
    <Link href={`/blog/${encodeURIComponent(blog?.meta_title)}`}>
    
    <article className={`blog__item style-${style} ${className}`}>
      <Image
        width={500}
        height={500}
        className="blog__thumb"
        src={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}${blog?.custom_image}`}
        alt="Post"
      />
      <ul className="blog__meta d-flex gap-2 items-center">
        <li className="blog__meta-list">
          {artRedIcon && <Image src={artRedIcon} alt="Icon" />}
          {blog?.category && (
            <Link href={`blogs?${encodeURIComponent(blog?.category)}`}>{blog?.category}</Link>
          )}
        </li>
        <li className="blog__meta-list">
          {timeSquareIcon && <Image src={timeSquareIcon} alt="Icon" />}
          {blog?.creation && formatDateToBangla(blog?.creation)}
        </li>
      </ul>
      {blog?.title && (
        <Link href={`/blog/${encodeURIComponent(blog?.meta_title)}`}>
          <h3 className="blog__title">{blog.title}</h3>
        </Link>
      )}
      {blog?.title && (
        <Link className="btn-readmore" href={`/blog/${encodeURIComponent(blog?.meta_title)}`}>
          আরো দেখুন
          {arrowRightDark && (
            <Image className="btn-arrow-icon" src={arrowRightDark} alt="Icon" />
          )}
        </Link>
      )}
    </article>
    </Link>
  );
}
