"use client";

import { Brain, Zap, Shield, TrendingUp } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI",
      description: "Powered by state-of-the-art language models for natural conversations"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Get answers immediately with lightning-fast processing"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security for all your sensitive data"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Improves over time by learning from interactions"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-xl flex items-center justify-center mb-4">
            <feature.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
