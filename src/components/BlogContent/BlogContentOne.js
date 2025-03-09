
import { blogContentOne as data } from "@/data/blog";
import BlogContentCardOne from "@/components/Card/Blog/BlogContentCardOne";
import Image from "next/image";

import ArrowRightDark from "@/../public/assets/imgs/icon/arrow-right-dark.svg";
import BlogCardOne from "@/components/Card/Blog/BlogCardOne";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";


export default function BlogContentOne({page, totalPages, onPageChange,blogs, column = 1, imageClass = "" }) {
 

  const items = column == 1 ? 4 : column * 2;
  return (
    <div className="row post__left">
      {blogs?.map((blog, index) => (
        <div key={index} className={`col-xl-6 col-lg-6 col-md-6 fade-slide bottom`}>
          { (
          
                <BlogCardOne blog={blog}  className="mb-4" />
            
          )}
        </div>
      ))}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={onPageChange} />

      {/* <ul className="pagination mt-3">
        <li>
          <Link className="pagination-link" href="#">
            01
          </Link>
        </li>
        <li>
          <Link className="pagination-link active" href="#">
            02
          </Link>
        </li>
        <li>
          <Link className="pagination-link" href="#">
            03
          </Link>
        </li>
        <li>
          <Link className="pagination-link" href="#">
            04
          </Link>
        </li>
        <li>
          <Link className="pagination-link" href="#">
            <Image
              className="pagination-icon"
              src={ArrowRightDark}
              alt="Icon"
            />
          </Link>
        </li>
      </ul> */}
    </div>
  );
}
