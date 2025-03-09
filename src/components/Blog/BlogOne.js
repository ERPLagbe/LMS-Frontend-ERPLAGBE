'use client';
import { blogOne as data } from "@/data/blog";
import BlogCardOne from "@/components/Card/Blog/BlogCardOne";

import { getAllBlogs } from "@/services/blog";
import { useEffect, useState } from "react";
export default function BlogOne() {
  const [blogs, setBlogs] = useState(); // State to store fetched blogs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch all blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getAllBlogs();
        setBlogs(blogsData?.blogs); 

      } catch (err) {
        setError("Failed to fetch blogs");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <section className="blog__area pt-100 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            {data.title && (
              <div className="blog__title-wrap text-center move-line-3d">
                <h2 className="section-title">
                  {data.title.sliceOne} <span>{data.title.sliceTwo}</span>
                </h2>
              </div>
            )}
          </div>
        </div>
        {blogs && blogs.length > 0 && (
          <div className="row gy-4">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`col-xl-4 col-lg-4 col-md-6 fade-slide bottom`}
                data-delay='0.2'
              >
                <BlogCardOne blog={blog} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
