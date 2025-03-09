"use client";
import { blogSidebarOne as sidebar } from "@/data/blog";
import { getAllCategories, getBlogTags } from "@/services/blog";
import { formatDateToBangla } from "@/utils/formatDateToBangla";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SidebarOneDateIcon from "@/../public/assets/imgs/icon/date-red.webp";


export default function BlogSidebarOne({latestBLog}) {
  const [categories, setCategories] = useState([]); // State to store fetched categories
  const [tags, setTags] = useState([]); // State to store fetched tags
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch all Categories when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getAllCategories();
        const tagsData = await getBlogTags();

        setCategories(categoriesData?.categories || []);
        setTags(tagsData?.tags || []);
      } catch (err) {
        setError("Failed to fetch categories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="post__right">
      <div className="post__sidebar">
        {/* <aside className="post__blcok-item">
  
          {sidebar.search && (
            <span className="post__sidebar-title">সার্চ</span>
          )}
          <form action="/" className="sidebar-search">
            <input
              className="sidebar-input"
              type="text"
              placeholder="Search here...."
              name="search"
            />
            {sidebar.search.icon && (
              <button className="btn-sidebar" type="submit">
                <Image src={sidebar.search.icon} alt="Icon" />
              </button>
            )}
          </form>
        </aside> */}

        {/* Other sections */}
        <aside className="post__blcok-item">
          {/* Post */}
          {sidebar.post.title && (
            <span className="post__sidebar-title">সর্বশেষ</span>
          )}
          
            <div className="post__latstPost-wrap">
              {latestBLog?.map((post, index) => (
                <article key={index} className="post__latstPost-item">
                 
                    <div className="post__latstPost-thumb">
                      <Image width={100} height={100} src={`${`${process.env.NEXT_PUBLIC_IMAGE_ROOT}${post?.custom_image}`}`} alt="Post" />
                    </div>
                 
                  <div className="post__latstPost-content">
                    <p className="post__latstPost-date">
                      <Image src={SidebarOneDateIcon} alt="Icon" />
                      {formatDateToBangla(post?.creation)}
                    </p>
                    {post.title && (
                      <h3>
                        <Link
                          className="post__latstPost-title"
                          href={post.link ?? "#"}
                        >
                          {post.title}
                        </Link>
                      </h3>
                    )}
                  </div>
                </article>
              ))}
            </div>
     
        </aside>
        {/* Categories */}
        <aside className="post__blcok-item">
          {sidebar.category.title && (
            <span className="post__sidebar-title">
              ক্যাটাগরি
            </span>
          )}

          <ul className="post__categories">
            {categories.map((category, index) => (
              <li key={index} className="post__categories-item">
                <Link
                  className="post__categories-link"
                  href={`/blogs?category=${category?.name}`}
                >
                  {category?.name}
                </Link>
                <span>{category?.count}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Tags */}
        <aside className="post__blcok-item">
          {sidebar.tag.title && (
            <span className="post__sidebar-title">ট্যাগ</span>
          )}

          <ul className="post__tags">
            {tags?.map((tag, index) => (
              <li key={index}>
                <Link
                  className="post__tag-link"
                  href={`/blogs?tag=${tag?.tag_name}`}
                >
                  {tag.tag_name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
