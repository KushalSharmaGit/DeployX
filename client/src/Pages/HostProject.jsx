import React, { useState } from "react"
import { Github, Globe, Settings, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/Header"

export default function HostProject() {
  const [formData, setFormData] = useState({
    repoUrl: "",
    projectName: "",
    framework: "",
    buildCommand: "npm run build",
    outputDirectory: "build",
    environmentVars: "",
    customDomain: "",
  })

  const [isDeploying, setIsDeploying] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsDeploying(true)

    // Simulate deployment
    setTimeout(() => {
      setIsDeploying(false)
      console.log("Deployed project:", formData)
      // redirect or toast can go here
    }, 3000)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Deploy New Project</h1>
            <p className="text-muted-foreground">
              Connect your GitHub repository and deploy your React app in
              minutes
            </p>
          </div>

          {/* === Repo Configuration === */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                Repository Configuration
              </CardTitle>
              <CardDescription>
                Provide your GitHub repository URL and project details
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="repoUrl">GitHub Repository URL *</Label>
                    <Input
                      id="repoUrl"
                      type="url"
                      placeholder="https://github.com/username/repo-name"
                      value={formData.repoUrl}
                      onChange={(e) =>
                        handleInputChange("repoUrl", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectName">Project Name *</Label>
                    <Input
                      id="projectName"
                      type="text"
                      placeholder="my-awesome-app"
                      value={formData.projectName}
                      onChange={(e) =>
                        handleInputChange("projectName", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="framework">Framework</Label>
                  <Select
                    value={formData.framework}
                    onValueChange={(value) =>
                      handleInputChange("framework", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Auto-detect framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto-detect</SelectItem>
                      <SelectItem value="react">Create React App</SelectItem>
                      <SelectItem value="nextjs">Next.js</SelectItem>
                      <SelectItem value="vite">Vite</SelectItem>
                      <SelectItem value="gatsby">Gatsby</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="buildCommand">Build Command</Label>
                    <Input
                      id="buildCommand"
                      type="text"
                      value={formData.buildCommand}
                      onChange={(e) =>
                        handleInputChange("buildCommand", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="outputDirectory">Output Directory</Label>
                    <Input
                      id="outputDirectory"
                      type="text"
                      value={formData.outputDirectory}
                      onChange={(e) =>
                        handleInputChange("outputDirectory", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="environmentVars">Environment Variables</Label>
                  <Textarea
                    id="environmentVars"
                    placeholder={`REACT_APP_API_URL=https://api.example.com\nREACT_APP_ENV=production`}
                    value={formData.environmentVars}
                    onChange={(e) =>
                      handleInputChange("environmentVars", e.target.value)
                    }
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    One variable per line in KEY=value format
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customDomain">Custom Domain (Optional)</Label>
                  <Input
                    id="customDomain"
                    type="text"
                    placeholder="myapp.com"
                    value={formData.customDomain}
                    onChange={(e) =>
                      handleInputChange("customDomain", e.target.value)
                    }
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" className="flex-1" disabled={isDeploying}>
                    {isDeploying ? (
                      <>
                        <Settings className="mr-2 h-4 w-4 animate-spin" />
                        Deploying...
                      </>
                    ) : (
                      <>
                        <Rocket className="mr-2 h-4 w-4" />
                        Deploy Project
                      </>
                    )}
                  </Button>
                  <Button type="button" variant="outline">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* === Preview Card === */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Deployment Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Project URL:</span>
                <Badge variant="secondary">
                  {formData.projectName || "project-name"}.reacthost.app
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Custom Domain:</span>
                <Badge variant={formData.customDomain ? "default" : "outline"}>
                  {formData.customDomain || "Not configured"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Framework:</span>
                <Badge variant="outline">
                  {formData.framework || "Auto-detect"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
