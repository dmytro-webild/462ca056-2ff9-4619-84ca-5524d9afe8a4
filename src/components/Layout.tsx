import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Instagram, Linkedin } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Foundations Digital"
      ctaButton={{
        text: "Get My Quote",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Foundations Digital"
      copyright="© 2024 Foundations Digital. All rights reserved. Locally owned in Palm Beach County."
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com",
        },
        {
          icon: Linkedin,
          href: "https://linkedin.com",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
