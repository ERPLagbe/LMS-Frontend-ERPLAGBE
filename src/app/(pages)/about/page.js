import AboutFour from "@/components/About/AboutFour";
import CtaOne from "@/components/CTA/CtaOne";
import CounterTwo from "@/components/Counter/CounterTwo";
import HeroFour from "@/components/Hero/HeroFour";
import LayoutOne from "@/Layout/LayoutOne";
import ServiceThree from "@/components/Service/ServiceThree";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import InstructorOne from "@/components/Instructor/InstructorOne";
import ServiceOne from "@/components/Service/ServiceOne";

export const metadata = {
  title: "আমাদের সম্পর্কে",
  description: "Jobayer Academy Is the Skill Development Training Center in Bangladesh. We provide skin care product training, handmade soap art, resin art, product sourcing",
  icons: {
    icon: "favicon.ico",
  },
};

export default function AboutPage() {
  const data = {
    title: "আমাদের সম্পর্কে",
    breadcrumbs: [
      {
        name: "হোম",
        link: "/",
      },
      {
        name: "আমাদের সম্পর্কে",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        {/* <HeroFour /> */}
        <InnerHeroOne data={data} />
        <ServiceOne />
        {/* <CounterTwo /> */}
        <AboutFour />
        <TestimonialOne />
        <InstructorOne type="2" spacingclassName="pt-120 pb-130" />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
