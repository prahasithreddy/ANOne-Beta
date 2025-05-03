import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, BarChart, Users, Settings, Shield, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FeatureDetailProps {
  icon: React.ElementType;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  reverse?: boolean;
}

function FeatureDetail({ icon: Icon, title, description, imageUrl, imageAlt, imageHint, reverse = false }: FeatureDetailProps) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <Icon className="w-7 h-7 text-accent" />
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground text-lg">{description}</p>
        <Button variant="link" className="text-accent px-0">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg shadow-lg border object-cover aspect-[3/2]"
          data-ai-hint={imageHint}
        />
      </div>
    </div>
  );
}


export default function FeaturesPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-20 py-16 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Explore the Power of ANOne
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the comprehensive suite of features designed to streamline your workflow, boost productivity, and drive growth for your business.
        </p>
         <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
           <Link href="/pricing">Get Started Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
         </Button>
      </section>

      {/* Features Overview Grid */}
       <section className="w-full max-w-6xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Performance", description: "Blazing fast operations and real-time updates." },
              { icon: Layers, title: "Integrations", description: "Connect seamlessly with your existing tool stack." },
              { icon: BarChart, title: "Analytics", description: "Deep insights into your performance metrics." },
              { icon: Users, title: "Collaboration", description: "Work together with your team effortlessly." },
              { icon: Settings, title: "Customization", description: "Tailor the platform to your specific needs." },
              { icon: Shield, title: "Security", description: "Enterprise-grade security for your peace of mind." },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                 <div className="flex justify-center mb-4">
                    <feature.icon className="w-10 h-10 text-accent" />
                 </div>
                <CardTitle className="mb-2 text-xl font-semibold">{feature.title}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
       </section>


      {/* Detailed Features Section */}
      <section className="w-full max-w-6xl space-y-24">
         <FeatureDetail
            icon={BarChart}
            title="Advanced Analytics Suite"
            description="Dive deep into your data with customizable dashboards, real-time reporting, and predictive insights. Understand trends, identify opportunities, and make data-driven decisions with confidence."
            imageUrl="https://picsum.photos/seed/feature1/600/400"
            imageAlt="Analytics Dashboard"
            imageHint="analytics dashboard chart"
          />
         <FeatureDetail
            icon={Users}
            title="Seamless Team Collaboration"
            description="Bring your team together with shared workspaces, real-time commenting, task assignments, and project tracking. Improve communication and keep everyone aligned, no matter where they are."
            imageUrl="https://picsum.photos/seed/feature2/600/400"
            imageAlt="Collaboration Platform Interface"
            imageHint="team collaboration interface"
            reverse={true}
          />
          <FeatureDetail
            icon={Layers}
            title="Extensive Integration Hub"
            description="Connect ANOne to hundreds of other apps like Slack, Google Workspace, Salesforce, and more. Automate workflows, sync data, and create a unified ecosystem for your business operations."
            imageUrl="https://picsum.photos/seed/feature3/600/400"
            imageAlt="Integration Logos"
            imageHint="integration app logos"
          />
           <FeatureDetail
            icon={Shield}
            title="Robust Security Measures"
            description="Protect your sensitive data with enterprise-grade security features including SSO, role-based access control, audit logs, and end-to-end encryption. Compliance with major standards guaranteed."
            imageUrl="https://picsum.photos/seed/feature4/600/400"
            imageAlt="Security Shield Graphic"
            imageHint="security shield lock"
            reverse={true}
          />
      </section>

      {/* Call to Action Section */}
      <section className="w-full max-w-4xl text-center space-y-6 py-16 bg-secondary rounded-lg px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Experience the Difference?</h2>
        <p className="text-lg text-muted-foreground">
          Unlock the full potential of your business with ANOne's powerful features. Start your free trial today and see the results for yourself.
        </p>
        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/pricing">Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </section>
    </div>
  );
}
