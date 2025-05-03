import Link from 'next/link';
import { Mountain, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-4 md:px-6">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold text-lg">ANOne</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Modern solutions for your growing business.
          </p>
          <div className="flex space-x-4">
             <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
             </Link>
             <Link href="#" aria-label="Twitter">
               <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
             </Link>
             <Link href="#" aria-label="GitHub">
               <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
             </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Updates</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Status</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-6 text-sm text-muted-foreground">
          <p>&copy; {currentYear} ANOne, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
