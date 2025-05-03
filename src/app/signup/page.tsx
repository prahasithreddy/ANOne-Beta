import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignupPage({ searchParams }: { searchParams: { plan?: string } }) {
  const plan = searchParams?.plan || 'default';

  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.14))] flex-col items-center justify-center py-12 px-4">
       <Link href="/pricing" className="absolute top-20 left-4 md:left-8 flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Pricing
       </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign Up for ANOne</CardTitle>
          <CardDescription>
            You're signing up for the <span className="font-semibold capitalize">{plan}</span> plan.
            <br />
            (This is a placeholder page)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Implementation of the actual signup form would go here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
