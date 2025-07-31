import React from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import FeatureSection from "@/components/FeatureSection"
import CTASection from "@/components/CTASection"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Home
