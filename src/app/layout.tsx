import type {Metadata} from 'next';
import {Geist} from 'next/font/google';
import './globals.css';
import {Navbar} from '@/components/layout/navbar';
import {Footer} from '@/components/layout/footer';
import {Toaster} from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'ANOne Landing Page',
  description: 'The best SaaS application for everything.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geistSans.variable, 'antialiased font-sans')}>
        <Navbar />
        {/* Removed container from main, pages will add it if needed */}
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
