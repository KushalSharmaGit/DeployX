import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const CTASection = () => (
  <section className="py-20 px-4 bg-muted/30">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold">Ready to deploy your first app?</h2>
      <p className="text-xl text-muted-foreground">
        Join thousands of developers who trust us with their React applications
      </p>
      <Button asChild size="lg" className="text-lg px-8">
        <Link to="/signup">
          Start Deploying Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>
)

export default CTASection
