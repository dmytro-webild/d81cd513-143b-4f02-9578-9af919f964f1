import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import PricingSplitCards from '@/components/sections/pricing/PricingSplitCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboard
      tag="Certified Refurbished • 10/10 Condition"
      title="Dyson Airwrap™ Complete Long"
      description="Professionally refurbished, fully tested, and certified. Experience 10/10 cosmetic and functional performance in a brand-new sealed box."
      primaryButton={{
        text: "Buy Now",
        href: "#buy",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#features",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/person-using-dry-shampoo_52683-132225.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesRevealCardsBento
      tag="Key Features"
      title="Unmatched Styling Performance"
      description="Every unit is thoroughly inspected and sanitized to meet the highest quality standards."
      items={[
        {
          title: "10/10 Condition",
          description: "No visible signs of use, performs like new.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/instruments-used-latino-hair-salon_23-2150555183.jpg",
        },
        {
          title: "Certified Refurbished",
          description: "Professionally tested by our experts.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-drying-her-hair-with-blow-dryer_1163-718.jpg",
        },
        {
          title: "Full Attachments",
          description: "Includes all standard accessories.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-relaxing-while-listening-music-home_23-2149061812.jpg",
        },
        {
          title: "Premium Packaging",
          description: "Comes in a brand-new sealed box.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-ferromagnetic-metal-with-blurred-background_23-2148253621.jpg",
        },
        {
          title: "Quality Assured",
          description: "Sanitized and fully functional unit.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-celebrating-life_23-2149070386.jpg",
        },
        {
          title: "Aftermarket Care",
          description: "Quality components used where necessary.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-young-woman-spending-time-home_23-2150648145.jpg",
        },
        {
          title: "Ready to Use",
          description: "Inspected and ready for perfection.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/combs-brushes_23-2147711617.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSplitCards
      tag="Investment"
      title="Choose Excellence"
      description="Premium styling without the compromise."
      plans={[
        {
          tag: "Standard",
          price: "$499.00",
          period: "one-time",
          description: "All attachments included with full warranty.",
          primaryButton: {
            text: "Add to Cart",
            href: "#",
          },
          featuresTitle: "Included with your order:",
          features: [
            "Standard attachments",
            "Premium sealed packaging",
            "1-Year Warranty",
            "Free 7-14 Day Shipping",
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="reviews" data-section="reviews">
    <SectionErrorBoundary name="reviews">
          <TestimonialColumnMarqueeCards
      tag="Customer Reviews"
      title="4.9/5 Average Rating"
      description="See why our customers love our certified refurbished experience."
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Verified Buyer",
          quote: "Looks absolutely brand new! Packaging was pristine.",
          imageSrc: "http://img.b2bpic.net/free-photo/cotton-flower-vase-wooden-floor_53876-105954.jpg",
        },
        {
          id: "2",
          name: "Michael K.",
          role: "Verified Buyer",
          quote: "Performs perfectly, saved so much money.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-model-home_23-2147611445.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Verified Buyer",
          quote: "Shipping was fast and the quality is amazing.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-client-getting-her-hair-washed-hairdresser_23-2150771283.jpg",
        },
        {
          id: "4",
          name: "David W.",
          role: "Verified Buyer",
          quote: "Would definitely recommend this to everyone.",
          imageSrc: "http://img.b2bpic.net/free-photo/shea-butter-treatment-arrangement_23-2148963344.jpg",
        },
        {
          id: "5",
          name: "Olivia H.",
          role: "Verified Buyer",
          quote: "Stunning condition, 10/10 as described.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-champagne-bubbles-glass_23-2148339665.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="FAQ"
      title="Common Questions"
      description="Everything you need to know about our refurbishment process."
      items={[
        {
          question: "Is it really 10/10?",
          answer: "Yes, all products undergo rigorous testing and inspection.",
        },
        {
          question: "What's included?",
          answer: "Every device includes all original standard accessories.",
        },
        {
          question: "How long is shipping?",
          answer: "Shipping typically takes 7-14 business days.",
        },
        {
          question: "Are there aftermarket parts?",
          answer: "Minor aftermarket components may be used to meet our standards.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-wearing-white-clothes_23-2148910210.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="cta" data-section="cta">
    <SectionErrorBoundary name="cta">
          <ContactCta
      tag="Ready to Start?"
      text="Get the salon experience at home."
      primaryButton={{
        text: "Buy Now",
        href: "#buy",
      }}
      secondaryButton={{
        text: "Contact Support",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
