import { Layout } from '@/components/layout/layout'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturesSection } from '@/components/home/features-section'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
    </Layout>
  )
}
