import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Rocket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="flex-1 flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Deploy React Apps
            <span className="block text-emerald-600">Instantly</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect your GitHub repository and deploy your React applications with zero configuration. Fast, reliable,
            and developer-friendly hosting.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/signup">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            <Link to="/signin">Sign In</Link>
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground mb-4">Trusted by developers worldwide</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">10K+ Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              <span className="text-sm">50K+ Deployments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
