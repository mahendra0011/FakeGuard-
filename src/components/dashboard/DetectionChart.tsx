import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const weeklyData = [
  { day: "Mon", real: 1840, fake: 160, total: 2000 },
  { day: "Tue", real: 1920, fake: 180, total: 2100 },
  { day: "Wed", real: 1650, fake: 150, total: 1800 },
  { day: "Thu", real: 2100, fake: 200, total: 2300 },
  { day: "Fri", real: 1980, fake: 170, total: 2150 },
  { day: "Sat", real: 1200, fake: 100, total: 1300 },
  { day: "Sun", real: 1050, fake: 90, total: 1140 },
];

const modelPerformance = [
  { model: "Random Forest", accuracy: 97.3, precision: 94.8, recall: 96.1 },
  { model: "K-Means Clustering", accuracy: 89.5, precision: 87.2, recall: 91.8 },
  { model: "NLP Sentiment", accuracy: 85.7, precision: 83.4, recall: 88.9 },
  { model: "Network Analysis", accuracy: 91.2, precision: 89.7, recall: 92.5 },
];

const riskDistribution = [
  { name: "Low Risk", value: 75, color: "#10b981" },
  { name: "Medium Risk", value: 20, color: "#f59e0b" },
  { name: "High Risk", value: 5, color: "#ef4444" },
];

const chartConfig = {
  real: {
    label: "Real Accounts",
    color: "hsl(var(--success))",
  },
  fake: {
    label: "Fake Accounts", 
    color: "hsl(var(--danger))",
  },
};

export const DetectionChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Weekly Detection Trends */}
      <Card className="shadow-card col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
            Weekly Detection Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="real"
                stackId="1"
                stroke="hsl(var(--success))"
                fill="hsl(var(--success))"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="fake"
                stackId="1"
                stroke="hsl(var(--danger))"
                fill="hsl(var(--danger))"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Risk Distribution */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-security rounded-full"></div>
            Account Risk Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                          <p className="font-medium">{data.name}</p>
                          <p className="text-sm text-muted-foreground">{data.value}% of accounts</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {riskDistribution.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Model Performance */}
      <Card className="shadow-card lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
            ML Model Performance Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-80">
            <BarChart data={modelPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis domain={[75, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="accuracy" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="precision" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="recall" fill="hsl(var(--warning))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-sm font-medium">Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full" />
              <span className="text-sm font-medium">Precision</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-warning rounded-full" />
              <span className="text-sm font-medium">Recall</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};