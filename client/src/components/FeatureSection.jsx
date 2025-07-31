import React from "react"
import { GitBranch, Zap, Globe, Shield, Rocket, Users } from "lucide-react"
import FeatureCard from "@/components/FeatureCard"

const features = [
  {
    title: "Git Integration",
    description: "Connect your GitHub repository and deploy automatically on every push. No complex setup required.",
    icon: GitBranch,
    bg: "bg-emerald-100",
    color: "text-emerald-600",
  },
  {
    title: "Lightning Fast",
    description: "Global CDN ensures your apps load instantly for users worldwide. Optimized for performance.",
    icon: Zap,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Custom Domains",
    description: "Use your own domain with automatic SSL certificates. Professional hosting made simple.",
    icon: Globe,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Secure by Default",
    description: "HTTPS everywhere, DDoS protection, and enterprise-grade security for all your applications.",
    icon: Shield,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    title: "Zero Config",
    description: "No build configuration needed. We automatically detect and optimize your React applications.",
    icon: Rocket,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Team Collaboration",
    description: "Invite team members, manage permissions, and collaborate on projects seamlessly.",
    icon: Users,
    bg: "bg-red-100",
    color: "text-red-600",
  },
]

const FeatureSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to ship faster</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powerful features designed for modern React development workflow
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
)

export default FeatureSection
