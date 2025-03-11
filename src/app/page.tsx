import HeroSection from "@/components/hero-section"
import PartnerBanner from "@/components/partner-banner"
import TrustBadges from "@/components/trust-badges"
import ProductGrid from "@/components/product-grid"
import CookieBanner from "@/components/cookie-banner"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerBanner />
      <TrustBadges />
      <ProductGrid />
      <CookieBanner />
    </main>
  )
}

