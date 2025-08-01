import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bell, Rocket, Calendar, Mail } from "lucide-react";
import { Header } from "@/components/header";

export default function ComingSoon({
  title,
  description,
  icon = <Rocket className="h-12 w-12" />,
  expectedDate,
  features = [],
  showNotifyMe = true,
  backUrl = "/dashboard",
  backLabel = "Back to Dashboard",
}) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background to-muted/20 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Back Navigation */}
          <div className="flex justify-start">
            <Button asChild variant="ghost" size="sm">
              <Link to={backUrl}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {backLabel}
              </Link>
            </Button>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                {icon}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge variant="secondary" className="px-3 py-1">
                  Coming Soon
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">{description}</p>

              {expectedDate && (
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Expected: {expectedDate}</span>
                </div>
              )}
            </div>
          </div>

          {/* Features Preview */}
          {features.length > 0 && (
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">What to expect:</h3>
                <div className="grid gap-3 text-left">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Notify Me Form */}
          {showNotifyMe && (
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                {!isSubscribed ? (
                  <form onSubmit={handleNotifyMe} className="space-y-4">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Bell className="h-5 w-5" />
                      <h3 className="font-semibold">Get notified when it's ready</h3>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1"
                      />
                      <Button type="submit">
                        <Mail className="mr-2 h-4 w-4" />
                        Notify Me
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We'll send you an email when this feature is available. No spam, promise!
                    </p>
                  </form>
                ) : (
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Bell className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-green-600">You're all set!</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll notify you as soon as this feature is ready.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Additional Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="bg-transparent">
              <Link to="/dashboard">View My Projects</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link to="/host">Deploy New Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
