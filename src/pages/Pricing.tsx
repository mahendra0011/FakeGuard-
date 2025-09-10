import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X, Star, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

type FeatureItem = { label: string; included: boolean };

const freeFeatures: FeatureItem[] = [
  { label: "Username/Handle, Account Age (days), Followers Count, Following Count, Posts Count, Avg Posts/Day, Profile Picture", included: true },
  { label: "Basic Analysis — Engagement Rate, Suspicious Activity", included: true },
  { label: "Special analysis per platform (Facebook, Twitter, LinkedIn, Instagram)", included: false },
  { label: "Export data and download data", included: false },
  { label: "Advanced Detection Features — Profile-based, Activity-based, Content-based (NLP), Network-based", included: false },
];

const standardFeatures: FeatureItem[] = [
  { label: "Username/Handle, Account Age (days), Followers Count, Following Count, Posts Count, Avg Posts/Day, Profile Picture", included: true },
  { label: "Basic Analysis — Engagement Rate, Suspicious Activity", included: true },
  { label: "Special analysis per platform (Facebook, Twitter, LinkedIn, Instagram)", included: true },
  { label: "Export data and download data", included: false },
  { label: "Advanced Detection Features — Profile-based, Activity-based, Content-based (NLP), Network-based", included: false },
];

const premiumFeatures: FeatureItem[] = [
  { label: "Username/Handle, Account Age (days), Followers Count, Following Count, Posts Count, Avg Posts/Day, Profile Picture", included: true },
  { label: "Basic Analysis — Engagement Rate, Suspicious Activity", included: true },
  { label: "Special analysis per platform (Facebook, Twitter, LinkedIn, Instagram)", included: true },
  { label: "Export data and download data", included: true },
  { label: "Advanced Detection Features — Profile-based, Activity-based, Content-based (NLP), Network-based", included: true },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-bg pt-20 pb-16 relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="flex items-center justify-start mb-6">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <Link to="/" aria-label="Go to Home">
              <HomeIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-primary text-white">Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Pricing Plans
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. Beautiful UI, smooth animations, and powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free */}
          <Card className="relative shadow-card hover:shadow-glow transition-all duration-300 group border border-border bg-card/60 backdrop-blur rounded-2xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Free</CardTitle>
              <div className="mt-2 text-4xl font-extrabold">$0</div>
              <div className="text-muted-foreground mt-1">Daily Credits: 2</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {freeFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {f.included ? (
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-danger/70 shrink-0 mt-0.5" />
                    )}
                    <span className={f.included ? "" : "text-muted-foreground line-through"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:animate-bounce">
                Choose Plan
              </Button>
            </CardContent>
          </Card>

          {/* Standard */}
          <Card className="relative shadow-card hover:shadow-glow transition-all duration-300 group border border-border bg-card/70 backdrop-blur rounded-2xl ring-1 ring-primary/20">
            <div className="absolute right-4 top-4">
              <Badge className="bg-gradient-primary text-white">Most Popular</Badge>
            </div>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Standard</CardTitle>
              <div className="mt-2 text-4xl font-extrabold">$5</div>
              <div className="text-sm text-muted-foreground">per month</div>
              <div className="text-muted-foreground mt-1">Daily Credits: 50</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {standardFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {f.included ? (
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-danger/70 shrink-0 mt-0.5" />
                    )}
                    <span className={f.included ? "" : "text-muted-foreground line-through"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:animate-bounce">
                Choose Plan
              </Button>
            </CardContent>
          </Card>

          {/* Premium */}
          <Card className="relative shadow-card hover:shadow-glow transition-all duration-300 group border border-border bg-card/80 backdrop-blur rounded-2xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Premium</CardTitle>
              <div className="mt-2 text-4xl font-extrabold">$15</div>
              <div className="text-sm text-muted-foreground">per month</div>
              <div className="text-muted-foreground mt-1">No daily credits</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {premiumFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {f.included ? (
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-danger/70 shrink-0 mt-0.5" />
                    )}
                    <span className={f.included ? "" : "text-muted-foreground line-through"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:animate-bounce">
                Choose Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;