import CtaOne from "@/components/CTA/CtaOne";
import ContactFormOne from "@/components/Form/ContactFormOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/Layout/LayoutOne";

export const metadata = {
  title: "যোগাযোগ",
  description: "Jobayer Academy Is the Skill Development Training Center in Bangladesh. We provide skin care product training, handmade soap art, resin art, product sourcing",
  icons: {
    icon: "favicon.ico",
  },
};

export default function ContactPage() {
  const data = {
    title: "যোগাযোগ",
    breadcrumbs: [
      {
        name: "হোম",
        link: "/",
      },
      {
        name: "যোগাযোগ",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        <InnerHeroOne data={data} />
        <ContactFormOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
