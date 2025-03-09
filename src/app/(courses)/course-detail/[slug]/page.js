import CtaOne from "@/components/CTA/CtaOne";
import CourseDetailOne from "@/components/CourseDetail/CourseDetailOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/Layout/LayoutOne";
import { GoogleTagManager } from "@next/third-parties/google";
import { getCourseBySlug } from "@/services/course";

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = params;
  const post = await getCourseBySlug(slug);
  return {
    title: post.meta_title,
    // description: post.meta_title,
    openGraph: {
      title: post.meta_title,
      description: post.meta_title,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_ROOT}/${post.image}`,
          width: 800,
          height: 600,
          alt: post.meta_title,
        },
      ]
    },
  };
}


export default function CourseDetails() {
  const data = {
    title: "কোর্সের বিস্তারিত",
    breadcrumbs: [
      {
        name: "হোম",
        link: "/",
      },
      {
        name: "কোর্সের বিস্তারিত",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <GoogleTagManager gtmId="GTM-T5527NF" />
      <mail>
        <InnerHeroOne data={data} />
        <CourseDetailOne />
        <CtaOne />
      </mail>
    </LayoutOne>
  );
}
