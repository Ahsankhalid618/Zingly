"use client";

import { Check, Star, Zap, Crown, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ZinglyLogo from "@/components/ZinglyLogo";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individual founders and small teams",
      icon: <ZinglyLogo size="md" className="text-blue-600" />,
      features: [
        "5 Ad Copy generations per day",
        "2 User Personas per month",
        "1 MoodBoard generation per month",
        "Basic templates",
        "Community support",
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Ideal for growing startups and marketing teams",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      features: [
        "Unlimited Ad Copy generations",
        "Unlimited User Personas",
        "Unlimited MoodBoard generations",
        "Advanced templates",
        "Priority support",
        "Export to multiple formats",
        "Team collaboration",
        "Analytics dashboard",
      ],
      cta: "Start Pro Trial",
      popular: true,
      gradient: "from-blue-600 to-purple-600",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large teams and agencies",
      icon: <Crown className="w-8 h-8 text-yellow-600" />,
      features: [
        "Everything in Pro",
        "Custom AI training",
        "White-label solutions",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechStart",
      content:
        "The Pro plan paid for itself in the first week. We saved thousands on copywriting.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      content:
        "Unlimited generations let us iterate quickly. Our conversion rates improved by 40%.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ZinglyLogo size="sm" className="text-white" />
              Zingly&apos;s Magical Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Choose Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Growth Plan
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`
                  relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl
                  ${
                    plan.popular
                      ? "ring-2 ring-blue-500 shadow-xl"
                      : "shadow-lg"
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <CardHeader className={`pt-8 ${plan.popular ? "pt-12" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {plan.icon}
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      {plan.name}
                    </CardTitle>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-slate-900">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-slate-600">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-slate-600 mt-2">{plan.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "/tools"}
                  >
                    <Button
                      className={`
                        w-full py-3 text-lg font-semibold transition-all duration-300
                        ${
                          plan.popular
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                            : "bg-slate-900 hover:bg-slate-800 text-white"
                        }
                      `}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Loved by Growing Startups
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how our Pro plan is helping startups scale their marketing
              efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-medium text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Can I upgrade or downgrade my plan anytime?
              </h3>
              <p className="text-slate-600">
                Yes! You can change your plan at any time. Upgrades take effect
                immediately, and downgrades take effect at the next billing
                cycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Is there a free trial for paid plans?
              </h3>
              <p className="text-slate-600">
                Yes, we offer a 7-day free trial for our Pro plan. No credit
                card required to start your trial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-slate-600">
                We accept all major credit cards, PayPal, and bank transfers for
                Enterprise plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of founders who are building faster with our
            AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
