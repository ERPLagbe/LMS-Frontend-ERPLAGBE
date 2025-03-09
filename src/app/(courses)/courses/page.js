import CtaOne from "@/components/CTA/CtaOne";
import CourseOne from "@/components/Course/CourseOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/Layout/LayoutOne";
import { GoogleTagManager } from "@next/third-parties/google";

export default function CooursesPage() {
  const data = {
    title: "কোর্স",
    breadcrumbs: [
      {
        name: "হোম",
        link: "/",
      },
      {
        name: "কোর্স",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <GoogleTagManager gtmId="GTM-T5527NF" />

      <main>
        <InnerHeroOne data={data} />
        <CourseOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
