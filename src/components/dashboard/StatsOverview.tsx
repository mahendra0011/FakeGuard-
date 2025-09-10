import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, AlertTriangle, Shield, Target } from "lucide-react";

const stats = [
  {
    title: "Total Accounts Analyzed",
    value: "2,847,392",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Fake Accounts Detected",
    value: "156,429",
    change: "+5.2%",
    trend: "down",
    icon: AlertTriangle,
    color: "text-danger"
  },
  {
    title: "Detection Accuracy",
    value: "97.3%",
    change: "+2.1%",
    trend: "up",
    icon: Target,
    color: "text-success"
  },
  {
    title: "Accounts Protected",
    value: "2,690,963",
    change: "+15.8%",
    trend: "up",
    icon: Shield,
    color: "text-success"
  }
];

export const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-card hover:shadow-glow transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="flex items-center text-sm">
              {stat.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-success mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-success mr-1" />
              )}
              <span className="text-success font-medium">{stat.change}</span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};