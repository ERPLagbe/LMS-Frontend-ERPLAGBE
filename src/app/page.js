import HeroOne from "@/components/Hero/HeroOne";
import PartnerOne from "@/components/Partner/PartnerOne";
import CourseOne from "@/components/Course/CourseOne";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import ServiceOne from "@/components/Service/ServiceOne";
import CounterOne from "@/components/Counter/CounterOne";
import BlogOne from "@/components/Blog/BlogOne";
import CtaOne from "@/components/CTA/CtaOne";
import AboutOne from "@/components/About/AboutOne";
import LayoutOne from "@/Layout/LayoutOne";

import { partnerOne } from "@/data/partner";
import Gallery from "@/components/Gallery/Gallery";

export default function HomePage() {
  const data = {
    ...partnerOne,
    type: "",
  };
  return (
    <LayoutOne>
      <main>
        <HeroOne />
        {/* <PartnerOne data={data} />
        <AboutOne /> */}
        <CourseOne isHome={true}/>
        <TestimonialOne />
        <ServiceOne />
        <Gallery/>
        {/* <CounterOne /> */}
        <BlogOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
