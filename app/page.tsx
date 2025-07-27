"use client";

import {
  ArrowRight,
  Sparkles,
  Users,
  Palette,
  PenTool,
  CheckCircle,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import ZinglyLogo from "@/components/ZinglyLogo";

export default function Home() {
  const features = [
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
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechStart",
      content:
        "Cut our marketing prep time by 80%. The ad copy tool alone saved us thousands in copywriting costs.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager, InnovateLab",
      content:
        "The persona generator helped us understand our users better than months of traditional research.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Creative Director, DesignCo",
      content:
        "MoodBoard AI streamlined our creative process. We now present concepts 3x faster to clients.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ZinglyLogo size="sm" className="text-white" />
              Magical AI-Powered MVP Builder
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Build Your Startup
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                10x Faster
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your startup with Zingly&apos;s magical AI tools.
              Generate compelling ad copy, understand your users, and create
              visual inspiration with  AI-powered tools designed for
              startup founders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/tools">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Building Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50 transition-all duration-300"
                >
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">80%</div>
                <div className="text-slate-600">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">3</div>
                <div className="text-slate-600">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">0</div>
                <div className="text-slate-600">Setup Required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Zingly&apos;s magical AI-powered toolkit helps you tackle the most
              time-consuming parts of building a startup. Focus on what matters
              most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-slate-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From idea to execution with Zingly&apos;s magic in minutes, not
              months
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Describe Your Product
              </h3>
              <p className="text-slate-600 text-lg">
                Enter your product name and a brief description of what it does
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                AI Does the Work
              </h3>
              <p className="text-slate-600 text-lg">
                Our AI generates marketing copy, user personas, and visual
                inspiration
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Launch & Iterate
              </h3>
              <p className="text-slate-600 text-lg">
                Use the generated content to launch faster and iterate based on
                results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Loved by Founders
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join hundreds of startup founders who are building faster with
              Zingly&apos;s magical toolkit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Faster?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get started with Zingly&apos;s magical AI-powered toolkit today. No
            credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-400 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Building Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-gray-100 hover:text-blue-400 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
