// Dashboard.jsx (React JS version with alias-based imports and React Router)

import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Input,
  Label,
  Switch,
  Separator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui'
import {
  Globe,
  GitBranch,
  Activity,
  Settings,
  ExternalLink,
  Copy,
  RefreshCw,
  Trash2,
  ArrowLeft,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  Shield,
  Database,
} from 'lucide-react'
import { Header } from '@/components/Header'

const getProjectData = (id) => ({
  id,
  name: "my-portfolio",
  url: "my-portfolio.reacthost.app",
  customDomain: "johnsmith.dev",
  status: "deployed",
  framework: "React",
  repository: "github.com/john/portfolio",
  branch: "main",
  lastDeployed: "2 hours ago",
  buildTime: "2m 34s",
  deployments: [
    {
      id: "dep_1",
      status: "success",
      commit: "feat: update hero section",
      hash: "a1b2c3d",
      timestamp: "2 hours ago",
      duration: "2m 34s",
    },
  ],
  analytics: {
    visitors: "12.4K",
    pageViews: "28.7K",
    bounceRate: "34%",
    avgLoadTime: "1.2s",
  },
  environmentVars: [
    { key: "REACT_APP_API_URL", value: "https://api.example.com", hidden: false },
    { key: "SECRET_KEY", value: "••••••••••••", hidden: true },
  ],
})

export default function DashboardId() {
  const { projectId } = useParams()
  const project = getProjectData(projectId)
  const [isRedeploying, setIsRedeploying] = useState(false)

  const handleRedeploy = () => {
    setIsRedeploying(true)
    setTimeout(() => setIsRedeploying(false), 3000)
  }

  const copyToClipboard = (text) => navigator.clipboard.writeText(text)

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-600" />
      case 'building':
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'deployed':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'building':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'failed':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{project.name}</h1>
                <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                <Badge variant="outline">{project.framework}</Badge>
              </div>
              <p className="text-muted-foreground mt-1">Last deployed {project.lastDeployed}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleRedeploy} disabled={isRedeploying} variant="outline">
              {isRedeploying ? (
                <><RefreshCw className="mr-2 h-4 w-4 animate-spin" />Redeploying...</>
              ) : (
                <><RefreshCw className="mr-2 h-4 w-4" />Redeploy</>
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Project Settings</DropdownMenuItem>
                <DropdownMenuItem><ExternalLink className="mr-2 h-4 w-4" />Visit Site</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600"><Trash2 className="mr-2 h-4 w-4" />Delete Project</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Content like stats, tabs, etc. should go here. Truncated for brevity */}
        <p className="text-muted-foreground">[Tabs & content truncated]</p>
      </div>
    </div>
  )
}
