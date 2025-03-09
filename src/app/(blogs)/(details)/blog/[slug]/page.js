import BlogDetailOne from "@/components/BlogDetail/BlogDetailOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/Layout/LayoutOne";
import { getBlogBySlug } from "@/services/blog";
import { GoogleTagManager } from "@next/third-parties/google";

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = params;
  const post = await getBlogBySlug(slug);
  return {
    title: post.meta_title,
    // description: post.meta_title,
    openGraph: {
      title: post.meta_title,
      description: post.meta_title,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_ROOT}/${post.thumbnail_image	}`,
          width: 800,
          height: 600,
          alt: post.meta_title,
        },
      ]
    },
  };
}
 

export default function BlogDetailsPage() {
  const data = {
    title: "ব্লগ বিস্তারিত",
    breadcrumbs: [
      {
        name: "হোম",
        link: "/",
      },
      {
        name: "ব্লগ বিস্তারিত",
        link: "#",
      },
    ],
  };
  
  return (
    <LayoutOne>
      <GoogleTagManager gtmId="GTM-T5527NF" />

      <main>
        <InnerHeroOne data={data} />
        <section className="postDetails__area pt-130 pb-130">
          <div className="container">
            <div className="row justify-content-center gy-5">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <BlogDetailOne />
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutOne>
  );
}
