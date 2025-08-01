import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Globe,
  GitBranch,
  Calendar,
  MoreHorizontal,
  Plus,
  Search,
  ExternalLink,
  Settings,
  Trash2,
  Eye,
  Activity,
} from "lucide-react"
import { Header } from "@/components/header"

const projects = [
  {
    id: 1,
    name: "my-portfolio",
    url: "my-portfolio.reacthost.app",
    customDomain: "johnsmith.dev",
    status: "deployed",
    lastDeployed: "2 hours ago",
    framework: "React",
    repository: "github.com/john/portfolio",
  },
  {
    id: 2,
    name: "ecommerce-app",
    url: "ecommerce-app.reacthost.app",
    customDomain: null,
    status: "building",
    lastDeployed: "5 minutes ago",
    framework: "Next.js",
    repository: "github.com/john/ecommerce",
  },
  {
    id: 3,
    name: "blog-site",
    url: "blog-site.reacthost.app",
    customDomain: "myblog.com",
    status: "failed",
    lastDeployed: "1 day ago",
    framework: "Gatsby",
    repository: "github.com/john/blog",
  },
  {
    id: 4,
    name: "dashboard-ui",
    url: "dashboard-ui.reacthost.app",
    customDomain: null,
    status: "deployed",
    lastDeployed: "3 days ago",
    framework: "Vite",
    repository: "github.com/john/dashboard",
  },
]

const getStatusColor = (status) => {
  switch (status) {
    case "deployed":
      return "bg-green-100 text-green-800 border-green-200"
    case "building":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "failed":
      return "bg-red-100 text-red-800 border-red-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Manage your deployed React applications</p>
            </div>
            <Button asChild>
              <Link to="/host">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                    <p className="text-2xl font-bold">4</p>
                  </div>
                  <Globe className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Deployments</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <Activity className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Custom Domains</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                  <ExternalLink className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">This Month</p>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-muted-foreground">Deployments</p>
                  </div>
                  <GitBranch className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-semibold">Your Projects</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search projects..." className="pl-10 w-64" />
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{project.name}</h3>
                          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                          <Badge variant="outline">{project.framework}</Badge>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Globe className="h-4 w-4" />
                            <a
                              href={`https://${project.customDomain || project.url}`}
                              className="hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {project.customDomain || project.url}
                            </a>
                            <ExternalLink className="h-3 w-3" />
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <GitBranch className="h-4 w-4" />
                            <span>{project.repository}</span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Last deployed {project.lastDeployed}</span>
                          </div>
                        </div>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Site
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Project
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
