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
import { motion } from "motion/react";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

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
      <div className="h-[40rem] w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <ZinglyLogo size="sm" className="text-white" />
              Magical AI-Powered MVP Builder
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 0.2,
              }}
              className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-6 leading-tight"
            >
              Build Your Startup
              <span className="block">10x Faster</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-8"
            >
              Transform your startup with Zingly&apos;s magical AI tools.
              Generate compelling ad copy, understand your users, and create
              visual inspiration with AI-powered tools designed for startup
              founders.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
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
                  className="px-8 py-4 text-lg border-slate-300  transition-all duration-300"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-50">80%</div>
                <div className="text-neutral-300">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-50">3</div>
                <div className="text-neutral-300">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-50">0</div>
                <div className="text-neutral-300">Setup Required</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Zingly&apos;s magical AI-powered toolkit helps you tackle the most
              time-consuming parts of building a startup. Focus on what matters
              most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg dark:bg-slate-800 dark:border-slate-700"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
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
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From idea to execution with Zingly&apos;s magic in minutes, not
              months
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Describe Your Product
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Enter your product name and a brief description of what it does
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                AI Does the Work
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Our AI generates marketing copy, user personas, and visual
                inspiration
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Launch & Iterate
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Loved by Founders
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Join hundreds of startup founders who are building faster with
              Zingly&apos;s magical toolkit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg dark:bg-slate-800 dark:border-slate-700"
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
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </p>
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
                className="bg-white border-white text-blue-600 hover:bg-gray-100 hover:text-blue-400 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
