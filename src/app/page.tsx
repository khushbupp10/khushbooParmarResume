import { Hero } from "@/components/home/hero";
import { Accomplishments } from "@/components/home/accomplishments";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Accomplishments />
      <FeaturedProjects />
      <NewsletterSection />
    </>
  );
}
