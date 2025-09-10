import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/landing/Hero";
import { AuthSection } from "@/components/landing/AuthSection";
import { FeatureShowcase } from "@/components/features/FeatureShowcase";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { DetectionChart } from "@/components/dashboard/DetectionChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  BarChart3, 
  Shield, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  PlayCircle
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Live Demo Dashboard Section */}
      <section className="py-20 bg-card" id="demo">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-primary text-white">
              Live Demo Dashboard
            </Badge>
            <h2 className="text-4xl font-bold mb-4">See FakeGuard AI in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience real-time fake account detection with our interactive dashboard
            </p>
          </div>
          
          {/* Stats Overview */}
          <StatsOverview />
          
          {/* Detection Charts */}
          <DetectionChart />
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Upload Dataset</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Upload your account data for instant analysis
                </p>
                <Button className="w-full bg-gradient-primary">
                  Try Upload Demo
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-security rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Live Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Watch real-time detection algorithms at work
                </p>
                <Button className="w-full bg-gradient-security">
                  View Live Demo
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle>API Testing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Test our prediction API with sample data
                </p>
                <Button className="w-full bg-gradient-primary">
                  Test API
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Feature Showcase */}
      <FeatureShowcase />
      
      {/* Use Cases Section */}
      <section className="py-20 bg-card" id="use-cases">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Who Benefits from FakeGuard AI?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform serves diverse industries and use cases, protecting millions of users worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Social Media Platforms",
                description: "Protect your community from fake accounts, bots, and spam",
                benefits: ["User trust", "Platform integrity", "Reduced moderation costs"]
              },
              {
                icon: Shield,
                title: "Financial Services",
                description: "Detect fraudulent accounts before they can cause damage",
                benefits: ["Fraud prevention", "Compliance", "Risk reduction"]
              },
              {
                icon: Globe,
                title: "E-commerce Sites",
                description: "Identify fake reviews and malicious seller accounts",
                benefits: ["Review integrity", "Customer trust", "Fair marketplace"]
              },
              {
                icon: BarChart3,
                title: "Research Organizations",
                description: "Clean datasets for accurate social media research",
                benefits: ["Data quality", "Research validity", "Academic insights"]
              },
              {
                icon: Users,
                title: "Dating Platforms",
                description: "Ensure authentic user profiles and safe interactions",
                benefits: ["User safety", "Profile authenticity", "Better matches"]
              },
              {
                icon: Shield,
                title: "Gaming Communities",
                description: "Detect cheating accounts and maintain fair play",
                benefits: ["Fair competition", "Community health", "Player retention"]
              }
            ].map((useCase, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-success mr-2" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Authentication Section */}
      <AuthSection />
      
      {/* Footer CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Platform?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of platforms already using FakeGuard AI to maintain safe, authentic communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
