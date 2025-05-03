import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Zap, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-20 py-16 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          About ANOne
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We're passionate about building software that empowers businesses to achieve more. Learn about our journey, our values, and the team driving ANOne forward.
        </p>
      </section>

      {/* Mission & Vision Section */}
       <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <Target className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              To provide innovative and intuitive SaaS solutions that simplify complex business processes, enabling our customers to focus on growth and success.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/mission/600/400"
              alt="Team collaborating on a whiteboard"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border object-cover aspect-[3/2]"
              data-ai-hint="team collaboration meeting"
            />
          </div>
       </section>

        {/* Our Values Section */}
        <section className="w-full max-w-6xl space-y-12">
         <div className="text-center space-y-3">
           <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
           <p className="text-muted-foreground text-lg">The principles that guide everything we do.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Card className="text-center p-6 hover:shadow-md transition-shadow">
             <div className="flex justify-center mb-4">
                <Heart className="w-10 h-10 text-accent" />
             </div>
             <h3 className="mb-2 text-xl font-semibold">Customer Obsession</h3>
             <CardContent className="p-0">
               <p className="text-muted-foreground">We succeed when our customers succeed. Their needs drive our decisions.</p>
             </CardContent>
           </Card>
           <Card className="text-center p-6 hover:shadow-md transition-shadow">
             <div className="flex justify-center mb-4">
                <Zap className="w-10 h-10 text-accent" />
             </div>
             <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
             <CardContent className="p-0">
               <p className="text-muted-foreground">We constantly seek better ways to solve problems and deliver value.</p>
             </CardContent>
           </Card>
           <Card className="text-center p-6 hover:shadow-md transition-shadow">
             <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-accent" />
             </div>
             <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
             <CardContent className="p-0">
               <p className="text-muted-foreground">We operate with transparency, honesty, and respect in all interactions.</p>
             </CardContent>
           </Card>
         </div>
       </section>


      {/* Company Story Section */}
       <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-secondary py-16 px-8 rounded-lg">
         <div>
            <Image
              src="https://picsum.photos/seed/story/600/450"
              alt="Early prototype sketch"
              width={600}
              height={450}
              className="rounded-lg shadow-lg border object-cover aspect-[4/3]"
              data-ai-hint="startup garage office sketch"
            />
         </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
             Founded in [Year] by a small group of industry veterans, ANOne started with a simple idea: business software shouldn't be complicated. Frustrated by existing tools, we set out to build a platform that was powerful yet easy to use.
            </p>
             <p className="text-lg text-muted-foreground">
             Through dedication and countless hours of development, we launched our first version, quickly gaining traction with businesses looking for a better way. Today, we're proud to serve thousands of customers worldwide, continuously innovating and staying true to our founding principles.
             </p>
          </div>
       </section>

       {/* Meet the Team Section */}
       <section className="w-full max-w-6xl space-y-12">
         <div className="text-center space-y-3">
           <h2 className="text-3xl md:text-4xl font-bold">Meet Our Leadership</h2>
           <p className="text-muted-foreground text-lg">The passionate individuals guiding ANOne's vision.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { name: "Jane Doe", title: "CEO & Co-Founder", imgSeed: "ceo" },
             { name: "John Smith", title: "CTO & Co-Founder", imgSeed: "cto" },
             { name: "Alex Johnson", title: "Head of Product", imgSeed: "product" },
            //  { name: "Emily White", title: "Head of Marketing", imgSeed: "marketing" },
            //  { name: "Michael Brown", title: "Head of Sales", imgSeed: "sales" },
            //  { name: "Sarah Green", title: "Head of Customer Success", imgSeed: "success" },
           ].map((member) => (
             <Card key={member.name} className="overflow-hidden text-center">
               <Image
                 src={`https://picsum.photos/seed/${member.imgSeed}/400/400`}
                 alt={`Headshot of ${member.name}`}
                 width={400}
                 height={400}
                 className="w-full h-64 object-cover"
                 data-ai-hint="professional headshot person"
               />
               <CardContent className="p-4">
                 <h3 className="text-lg font-semibold">{member.name}</h3>
                 <p className="text-sm text-accent">{member.title}</p>
               </CardContent>
             </Card>
           ))}
         </div>
       </section>

       {/* Join Us Section */}
       <section className="w-full max-w-4xl text-center space-y-6 py-16">
         <h2 className="text-3xl md:text-4xl font-bold">Interested in Joining Us?</h2>
         <p className="text-lg text-muted-foreground">
           We're always looking for talented and passionate individuals to join our growing team. Check out our open positions.
         </p>
         <Button size="lg" variant="outline">
           See Careers <ArrowRight className="ml-2 h-5 w-5" />
         </Button>
       </section>

    </div>
  );
}
