'use client';
import BlogSidebarOne from "@/components/BlogSidebar/BlogSidebarOne";

import { blogDetailOne as blog } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import CommentCardOne from "../Card/Comment/CommentCardOne";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlogBySlug } from "@/services/blog";

export default function BlogDetailOne() {
  const params = useParams();

  const [blogData, setBlogData] = useState(); // State to store fetched blogs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch all blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await getBlogBySlug(params.slug);
        console.log(blogData);
        setBlogData(blogData); 

      } catch (err) {
        setError("Failed to fetch blogs");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [params]);

  return (
    <div className="postDetails__left">
      <div className="postDetails__left-inner">
        {/* Article  */}
        <div className="postDetails__item">
          {blogData?.thumbnail_image && (
            <Image width={800} height={800} className="postDetails__thumb" src={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}${blogData?.thumbnail_image}`} alt="Post" />
          )}
          {/* {blog.meta && (
            <ul className="postDetails__meta d-flex gap-3 items-center">
            {blog.meta.map((metaItem, index) => (
              <li key={index} className="postDetails__meta-list">
                  {metaItem.icon && <Image src={metaItem.icon} alt="Icon" />}
                  <Link href={metaItem.link ?? "#"}>{metaItem.name}</Link>
                  </li>
                  ))}
                  </ul>
                  )} */}
        </div>
        {/* Post content  */}
        <div className="postDetails__content-wrap">
                  {blogData?.title && (
                    <p className="postDetails__tag-title">{blogData?.title}</p>
                  )}
          
        <div className=" courseDetails__overview-content" dangerouslySetInnerHTML={{ __html: blogData?.description }}></div>
          {/* Post tag  */}
          <div className="postDetails__tag-wrap">
            <div className="d-flex align-items-center gap-2">
              {blogData?.tags && (
                <ul className="postDetails__tags">
                  {blogData?.tags.map((item, index) => (
                    <li key={index}>
                      <Link className="postDetails__tag-link" href={`/blogs?${item}`}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* <div className="d-flex align-items-center gap-2">
              {blog.share.title && (
                <p className="postDetails__tag-title">{blog.share.title}</p>
              )}
              {blog.share.items && blog.share.items.length > 0 && (
                <ul className="postDetails__share-list">
                  {blog.share.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        className="postDetails__share-link"
                        href={item.link}
                      >
                        <Image
                          className="share-icon"
                          src={item.icon}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div> */}
          </div>
        </div>
      </div>
      {/* Comment section*/}
      {/* <CommentCardOne comment={blog.comment} /> */}
    </div>
  );
}
