// NotFound.jsx

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold">
          <Rocket className="h-8 w-8" />
          ReactHost
        </Link>

        {/* 404 Illustration */}
        <div className="space-y-6">
          <div className="text-8xl md:text-9xl font-bold text-muted-foreground/20">404</div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Page Not Found</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved to a different location.
            </p>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto">
                <Home className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold">Go Home</h3>
              <p className="text-sm text-muted-foreground">Return to the main page</p>
              <Button asChild className="w-full">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home Page
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Dashboard</h3>
              <p className="text-sm text-muted-foreground">View your projects</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link to="/dashboard">
                  <Search className="mr-2 h-4 w-4" />
                  My Projects
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                <Rocket className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Deploy New</h3>
              <p className="text-sm text-muted-foreground">Start a new project</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link to="/host">
                  <Rocket className="mr-2 h-4 w-4" />
                  New Project
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Back Button */}
        <div className="pt-4">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Help Text */}
        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Need help? Contact our{' '}
            <Link to="#" className="underline hover:no-underline">
              support team
            </Link>{' '}
            or check our{' '}
            <Link to="#" className="underline hover:no-underline">
              documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
