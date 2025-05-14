import { ChevronDown } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MenuHighlights from "@/components/menu-highlights"
import RestaurantGallery from "@/components/restaurant-gallery"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      <div className="w-full flex justify-center my-8">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-wine-600" />
        </div>
      </div>

      <AboutSection />
      <MenuHighlights />
      <RestaurantGallery />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
