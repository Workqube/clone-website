import HeroSection from "@/components/hero-section"
import PartnerBanner from "@/components/partner-banner"
import TrustBadges from "@/components/trust-badges"
import ProductGrid from "@/components/product-grid"
import CookieBanner from "@/components/cookie-banner"
import HowItWorks from "@/components/how-it-works"
import Info from "@/components/info-section"
import Faq from "@/components/faq"
import Blog from "@/components/blog"
import Newsletter from "@/components/news-letter"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerBanner />
      <TrustBadges />
      <ProductGrid />
      <HowItWorks/>
      <Info/>
      <Faq/>
      <Blog/>
      <Newsletter/>
      <CookieBanner />
    </main>
  )
}

