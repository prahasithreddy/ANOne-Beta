import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Zap, BarChart, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-20 py-16 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          The Modern Solution for Your Business Needs
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          ANOne provides cutting-edge tools and insights to help you scale, optimize, and succeed in today's competitive landscape.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/pricing">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        <div className="pt-8">
           <Image
              src="https://picsum.photos/1200/600"
              alt="ANOne Dashboard Preview"
              width={1200}
              height={600}
              className="rounded-lg shadow-xl mx-auto border"
              data-ai-hint="dashboard product screenshot"
            />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">Everything you need to boost productivity and growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Zap className="w-8 h-8 text-accent" />
              <CardTitle>Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Experience unparalleled speed and responsiveness with our optimized platform.</CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <CheckCircle className="w-8 h-8 text-accent" />
              <CardTitle>Seamless Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Connect ANOne with your favorite tools effortlessly using our extensive integrations.</CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <BarChart className="w-8 h-8 text-accent" />
              <CardTitle>Actionable Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Gain valuable data-driven insights to make informed business decisions.</CardDescription>
            </CardContent>
          </Card>
        </div>
         <div className="text-center pt-4">
           <Button variant="link" asChild className="text-accent">
              <Link href="/features">See All Features <ArrowRight className="ml-1 h-4 w-4" /></Link>
           </Button>
         </div>
      </section>

       {/* Testimonials Section */}
      <section className="w-full max-w-6xl space-y-12 bg-secondary py-16 rounded-lg px-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Teams Worldwide</h2>
          <p className="text-muted-foreground text-lg">Hear what our satisfied customers have to say.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Alice B.", company: "TechCorp", quote: "ANOne revolutionized our workflow. We're more efficient than ever!" },
            { name: "Bob C.", company: "Innovate Solutions", quote: "The insights provided are invaluable. Highly recommended!" },
            { name: "Charlie D.", company: "Growth Inc.", quote: "Customer support is top-notch, and the platform is incredibly intuitive." },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="pt-6 space-y-4">
                 <Quote className="w-6 h-6 text-muted-foreground" />
                <p className="italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-2">
                   <Image src={`https://picsum.photos/seed/${index+1}/40/40`} alt={testimonial.name} width={40} height={40} className="rounded-full" data-ai-hint="person headshot" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

       {/* Call to Action Section */}
       <section className="w-full max-w-4xl text-center space-y-6 py-16">
         <h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Business?</h2>
         <p className="text-lg text-muted-foreground">
           Join thousands of companies transforming their operations with ANOne. Start your free trial today.
         </p>
         <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
           <Link href="/pricing">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
         </Button>
       </section>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">Is there a free trial available?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">Can I change my plan later?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account settings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">What kind of support do you offer?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              We offer email support on all plans, and priority chat and phone support on our higher-tier plans. Our comprehensive knowledge base is also available 24/7.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">How does ANOne ensure data security?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Data security is our top priority. We use industry-standard encryption, regular backups, and adhere to strict privacy policies to protect your information.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
