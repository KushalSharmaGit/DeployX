import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6" />
              <span className="text-xl font-bold">ReactHost</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The fastest way to deploy your React applications with zero configuration.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2 text-sm">
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                API Reference
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Careers
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-2 text-sm">
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Community
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Status
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 ReactHost. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
