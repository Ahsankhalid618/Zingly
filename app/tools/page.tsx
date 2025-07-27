import { PenTool, Users, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ZinglyLogo from "@/components/ZinglyLogo";

export default function ToolsPage() {
  const tools = [
    {
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      title: "Ad Copy Remix",
      description:
        "Generate compelling marketing copy for Google Ads, Instagram, Twitter, and email campaigns in seconds.",
      benefits: [
        "Google Ads optimization",
        "Social media ready",
        "Email subject lines",
        "Character count perfect",
      ],
      link: "/tools/adcopy",
      examples: [
        "Increased CTR by 45% for SaaS landing page",
        "Generated viral social media posts",
        "Optimized email campaigns with 60% rate",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "QuickPersona",
      description:
        "Create detailed user personas with demographics, goals, pain points, and authentic quotes.",
      benefits: [
        "Demographic insights",
        "Goal identification",
        "Pain point analysis",
        "Tech familiarity scoring",
      ],
      link: "/tools/persona",
      examples: [
        "Created 5 detailed user personas in minutes",
        "Identified key user pain points",
        "Generated actionable user insights",
      ],
    },
    {
      icon: <Palette className="w-8 h-8 text-green-600" />,
      title: "MoodBoard AI",
      description:
        "Generate visual inspiration and mood boards to define your brand aesthetic and design direction.",
      benefits: [
        "Theme-based curation",
        "Visual inspiration",
        "Brand direction",
        "Design consistency",
      ],
      link: "/tools/moodboard",
      examples: [
        "Created cohesive brand identity in hours",
        "Generated unique visual themes",
        "Streamlined design process by 70%",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ZinglyLogo size="sm" className="text-white" />
            Zingly&apos;s Magical AI Tools
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            AI-Powered Tools for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Startups
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Launch your startup faster with Zingly&apos;s magical suite of AI
            tools. Generate marketing copy, understand your users, and create
            stunning visuals in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Card
              key={tool.title}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {tool.icon}
                  <span className="text-2xl font-bold">{tool.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {tool.description}
                </p>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {tool.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">
                    Success Stories:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {tool.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={tool.link}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Launch Tool
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
