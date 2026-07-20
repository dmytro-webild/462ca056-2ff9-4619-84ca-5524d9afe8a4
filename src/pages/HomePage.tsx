import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "http://img.b2bpic.net/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206526.jpg",
        "http://img.b2bpic.net/free-photo/blonde-woman-is-loooking-camera-by-crossing-arms-white-background_176474-115879.jpg",
        "http://img.b2bpic.net/free-photo/closeup-portrait-caucasian-happy-teacher-glasses_74855-9736.jpg",
        "http://img.b2bpic.net/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5360.jpg",
      ]}
      avatarText="Trusted by local small business owners"
      title="Design Websites That Grow Your Palm Beach Business"
      description="Stop struggling with templates. Get a custom, high-converting website designed to attract your local customers and drive meaningful results in South Florida."
      primaryButton={{
        text: "Get Your Free Quote",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View My Portfolio",
        href: "#services",
      }}
      names={[
        "Coastal Decor",
        "Sun Valley Coffee",
        "Palm Beach Law",
        "Ocean Breeze Yoga",
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/desk-workplace-with-copy-space_1194-638352.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedCards
      tag="What I Do"
      title="Custom Web Design Solutions"
      description="I create websites optimized for speed, search engines, and maximum conversion rates."
      items={[
        {
          title: "SEO-Optimized Websites",
          description: "Rank higher in local searches in West Palm Beach and reach more of your customers every single day.",
          tags: [
            "SEO",
            "Performance",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-packed-suitcase-vacation-happily-working-guy-office-clothes-holds-laptop-looks-into-camera-blue-space-with-inflatable-circle_197531-15468.jpg",
        },
        {
          title: "Mobile-First Design",
          description: "Your customers use their phones more than anything else. I make sure your site looks perfect on every device.",
          tags: [
            "Responsive",
            "Mobile",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/female-artist-dressed-casually-working-her-sketch-while-drawing-something-sitting-her-workshop-creative-woman-being-involved-painting-people-hobby-creative-process-concept_273609-336.jpg",
        },
        {
          title: "Conversion Rate Strategy",
          description: "Turn more visitors into actual paying clients with strategic landing pages and clear calls to action.",
          tags: [
            "Strategy",
            "Growth",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-colorful-overloaded-bullet-journal_23-2150168680.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Local Design Partner for Your Growth"
      descriptions={[
        "As a resident and designer here in Palm Beach County, I understand what makes the local market tick. My focus is on helping small business owners move beyond generic templates and build a digital identity that works as hard as you do.",
        "I prioritize speed, security, and user experience because these are the foundations of building digital trust. Your website should be your most valuable employee, working 24/7 to turn visitors into long-term clients.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Results Matter"
      title="Data-Driven Success"
      description="I focus on the numbers that actually drive profit, not just pretty pixels."
      metrics={[
        {
          value: "150+",
          title: "Projects Completed",
          description: "Local business sites across Palm Beach.",
          imageSrc: "http://img.b2bpic.net/free-photo/cancer-oncology-hope-support-concept_53876-133885.jpg",
        },
        {
          value: "45%",
          title: "Avg Conversion Lift",
          description: "Helping brands turn more traffic into sales.",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-woman-working-laptop-vacation-sitting-stairs_1303-15632.jpg",
        },
        {
          value: "98%",
          title: "Client Satisfaction",
          description: "Long-term relationships with every partner.",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-desktop-with-office-appliances-keyboard_23-2147830062.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialTrustCard
      quote="Working with you completely transformed our online presence. Our local bookings have tripled since we launched our new site!"
      rating={5}
      author="Sarah Miller, Founder of Coastal Coffee"
      avatars={[
        {
          name: "Sarah Miller",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg",
        },
        {
          name: "David Clark",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-businessman-pointing-with-finger_1262-3108.jpg",
        },
        {
          name: "Emily Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/teen-age-youth-style-self-expression-concept-portrait-positive-happy-teenage-girl-with-bob-pinkish-hairstyle-facial-piercing-relaxing-indoors_343059-3781.jpg",
        },
        {
          name: "James Rodriguez",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-camera-office_482257-119300.jpg",
        },
        {
          name: "Linda Wu",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-person_23-2151098592.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Common Questions"
      title="Frequently Asked Questions"
      description="Need more clarity? Here are answers to the most common questions my clients have."
      items={[
        {
          question: "How long does a website project take?",
          answer: "Most projects take between 4-6 weeks from initial consultation to final launch.",
        },
        {
          question: "Do you offer SEO services?",
          answer: "Yes, every site I build is designed with SEO best practices and local search optimization in mind.",
        },
        {
          question: "What happens after the site launches?",
          answer: "I offer ongoing maintenance and support packages to ensure your site remains fast, secure, and updated.",
        },
        {
          question: "Can I edit the content myself?",
          answer: "Absolutely. I build on intuitive platforms that give you full control to update your text and images whenever you need.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/asian-woman-working-laptop-vacation-sitting-stairs_1303-15634.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Grow?"
      text="Let’s build something incredible together. Schedule a free consultation for your local business today."
      primaryButton={{
        text: "Schedule Free Call",
        href: "#contact-form",
      }}
      secondaryButton={{
        text: "Send me an Email",
        href: "mailto:hello@pbcwebdesign.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
