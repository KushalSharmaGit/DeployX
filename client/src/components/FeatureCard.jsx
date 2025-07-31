import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const FeatureCard = ({ icon: Icon, title, description, bg, color }) => (
  <Card className="border-0 shadow-lg">
    <CardContent className="p-8">
      <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

export default FeatureCard
