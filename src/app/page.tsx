"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Bell,
  Code2,
  PieChart,
  Lock,
  Verified,
  Scale,
  Wrench,
  Twitter,
  Github,
  Youtube,
} from "lucide-react"; // Assuming FeatherSlack is not available, replaced with Github/another suitable icon

// Simple component to replicate IconWithBackground functionality
const IconWithBackground = ({ icon, variant = 'neutral', size = 'medium' }: { icon: React.ReactNode, variant?: string, size?: string }) => {
  const sizeClasses = size === 'small' ? 'p-2' : 'p-3';
  const bgClass = variant === 'neutral' ? 'bg-secondary' : 'bg-accent'; // Simplified mapping
  return (
    <div className={cn('inline-flex rounded-lg', sizeClasses, bgClass)}>
      {icon}
    </div>
  );
};


export default function ModernHomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-background">
      {/* Navbar section removed as it's handled by the main layout */}

      {/* Hero Section */}
      <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-24">
        <div className="flex w-full max-w-4xl flex-col items-start gap-12 px-6 py-6 md:px-0 md:py-0">
          <div className="flex w-full flex-col items-start gap-6">
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tighter text-foreground md:text-6xl">
              AI-powered assistant for the modern software team
            </h1>
            <p className="max-w-xl text-xl font-medium leading-normal text-muted-foreground md:text-2xl">
              Elevate your workflow with intelligent agents. Streamline coding,
              debugging, and project management with AI.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-4">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/pricing">Start coding smarter</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/features">
                Meet your AI assistants <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="flex w-full flex-col items-center justify-center gap-2 px-6">
        <Image
          className="h-auto w-full max-w-4xl flex-none rounded-lg border object-contain shadow-lg"
          src="https://res.cloudinary.com/subframe/image/upload/v1724690099/uploads/302/zxrsheptnqfesqupssbb.png"
          alt="AI Assistant Dashboard Preview"
          width={1024}
          height={576} // Aspect ratio approx 16:9
          priority // Load hero image first
          data-ai-hint="dashboard product screenshot"
        />
      </div>

      {/* Logos Section */}
      <div className="flex w-full flex-col items-center justify-center gap-12 px-6 py-24">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-12">
          <div className="flex w-full max-w-3xl flex-col items-center gap-1 text-center">
            <span className="text-xl font-medium leading-normal text-foreground">
              Empowering the world&#39;s most innovative dev teams with AI.
            </span>
            <span className="text-lg font-medium leading-normal text-muted-foreground md:text-xl">
              From AI-first startups to Fortune 500 tech giants.
            </span>
          </div>
          <div className="grid w-full grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-6">
            {[
              "xstm8znaw99taqy2omsq.png",
              "jtjkdxvy1mm2ozvaymwv.png",
              "dkh8m7duzxhvdhs0hyxr.png",
              "fwzpu385itsjirvkop07.png",
              "vuaebacyjpqj2yprcwke.png",
              "ofdixj8whhbrmgahq506.png",
            ].map((imgName, index) => (
              <div key={index} className="flex grow items-center justify-center gap-4 rounded-md px-6 py-6">
                <Image
                  className="h-10 w-auto flex-none object-contain grayscale contrast-150 dark:brightness-0 dark:invert"
                  src={`https://res.cloudinary.com/subframe/image/upload/v1711417548/shared/${imgName}`} // Adjusted base URL slightly
                  alt={`Client Logo ${index + 1}`}
                  width={120} // Example width, adjust as needed
                  height={40}
                  data-ai-hint="company logo client"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineered for AI Section */}
       <div className="w-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent py-40 px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-16">
          <div className="flex w-full flex-wrap items-end gap-12">
            <h2 className="grow basis-0 text-5xl font-semibold leading-tight tracking-tighter text-foreground">
              Engineered for AI development
            </h2>
            <p className="grow basis-0 text-lg font-medium leading-normal text-muted-foreground">
              Our platform is built on the principles that define cutting-edge
              AI-powered development: intelligent assistance, rapid iteration,
              and uncompromising quality. Experience the future of coding, where
              AI amplifies human creativity.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
             {[
                { title: "AI-driven code generation", img: "https://res.cloudinary.com/subframe/image/upload/v1724705412/uploads/302/rc9vp0qjfzzptopfssad.png", hint: "code editor ai generation" },
                { title: "Intelligent project management", img: "https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fbkapcq4o1zsq98df0t6.png", hint: "project management board tasks" },
                { title: "Enhanced code review & collaboration", img: "https://res.cloudinary.com/subframe/image/upload/v1724690087/uploads/302/w2ra2yihpofsdy1h4uhy.png", hint: "collaboration code review interface" },
             ].map((feature) => (
                <div key={feature.title} className="flex min-w-[300px] grow basis-0 flex-col self-stretch overflow-hidden rounded-2xl shadow-sm border">
                <Image
                    className="h-64 w-full flex-none object-cover"
                    src={feature.img}
                    alt={feature.title}
                    width={400}
                    height={256}
                    data-ai-hint={feature.hint}
                />
                <div className="flex w-full grow items-end gap-2 bg-background p-6">
                    <span className="grow basis-0 text-lg font-medium leading-normal text-foreground">
                    {feature.title}
                    </span>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-5 w-5"/>
                    </Button>
                </div>
                </div>
            ))}
          </div>
        </div>
       </div>


      {/* Chart Your Future Section */}
       <div className="w-full bg-gradient-to-b from-secondary/30 to-transparent px-6 pt-40 pb-20">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6">
            <div className="flex w-full flex-col items-start gap-8">
                <div className="flex w-full flex-col items-start gap-6">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-4 flex-none rounded-full bg-primary" /> {/* Use primary color */}
                    <span className="text-sm font-medium leading-tight text-foreground">
                    AI-powered strategic planning
                    </span>
                    <ChevronRight className="h-4 w-4 text-foreground" />
                </div>
                <h2 className="w-full max-w-3xl text-5xl font-semibold leading-tight tracking-tighter text-foreground">
                    Chart your product&#39;s future
                </h2>
                </div>
                <div className="flex w-full max-w-md flex-col items-start">
                <p className="w-full text-lg font-medium leading-normal text-foreground">
                    Harness AI to align your team intelligence.
                </p>
                <p className="w-full text-lg font-medium leading-normal text-muted-foreground">
                    Plan, manage, and track AI-driven insights and predictive analytics.
                </p>
                </div>
            </div>
          </div>
       </div>


      {/* Strategic Planning Image */}
      <div className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden px-6">
        <Image
          className="h-auto max-h-[576px] w-full max-w-5xl flex-none rounded-lg border object-contain shadow-lg"
          src="https://res.cloudinary.com/subframe/image/upload/v1724705485/uploads/302/lynkyfusi4ab4z91o69c.png"
          alt="Strategic Planning Interface"
          width={1024}
          height={576}
          data-ai-hint="planning roadmap interface"
        />
      </div>


      {/* Code Analysis & Test Generation Section */}
      <div className="flex w-full flex-col items-center px-6 pt-16 pb-24">
        <div className="flex w-full max-w-5xl flex-wrap items-stretch justify-center border-t border-border">
          <div className="flex min-w-[320px] grow basis-0 flex-col items-start gap-8 px-6 py-12 md:border-r md:border-border md:pr-12">
            <div className="flex w-full flex-col items-start gap-1">
              <h3 className="w-full text-xl font-medium leading-normal text-foreground">
                AI-powered code analysis
              </h3>
              <p className="w-full text-lg font-medium leading-normal text-muted-foreground">
                Leverage machine learning to identify potential bugs, security vulnerabilities, and performance bottlenecks.
              </p>
            </div>
            <Image
              className="h-72 w-full max-w-xl flex-none rounded-md border object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1724705499/uploads/302/jh06ubduyciizexxi4ep.png"
              alt="Code Analysis UI"
              width={576}
              height={288}
              data-ai-hint="code analysis dashboard"
            />
          </div>
          <div className="flex min-w-[320px] grow basis-0 flex-col items-start gap-8 px-6 py-12 md:pl-12">
            <div className="flex w-full flex-col items-start gap-1">
              <h3 className="w-full text-xl font-medium leading-normal text-foreground">
                Intelligent test generation
              </h3>
              <p className="w-full text-lg font-medium leading-normal text-muted-foreground">
                Automatically generate comprehensive test suites based on your code changes, ensuring robust coverage.
              </p>
            </div>
            <Image
              className="h-72 w-full max-w-xl flex-none rounded-md border object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1724705524/uploads/302/l5oq75rpdkq2kowa2xkj.png"
              alt="Test Generation UI"
              width={576}
              height={288}
               data-ai-hint="test generation results"
            />
          </div>
        </div>
        <div className="h-px w-full max-w-5xl flex-none bg-border" />
         <div className="flex w-full max-w-5xl flex-wrap items-center justify-center gap-6 border-b border-border py-16">
           <div className="flex min-w-[320px] grow basis-0 items-center gap-8">
              <div className="flex max-w-md grow basis-0 flex-col items-start gap-6">
                <h3 className="w-full text-2xl font-medium leading-tight text-foreground">
                    AI-assisted product ideation and roadmapping
                </h3>
                 <div className="flex flex-col items-start gap-2">
                    {[
                        { text: "Predictive market analysis", active: true },
                        { text: "AI-generated feature suggestions", active: false },
                        { text: "Smart resource allocation", active: false },
                    ].map((item) => (
                        <div key={item.text} className="flex items-center gap-2">
                            <div className={`flex h-6 w-1 flex-none items-center justify-center rounded-full ${item.active ? 'bg-primary' : 'bg-muted'}`} />
                            <span className={`text-lg font-medium leading-normal ${item.active ? 'text-primary' : 'text-muted-foreground'}`}>
                                {item.text}
                            </span>
                        </div>
                    ))}
                 </div>
              </div>
           </div>
           <div className="flex min-w-[320px] grow basis-0 items-center justify-center gap-6">
              <Image
                className="h-auto w-full max-w-lg grow basis-0 rounded-md border object-contain"
                src="https://res.cloudinary.com/subframe/image/upload/v1724690075/uploads/302/ajop7v0t3y1bjmf9obyp.png"
                alt="Ideation and Roadmapping UI"
                width={512} // Adjust based on image aspect ratio
                height={448} // Adjust based on image aspect ratio
                data-ai-hint="product roadmap planning ui"
              />
           </div>
         </div>

        {/* Features Icons Section */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
           {[
                { icon: Sparkles, title: "AI-driven insights", desc: "Uncover hidden patterns in your development process." },
                { icon: Bell, title: "Smart notifications", desc: "Receive context-aware alerts and reminders." },
                { icon: Code2, title: "Code optimization", desc: "Automatically refactor and improve code quality." },
                { icon: PieChart, title: "Predictive analytics", desc: "Forecast project timelines and resource needs." },
           ].map((item) => (
               <div key={item.title} className="flex min-w-[160px] grow basis-0 flex-col items-start gap-2">
                 <div className="flex items-center gap-2">
                   <item.icon className="h-5 w-5 text-foreground" />
                   <span className="text-sm font-medium leading-tight text-foreground">
                     {item.title}
                   </span>
                 </div>
                 <span className="text-sm font-medium leading-tight text-muted-foreground">
                   {item.desc}
                 </span>
               </div>
           ))}
        </div>
      </div>


      {/* Supercharge Collaboration Section */}
       <div className="w-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent py-40 px-6">
         <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-16">
           <div className="flex w-full flex-wrap items-end gap-12">
             <div className="grow basis-0 flex-col items-start gap-6">
               <div className="flex items-center gap-2">
                 {/* Using a different color for visual distinction */}
                 <div className="h-2 w-4 flex-none rounded-full bg-green-500" />
                 <span className="text-sm font-medium leading-tight text-foreground">
                   AI-enhanced workflows
                 </span>
               </div>
               <h2 className="w-full text-5xl font-semibold leading-tight tracking-tighter text-foreground">
                 Supercharge your collaboration
               </h2>
             </div>
             <p className="grow basis-0 text-lg font-medium leading-normal text-muted-foreground">
               Amplify your team&#39;s capabilities with AI-powered integrations
               that seamlessly connect tools and teams, keeping everyone aligned
               and productive.
             </p>
           </div>
           <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
                { title: "AI-driven code review", desc: "Automate and enhance pull request reviews with AI", img: "https://res.cloudinary.com/subframe/image/upload/v1724705565/uploads/302/zltdyudg7ksbnmbba3dr.png", hint:"code review github integration" },
                { title: "Intelligent task allocation", desc: "Optimize team productivity with task assignment", img: "https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fbkapcq4o1zsq98df0t6.png", hint:"task board assignment" },
                { title: "Predictive analytics", desc: "Forecast project timelines and resource needs", img: "https://res.cloudinary.com/subframe/image/upload/v1724705587/uploads/302/pmtf0cxxfdalumkmlstj.png", hint: "analytics chart prediction" },
            ].map((feature) => (
                <div key={feature.title} className="flex min-w-[300px] grow basis-0 flex-col self-stretch overflow-hidden rounded-2xl shadow-sm border">
                    <Image
                        className="h-80 w-full flex-none object-cover"
                        src={feature.img}
                        alt={feature.title}
                        width={400}
                        height={320}
                        data-ai-hint={feature.hint}
                    />
                    <div className="flex w-full grow items-end gap-4 bg-background p-6">
                        <div className="grow basis-0 flex-col items-start gap-1">
                        <span className="w-full text-sm font-medium leading-tight text-muted-foreground">
                            {feature.title}
                        </span>
                        <span className="w-full text-lg font-medium leading-normal text-foreground">
                            {feature.desc}
                        </span>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ArrowRight className="h-5 w-5"/>
                        </Button>
                    </div>
                </div>
            ))}
           </div>
         </div>
       </div>


      {/* AI Ecosystem Section */}
      <div className="flex w-full flex-col items-center justify-center py-40 bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
        <div className="flex w-full max-w-5xl flex-wrap items-center justify-center gap-16 px-6 lg:gap-24">
          <div className="flex min-w-[320px] grow basis-0 flex-col items-start gap-6 md:py-12">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-4 flex-none rounded-full bg-muted" />
                <span className="text-sm font-medium leading-tight text-foreground">
                  Powered by AI
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-8">
                  <h2 className="w-full text-5xl font-semibold leading-tight tracking-tighter text-foreground">
                    AI development ecosystem
                  </h2>
                  <p className="w-full text-sm leading-snug text-muted-foreground">
                    Our platform's simplicity belies the sophisticated AI technologies working tirelessly beneath the surface, ensuring robustness, security, and unparalleled speed in every interaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-px w-full flex-none bg-border" />
            <div className="flex w-full flex-col items-start gap-8 pb-8 md:gap-12 md:pb-12">
               {[
                 { title: "AI-powered Engine", desc: "Leverages machine learning for high-performance, predictive synchronization." },
                 { title: "AI-enhanced security", desc: "Adapt to potential security threats, ensuring ironclad protection." },
                 { title: "Adaptive AI scaling", desc: "Dynamically scales to meet the needs of teams from startups to global enterprises." },
               ].map((item) => (
                 <div key={item.title} className="flex w-full flex-col gap-4 md:flex-row md:items-start md:gap-12">
                   <span className="grow basis-0 text-sm font-medium leading-tight text-foreground">
                     {item.title}
                   </span>
                   <span className="grow basis-0 text-sm leading-snug text-muted-foreground">
                     {item.desc}
                   </span>
                 </div>
               ))}
            </div>
            <div className="h-px w-full flex-none bg-border" />
             <div className="grid w-full grid-cols-2 gap-6 pt-4 md:grid-cols-4 md:pt-0">
                {[
                    { icon: Lock, text: "AI-powered authentication" },
                    { icon: Verified, text: "Predictive compliance" },
                    { icon: Scale, text: "Smart load balancing" },
                    { icon: Wrench, text: "AI-assisted admin tools" },
                ].map((item) => (
                    <div key={item.text} className="flex min-w-[96px] grow basis-0 flex-col items-start gap-4">
                        <IconWithBackground
                        variant="neutral"
                        size="small"
                        icon={<item.icon className="h-4 w-4 text-muted-foreground" />}
                        />
                        <span className="text-xs font-normal leading-tight text-muted-foreground">
                        {item.text}
                        </span>
                    </div>
                ))}
             </div>
          </div>
          <div className="flex min-w-[320px] grow basis-0 items-center justify-center self-stretch">
            <Image
              className="h-auto w-full grow basis-0 self-stretch rounded-lg border object-contain shadow-lg"
              src="https://res.cloudinary.com/subframe/image/upload/v1724705603/uploads/302/lkclawjfmqbsplni4flw.png"
              alt="AI Ecosystem Architecture Diagram"
              width={512} // Adjust as needed
              height={600} // Adjust as needed
              data-ai-hint="architecture diagram abstract"
            />
          </div>
        </div>
      </div>


      {/* Final CTA Section */}
      <div className="w-full border-b border-border bg-gradient-to-t from-secondary/30 via-transparent px-6 py-24">
        <div className="mx-auto flex max-w-5xl grow basis-0 flex-wrap items-end justify-center gap-16">
          <div className="flex min-w-[320px] grow basis-0 flex-col items-start gap-16">
            <h2 className="w-full whitespace-pre-wrap text-5xl font-semibold leading-tight tracking-tighter text-foreground">
              {"AI today. \nFuture tomorrow."}
            </h2>
          </div>
          <div className="flex grow basis-0 items-center justify-end gap-2 sm:justify-start md:justify-end">
            <Button variant="default" size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/pricing">Start with AI</Link>
            </Button>
             <Button size="lg" variant="outline" asChild>
                <Link href="/contact-sales">Schedule demo</Link>
             </Button>
          </div>
        </div>
      </div>

      {/* Footer section removed as it's handled by the main layout */}
    </div>
  );
}
