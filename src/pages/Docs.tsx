import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  MessageSquare,
  Network,
  Eye,
  Brain,
  Zap,
  Target,
  Activity,
  Globe,
  CheckCircle2,
  Layers,
  Sparkles,
  BookOpenText,
  ListChecks,
  ListTree,
  Workflow,
  Gauge,
  Cpu,
  Database,
  Cog,
  ArrowRight,
  ChevronRight,
  BarChart3,
  FileText,
  Settings,
  TrendingUp,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

 type Platform = "all" | "facebook" | "twitter" | "tiktok" | "linkedin" | "instagram";

const Docs = () => {
  const [platform, setPlatform] = useState<Platform>("all");
  const [activeSection, setActiveSection] = useState<"overview" | "features" | "pipeline" | "analytics">("overview");

  // Platform-specific detection features (specialized heuristics)
  const platformDetectionFeatures: Record<Exclude<Platform, "all">, string[]> = {
    facebook: [
      "Duplicate names and throwaway handles",
      "Spammy groups joined and low-quality community activity",
      "No family/friends tagged across posts",
    ],
    twitter: [
      "Mass retweets with very low original tweets",
      "Following > 2000 but < 50 followers",
      "Hashtag stuffing and templated replies",
    ],
    tiktok: [
      "Zero original videos (reposted content only)",
      "Fake engagement (views/likes without comments)",
      "Stock/AI-generated thumbnails",
    ],
    linkedin: [
      "Incomplete job history or fake companies",
      "No mutual connections; low endorsements",
      "Irrelevant/randomly connected network",
    ],
    instagram: [
      "Bot-like follow/unfollow cycles",
      "Low-quality or stock content with engagement pods",
      "Bio link spam; mass-tagging and giveaway scams",
    ],
  };

  // Platform-specific input requirements (what data the detector expects to score best)
  const platformInputRequirements: Record<Exclude<Platform, "all">, string[]> = {
    facebook: [
      "Username/Display Name",
      "Friends count / Groups joined",
      "Posts & media (images/videos) samples",
      "Tagged family/friends signals",
    ],
    twitter: [
      "Followers and following counts",
      "Tweets/Retweets ratio and timing",
      "Hashtags usage, reply quality",
      "Profile age and verification",
    ],
    tiktok: [
      "Videos count and originality",
      "Views/Likes/Comments distribution",
      "Posting frequency and rhythm",
      "Profile metadata & completeness",
    ],
    linkedin: [
      "Work/Education history completeness",
      "Connections and endorsements",
      "Company authenticity signals",
      "Bio/About and location consistency",
    ],
    instagram: [
      "Followers / following counts",
      "Posts/Reels count and posting frequency",
      "Engagement distribution (likes/comments/saves)",
      "Bio, profile picture quality, external link checks",
    ],
  };

  const sections: { id: "overview" | "features" | "pipeline" | "analytics"; label: string; icon: any }[] = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "features", label: "Features", icon: Target },
    { id: "pipeline", label: "Pipeline", icon: Activity },
    { id: "analytics", label: "Technical", icon: Cpu },
  ];

  const renderPlatformSection = () => {
    if (platform === "all") {
      return (
        <div className="text-muted-foreground text-center py-6">
          <Globe className="w-10 h-10 mx-auto mb-3 text-primary/60" />
          <p>Select a platform to see specialized detection features and input requirements.</p>
        </div>
      );
    }
    const features = platformDetectionFeatures[platform];
    const inputs = platformInputRequirements[platform];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Detection Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-primary" />
              Input Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {inputs.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-bg pt-20 pb-16 relative">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top-left Home button */}
        <div className="flex items-center justify-start mb-6">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <Link to="/" aria-label="Go to Home">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
        </div>
        {/* Hero */}
        <div className="text-center space-y-6 mb-10">
          <div className="flex items-center justify-center mb-1">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-glow">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <Badge className="bg-gradient-primary text-white text-base px-4 py-2">Documentation</Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            FakeGuard AI Documentation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            How our ML-based system detects fake accounts across platforms using profile, activity, content, and network signals.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Real-time Detection</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>High Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Explainable Signals</span>
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "outline"}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] ${
                activeSection === section.id ? "bg-gradient-primary text-white shadow-glow" : "hover:bg-primary/10"
              }`}
            >
              <section.icon className="w-4 h-4" />
              {section.label}
            </Button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeSection === "overview" && (
          <div className="space-y-10">
            {/* Platform-Specific Analysis */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Platform-Specific Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Select a platform to see specialized detection features and input requirements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {/* Facebook brand colors (#1877F2) */ }
                  <div
                    className="p-3 rounded-lg border shadow-sm hover:shadow-md transition-all duration-200"
                    style={{ background: "rgba(24,119,242,0.10)", borderColor: "rgba(24,119,242,0.30)" }}
                  >
                    <div className="text-sm font-semibold" style={{ color: "#1877f2" }}>Facebook</div>
                    <div className="text-xs text-muted-foreground">Groups, friends, family tags</div>
                  </div>

                  {/* Twitter (X) brand colors (#1DA1F2) */ }
                  <div
                    className="p-3 rounded-lg border shadow-sm hover:shadow-md transition-all duration-200"
                    style={{ background: "rgba(29,161,242,0.10)", borderColor: "rgba(29,161,242,0.30)" }}
                  >
                    <div className="text-sm font-semibold" style={{ color: "#1da1f2" }}>Twitter (X)</div>
                    <div className="text-xs text-muted-foreground">Tweets/retweets, hashtags, ratio</div>
                  </div>

                  {/* Instagram brand colors (changed to blue gradient) */ }
                  <div
                    className="p-3 rounded-lg border shadow-sm hover:shadow-md transition-all duration-200"
                    style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(147,51,234,0.15))", borderColor: "rgba(59,130,246,0.40)" }}
                  >
                    <div className="text-sm font-semibold" style={{ color: "#3B82F6" }}>Instagram</div>
                    <div className="text-xs text-muted-foreground">Bio, media authenticity, engagement</div>
                  </div>

                  {/* LinkedIn brand colors (#0077B5) */ }
                  <div
                    className="p-3 rounded-lg border shadow-sm hover:shadow-md transition-all duration-200"
                    style={{ background: "rgba(0,119,181,0.10)", borderColor: "rgba(0,119,181,0.30)" }}
                  >
                    <div className="text-sm font-semibold" style={{ color: "#0077b5" }}>LinkedIn</div>
                    <div className="text-xs text-muted-foreground">Work, education, endorsements</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:items-center">
                  <label htmlFor="platform" className="text-sm font-medium text-muted-foreground">
                    Select a social media platform
                  </label>
                  <select
                    id="platform"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value as Platform)}
                    className="w-full md:w-64 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="all">All Platforms</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter (X)</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="linkedin">LinkedIn</option>
                  </select>
                </div>

                {renderPlatformSection()}
              </CardContent>
            </Card>

            {/* Detection Features */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpenText className="w-5 h-5 text-primary" />
                  Detection Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Our AI system analyzes multiple dimensions of user behavior and content to identify fake profiles with high accuracy.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-card hover:shadow-glow transition-all duration-300 group animate-[fadeIn_0.5s_ease-out]">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle>Profile</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Username Anomalies — Random characters, numbers, repeated patterns (e.g., user_12345xx)</li>
                        <li>Profile Picture Analysis — Missing, stock images, stolen images detection</li>
                        <li>Bio/About Section — Very short, empty, or spammy keywords analysis</li>
                        <li>Account Age Verification — Newly created accounts are more likely fake</li>
                        <li>Profile Completeness — Missing work history, education, or location</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-glow transition-all duration-300 group animate-[fadeIn_0.6s_ease-out]">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Activity className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle>Activity</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Posting frequency — Too many/day (bots) or too few (inactive fakes)</li>
                        <li>Login patterns — Unusual IPs/locations; geo-consistency issues</li>
                        <li>Engagement ratio — Very high following vs very low followers</li>
                        <li>Likes/comments ratio — Sudden spikes (buying likes)</li>
                        <li>Repetitive behavior — Same content across groups/accounts</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-glow transition-all duration-300 group animate-[fadeIn_0.7s_ease-out]">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle>Content</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Language patterns — Repetitive, low-quality, excessive hashtags</li>
                        <li>Spam keywords — “free”, “follow me”, “discount”, “crypto giveaway”, “click link”</li>
                        <li>Sentiment analysis — Highly polarized text (all positive/negative)</li>
                        <li>Fake media — Stolen images/videos, deepfakes</li>
                        <li>Comments/posts similarity — Exact duplicates across accounts</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card hover:shadow-glow transition-all duration-300 group animate-[fadeIn_0.8s_ease-out]">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Network className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle>Network</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Friend/following ratio — E.g., following 5000 but only 10 followers</li>
                        <li>Clusters of fake users — Many accounts linked to the same group/page</li>
                        <li>Connection quality (LinkedIn) — Low endorsements, irrelevant connections</li>
                        <li>Interaction network — Likes/comments mostly from other suspicious accounts</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* PIPELINE */}
        {activeSection === "pipeline" && (
          <div className="space-y-10">
            {/* How It Works */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-primary" />
                  How Our AI Detection System Works
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex flex-col items-center space-y-4 p-6 bg-muted rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-center text-foreground">Data Collection</h3>
                  <p className="text-sm text-muted-foreground text-center max-w-xs">
                    Gather profile data, activity patterns, and content from social media platforms.
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90" />
                </div>

                <div className="flex flex-col items-center space-y-4 p-6 bg-muted rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cog className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-center text-foreground">Feature Engineering</h3>
                  <p className="text-sm text-muted-foreground text-center max-w-xs">
                    Convert raw data into numerical features using NLP and statistical analysis.
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90" />
                </div>

                <div className="flex flex-col items-center space-y-4 p-6 bg-muted rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-center text-foreground">AI Analysis</h3>
                  <p className="text-sm text-muted-foreground text-center max-w-xs">
                    Apply machine learning models to detect patterns and anomalies.
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90" />
                </div>

                <div className="flex flex-col items-center space-y-4 p-6 bg-muted rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-center text-foreground">Risk Scoring</h3>
                  <p className="text-sm text-muted-foreground text-center max-w-xs">
                    Generate confidence scores and detailed reports for each profile.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Detection Process Flow 1-4 */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListTree className="w-5 h-5 text-primary" />
                  Detection Process Flow
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 bg-muted rounded-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">1) Data Ingestion & Preprocessing</h3>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>• Profile Scraping</li>
                        <li>• Data Cleaning</li>
                        <li>• Text Preprocessing (tokenization, normalization)</li>
                        <li>• Image Analysis (perceptual checks, metadata)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center ml-4">
                    <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 bg-muted rounded-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">2) Multi-dimensional Feature Extraction</h3>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>• Profile Features</li>
                        <li>• Activity Patterns</li>
                        <li>• Content Analysis</li>
                        <li>• Network Topology</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center ml-4">
                    <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 bg-muted rounded-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">3) Machine Learning Pipeline</h3>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>• <strong>Random Forest:</strong> Profile Classification</li>
                        <li>• <strong>K-Means Clustering:</strong> Anomaly Detection</li>
                        <li>• <strong>Neural Network (NLP):</strong> Content Analysis</li>
                        <li>• <strong>Graph Neural Network:</strong> Network Analysis</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center ml-4">
                    <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-xl border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">4) Ensemble Scoring & Risk Assessment</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="shadow-sm hover:shadow-md transition-all duration-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-green-600">0–30%</CardTitle>
                      </CardHeader>
                      <CardContent className="text-xs text-muted-foreground">Low Risk — Likely Genuine</CardContent>
                    </Card>
                    <Card className="shadow-sm hover:shadow-md transition-all duration-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-yellow-600">31–70%</CardTitle>
                      </CardHeader>
                      <CardContent className="text-xs text-muted-foreground">Medium Risk — Requires Review</CardContent>
                    </Card>
                    <Card className="shadow-sm hover:shadow-md transition-all duration-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-red-600">71–100%</CardTitle>
                      </CardHeader>
                      <CardContent className="text-xs text-muted-foreground">High Risk — Likely Fake</CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* FEATURES */}
        {activeSection === "features" && (
          <div className="space-y-10">
            {/* Feature Flow Showcase */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Feature Flow Showcase
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  End-to-end flow from inputs to insights with animated transitions.
                </p>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Input */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Input</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">Profiles, activity, content</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-primary arrow-flow" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90 arrow-flow" />
                </div>

                {/* Analysis */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0.05s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Analysis</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">Cleaning, NLP, feature engineering</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-primary arrow-flow" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90 arrow-flow" />
                </div>

                {/* Modeling */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Modeling</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">RF, K-Means, NN, GNN</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-primary arrow-flow" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90 arrow-flow" />
                </div>

                {/* Scoring */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0.15s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Gauge className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Scoring</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">Confidence & thresholds</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-primary arrow-flow" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90 arrow-flow" />
                </div>

                {/* Reporting */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Reporting</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">Insights & recommendations</p>
                </div>
              </CardContent>
            </Card>

            {/* Detection Algorithms & Methodologies */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle>Detection Algorithms & Methodologies</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <h3 className="font-semibold">Profile Analysis Algorithms</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Username Pattern Matching — Regex + Levenshtein distance</li>
                    <li>Image Similarity Detection — Perceptual hashing + reverse image search</li>
                    <li>Bio Text Analysis — TF-IDF + spam keyword scoring</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Activity Pattern Analysis</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Temporal Analysis — Time series + anomaly detection</li>
                    <li>Geolocation Verification — IP geolocation + behavior consistency</li>
                    <li>Engagement Analysis — Statistical outliers + ratio checks</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">NLP Content Processing</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>SpaCy Pipeline — Tokenization, POS, NER, Sentiment</li>
                    <li>Duplicate Detection — Cosine similarity + Jaccard index</li>
                    <li>Language Model Scoring — Transformer-based text quality</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Graph Network Analysis</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Community Detection — Louvain clustering</li>
                    <li>Centrality Measures — PageRank + Betweenness</li>
                    <li>Link Prediction — Graph neural networks for authenticity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Technical Implementation */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  Technical Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <h3 className="font-semibold">Machine Learning Pipeline</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Feature Engineering:</strong> convert behavior into numeric features</li>
                    <li><strong>Model Selection:</strong> Random Forest, K-Means, Neural Networks</li>
                    <li><strong>Anomaly Detection:</strong> unsupervised patterns</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">NLP Processing & Visualization</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Text Analysis:</strong> SpaCy-based pattern recognition</li>
                    <li><strong>Content Similarity:</strong> duplicate/near-duplicate detection</li>
                    <li><strong>Visualization:</strong> Seaborn, Matplotlib, Plotly (research)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* TECHNICAL (Architecture, Performance) */}
        {activeSection === "analytics" && (
          <div className="space-y-10">
            {/* Technical Flow Showcase */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-primary" />
                  Technical Flow Showcase
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  End-to-end architecture from data sources to reporting, with animated flow.
                </p>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Data Sources */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Data Sources</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">Profiles, activity logs, content, network</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-primary arrow-flow" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90 arrow-flow" />
                </div>

                {/* Preprocessing */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0.05s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Preprocessing</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">Cleaning, normalization, tokenization</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-primary arrow-flow" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90 arrow-flow" />
                </div>

                {/* Feature Engineering */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Feature Engineering</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">Numeric, categorical, graph features</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-primary arrow-flow" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90 arrow-flow" />
                </div>

                {/* Modeling */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0.15s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Modeling</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">RF, K-Means, NN, GNN ensembles</p>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-7 h-7 text-primary arrow-flow" />
                </div>
                <div className="md:hidden">
                  <ChevronRight className="w-6 h-6 text-primary rotate-90 arrow-flow" />
                </div>

                {/* Output & Reporting */}
                <div className="group flex flex-col items-center space-y-3 p-5 bg-muted rounded-xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover-scale cyber-glow fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground text-center">Output & Reporting</h3>
                  <p className="text-xs text-muted-foreground text-center max-w-[12rem]">Scores, explanations, insights</p>
                </div>
              </CardContent>
            </Card>
            {/* System Architecture & Data Flow */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle>System Architecture & Data Flow</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-3">
                  <h3 className="font-semibold">Input Layer</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Profile Data:</strong> Name, Bio, Photos</li>
                    <li><strong>Activity Logs:</strong> Posts, Logins, Interactions</li>
                    <li><strong>Content:</strong> Text, Images, Videos</li>
                    <li><strong>Network:</strong> Connections, Followers</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Processing Layer</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Feature Engineering — numeric & categorical</li>
                    <li>Normalization — scaling/standardization</li>
                    <li>Dimensionality Reduction — PCA, feature selection</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Machine Learning Models</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Random Forest — <em>~85% accuracy (profile classification)</em></li>
                    <li>K-Means — anomaly detection (unsupervised)</li>
                    <li>Neural Network — content analysis (NLP)</li>
                    <li>Graph NN — network analysis (relationships)</li>
                  </ul>
                </div>
                <div className="md:col-span-3 space-y-3">
                  <h3 className="font-semibold">Output & Reporting</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Risk Score:</strong> 0–100% confidence</li>
                    <li><strong>Feature Importance:</strong> key indicators ranked</li>
                    <li><strong>Detailed Report:</strong> explanations & evidence</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* System Performance & Evaluation */}
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-primary" />
                  System Performance & Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <h3 className="font-semibold">Detection Accuracy</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Overall Accuracy:</strong> 94.7%</li>
                    <li><strong>Precision:</strong> 92.3%</li>
                    <li><strong>Recall:</strong> 96.1%</li>
                    <li><strong>F1-Score:</strong> 94.2%</li>
                  </ul>

                  <h3 className="font-semibold mt-4">Processing Speed</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Avg per-profile:</strong> 2.3s</li>
                    <li><strong>Batch processing:</strong> 1000/min</li>
                    <li><strong>Real-time analysis:</strong> &lt;5s</li>
                    <li><strong>Feature extraction:</strong> 0.8s</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Training Dataset</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Total labeled profiles:</strong> 2.5M</li>
                    <li><strong>Genuine:</strong> 1.8M</li>
                    <li><strong>Fake:</strong> 700K</li>
                    <li><strong>Test set:</strong> 500K</li>
                  </ul>

                  <h3 className="font-semibold mt-4">Platform-Specific Performance</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Facebook:</strong> 96.2% accuracy</li>
                    <li><strong>Twitter (X):</strong> 94.8% accuracy</li>
                    <li><strong>TikTok:</strong> 92.1% accuracy</li>
                    <li><strong>LinkedIn:</strong> 97.4% accuracy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Docs;