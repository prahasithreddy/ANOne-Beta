import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Free',
      priceMonthly: '$0',
      priceYearly: '$0',
      description: 'Get started with the basics, completely free.',
      features: [
        'Up to 1 project',
        'Basic analytics',
        '500 MB storage',
        'Community support',
      ],
      cta: 'Get Started Free',
      variant: 'outline' as const,
      href: '/signup?plan=free'
    },
    {
      name: 'Pro',
      priceMonthly: '$49',
      priceYearly: '$490', // Assuming $490/year ($40.83/month approx)
      description: 'For growing teams and professionals.',
      features: [
        'Up to 10 projects',
        'Advanced analytics',
        '50 GB storage',
        'Priority email support',
        'Team collaboration features',
      ],
      cta: 'Choose Pro',
      variant: 'default' as const, // Highlight Pro plan
      href: '/signup?plan=pro'
    },
    {
      name: 'Enterprise',
      priceMonthly: 'Custom',
      priceYearly: 'Custom',
      description: 'For large organizations with custom needs.',
      features: [
        'Unlimited projects',
        'Custom analytics & reporting',
        'Unlimited storage',
        'Dedicated support & SLA',
        'Advanced security & compliance',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      variant: 'outline' as const,
      href: '/contact-sales'
    },
  ];

  // Simple state simulation for monthly/yearly toggle
  // In a real app, this would use React state [useState] and likely fetch prices
  const isYearly = false; // Set to true to show yearly prices

  return (
    <div className="flex flex-col items-center justify-center space-y-16 py-16 px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <section className="text-center max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Choose the plan that fits your needs. Start free, upgrade anytime.
        </p>
         {/* Billing Cycle Toggle - Requires client component for state */}
         {/* <div className="flex items-center justify-center space-x-2 pt-4">
           <Label htmlFor="billing-cycle">Monthly</Label>
           <Switch id="billing-cycle" />
           <Label htmlFor="billing-cycle">Yearly (Save 20%)</Label>
         </div> */}
      </section>

      {/* Pricing Tiers Section */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => (
          <Card key={tier.name} className={`flex flex-col ${tier.variant === 'default' ? 'border-primary shadow-lg' : ''}`}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-bold">
                  {isYearly ? tier.priceYearly : tier.priceMonthly}
                </span>
                <span className="text-muted-foreground">
                  {tier.priceMonthly !== 'Custom' ? (isYearly ? '/year' : '/month') : ''}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                size="lg"
                className="w-full"
                variant={tier.variant === 'default' ? 'default' : 'outline'}
                asChild={tier.href.startsWith('/')} // Use asChild for internal links
              >
                {tier.href.startsWith('/') ? <Link href={tier.href}>{tier.cta}</Link> : <a href={tier.href}>{tier.cta}</a>}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* Feature Comparison Table (Optional - Simplified here) */}
      {/* Consider a dedicated table component for a full comparison */}
       <section className="w-full max-w-5xl space-y-8">
         <h2 className="text-3xl font-bold text-center">Compare Plans</h2>
         {/* Simple comparison list - A table would be better for complex comparisons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Free</h3>
              <p className="text-muted-foreground text-sm">Basic Features</p>
              <p className="text-muted-foreground text-sm">Limited Usage</p>
            </div>
             <div>
              <h3 className="font-semibold text-lg mb-2">Pro</h3>
              <p className="text-muted-foreground text-sm">Advanced Features</p>
              <p className="text-muted-foreground text-sm">Increased Limits</p>
               <p className="text-muted-foreground text-sm">Priority Support</p>
            </div>
             <div>
              <h3 className="font-semibold text-lg mb-2">Enterprise</h3>
              <p className="text-muted-foreground text-sm">All Features</p>
              <p className="text-muted-foreground text-sm">Unlimited Usage</p>
               <p className="text-muted-foreground text-sm">Dedicated Support & SLA</p>
               <p className="text-muted-foreground text-sm">Customization</p>
            </div>
          </div>
       </section>


      {/* FAQ Section */}
      <section className="w-full max-w-3xl space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Pricing FAQs</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Enterprise plans, we also support invoicing and bank transfers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">Can I switch between monthly and yearly billing?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Yes, you can switch your billing cycle from your account settings at any time. Changes will take effect at the end of your current billing period.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">Is there a discount for non-profits or educational institutions?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Yes, we offer special discounts for eligible non-profit organizations and educational institutions. Please contact our sales team for more information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">What happens if I exceed my plan limits?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Depending on the limit (e.g., storage, projects), you may be prompted to upgrade your plan or be unable to add new items. We typically notify you before you reach critical limits.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
