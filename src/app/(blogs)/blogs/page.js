'use client'
import BlogContentOne from "@/components/BlogContent/BlogContentOne";
import BlogSidebarOne from "@/components/BlogSidebar/BlogSidebarOne";
import CtaOne from "@/components/CTA/CtaOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import Pagination from "@/components/Pagination/Pagination";
import LayoutOne from "@/Layout/LayoutOne";
import { getAllBlogs } from "@/services/blog";
import { GoogleTagManager } from "@next/third-parties/google";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blogs() {
  const data = {
    title: "ব্লগ",
    breadcrumbs: [
      {
        name: "হোম",
        link: "/",
      },
      {
        name: "ব্লগ",
        link: "#",
      },
    ],
  };

  const [blogs, setBlogs] = useState(); // State to store fetched blogs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1);
  const searchParams = useSearchParams(); // Get search params from URL
  
  // Fetch all blogs when the component mounts or when search params change
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = { ...Object.fromEntries(searchParams.entries()), page }; // Include page in the query
        const blogsData = await getAllBlogs(query); // Fetch blogs with pagination
        setBlogs(blogsData?.blogs);
        setTotalPages(blogsData?.total_pages); // Set total pages from API response
      } catch (err) {
        setError("Failed to fetch blogs");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, searchParams]);// Rerun when searchParams change

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <LayoutOne>
      <GoogleTagManager gtmId="GTM-T5527NF" />

      <main>
        <InnerHeroOne data={data} />
        <div className="post__area pt-130 pb-130">
          <div className="container">
            <div className="row gy-5">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <BlogContentOne blogs={blogs} page={page} totalPages={totalPages} onPageChange={handlePageChange}/>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <BlogSidebarOne latestBLog={blogs?.slice(0,3)}/>
              </div>
            </div>
          </div>
        </div>
        <CtaOne />
        
      </main>
    </LayoutOne>
  );
}
