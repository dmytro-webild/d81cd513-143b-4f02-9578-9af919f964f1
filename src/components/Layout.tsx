import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Features",    "href": "#features"
  },
  {
    "name": "Reviews",    "href": "#reviews"
  },
  {
    "name": "FAQ",    "href": "#faq"
  },
  {
    "name": "Hero",    "href": "#hero"
  },
  {
    "name": "Pricing",    "href": "#pricing"
  },
  {
    "name": "Cta",    "href": "#cta"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="gridLines" heroBackground="horizonGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Dyson Refurb"
      logoImageSrc="https://img.b2bpic.net/free-photo/logo.png"
      ctaButton={{
        text: "Buy Now",        href: "#buy"}}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="Brand"
      copyright="© 2026 Brand. All rights reserved."
      columns={[
        {
          links: [
            {
              href: "#features"},
            {
              href: "#pricing"},
          ],
        },
        {
          links: [
            {
              href: "#about"},
            {
              href: "#contact"},
          ],
        },
      ]}
      links={[
        {
          href: "#"},
        {
          href: "#"},
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
