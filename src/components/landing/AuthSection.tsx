import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, UserPlus, Chrome } from "lucide-react";

export const AuthSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of platforms already protecting their users with FakeGuard AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Login Card */}
          <Card className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Access your existing FakeGuard AI dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300" size="lg">
                Sign In with Email
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-muted-foreground/30 hover:bg-muted" 
                size="lg"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Sign In with Google
              </Button>
            </CardContent>
          </Card>
          
          {/* Register Card */}
          <Card className="shadow-card hover:shadow-glow transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-security rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Create Account</CardTitle>
              <CardDescription>
                Start your free trial with advanced ML detection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-security hover:shadow-glow transition-all duration-300" size="lg">
                Create Free Account
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-muted-foreground/30 hover:bg-muted" 
                size="lg"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Sign Up with Google
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Free 14-day trial • No credit card required
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};