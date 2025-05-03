'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react'; // Import React

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6" />
          <span className="font-bold">ANOne</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-4 md:flex ml-auto"> {/* Added ml-auto here */}
          <Button variant="ghost">Log in</Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/pricing">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 p-6">
                 {/* Mobile Logo */}
                <Link href="/" className="mb-4 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Mountain className="h-6 w-6" />
                  <span className="font-bold">ANOne</span>
                </Link>
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'text-lg transition-colors hover:text-foreground/80',
                        pathname === item.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                {/* Mobile Auth Buttons */}
                <div className="mt-6 flex flex-col space-y-3 border-t pt-6">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>Log in</Button>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setIsOpen(false)}>
                    <Link href="/pricing">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
