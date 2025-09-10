import { Button } from "@/components/ui/button";
import { Shield, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-primary mr-4" />
            <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FakeGuard AI
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Advanced Machine Learning Platform for
            <span className="block text-primary">Fake Account Detection</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Protect your platform with cutting-edge AI that analyzes account behavior, 
            profile patterns, and content authenticity to identify fake accounts with 
            <span className="text-primary font-semibold">95%+ accuracy</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
            >
              <a
                href={`${import.meta.env.BASE_URL}fake-account-detector-loader.html`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Analysis
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
            >
              <Link to="/docs">Documentation</Link>
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Detection</h3>
              <p className="text-muted-foreground">
                Instant analysis of account authenticity with sub-second response times
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-security rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced ML Models</h3>
              <p className="text-muted-foreground">
                Random Forest, clustering, and NLP techniques for comprehensive analysis
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive dashboards with explainable AI insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};