import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Upload, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  FileText, 
  Eye,
  Network,
  AlertTriangle
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Smart Data Upload",
    description: "Upload CSV/JSON datasets with automatic schema detection and validation",
    features: ["Drag & drop interface", "Real-time validation", "Batch processing"],
    gradient: "bg-gradient-primary"
  },
  {
    icon: Brain,
    title: "Advanced ML Models",
    description: "Multiple machine learning algorithms working together for maximum accuracy",
    features: ["Random Forest Classifier", "K-Means Clustering", "Deep NLP Analysis"],
    gradient: "bg-gradient-security"
  },
  {
    icon: BarChart3,
    title: "Interactive Analytics",
    description: "Comprehensive dashboards with real-time insights and visualizations",
    features: ["Real-time charts", "Custom filters", "Export reports"],
    gradient: "bg-gradient-primary"
  },
  {
    icon: Shield,
    title: "Explainable AI",
    description: "Understand exactly why accounts are flagged with detailed explanations",
    features: ["SHAP analysis", "Feature importance", "Decision trees"],
    gradient: "bg-gradient-security"
  },
  {
    icon: Zap,
    title: "Real-time Detection",
    description: "Instant analysis with sub-second response times for live monitoring",
    features: ["API integration", "Webhook support", "Auto-alerts"],
    gradient: "bg-gradient-primary"
  },
  {
    icon: Users,
    title: "Role Management",
    description: "Secure access control with admin and user roles via Supabase Auth",
    features: ["Multi-user support", "Permission levels", "Audit logs"],
    gradient: "bg-gradient-security"
  }
];

const analysisFeatures = [
  {
    icon: FileText,
    title: "Profile Analysis",
    description: "Username patterns, bio analysis, profile completeness",
    color: "text-primary"
  },
  {
    icon: Eye,
    title: "Activity Patterns",
    description: "Post frequency, engagement ratios, temporal behavior",
    color: "text-success"
  },
  {
    icon: Network,
    title: "Network Analysis",
    description: "Follower patterns, mutual connections, clustering",
    color: "text-warning"
  },
  {
    icon: AlertTriangle,
    title: "Content Analysis",
    description: "NLP sentiment, spam detection, keyword analysis",
    color: "text-danger"
  }
];

export const FeatureShowcase = () => {
  return (
    <section className="py-20 bg-gradient-bg" id="features">
      <div className="container mx-auto px-4">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful ML Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge machine learning with intuitive interfaces 
            to deliver unmatched fake account detection capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className={`w-16 h-16 ${feature.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((feat, idx) => (
                    <Badge key={idx} variant="secondary" className="mr-2 mb-1">
                      {feat}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analysis Types */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Multi-dimensional Analysis</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI examines accounts from multiple angles to ensure comprehensive detection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analysisFeatures.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 text-center">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 ${feature.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};