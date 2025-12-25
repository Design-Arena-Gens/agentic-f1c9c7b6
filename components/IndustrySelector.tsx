"use client";

import { Building2, HeartPulse, DollarSign, ShoppingBag, GraduationCap, Plane } from "lucide-react";

interface IndustrySelectorProps {
  onSelectIndustry: (industry: string) => void;
}

export default function IndustrySelector({ onSelectIndustry }: IndustrySelectorProps) {
  const industries = [
    {
      id: "tech",
      name: "Technology & SaaS",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      description: "Technical support, onboarding, and product guidance"
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: HeartPulse,
      color: "from-green-500 to-emerald-500",
      description: "Patient queries, appointment scheduling, and medical info"
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-500",
      description: "Account management, transactions, and financial advice"
    },
    {
      id: "retail",
      name: "Retail & E-commerce",
      icon: ShoppingBag,
      color: "from-purple-500 to-pink-500",
      description: "Product recommendations, order tracking, and returns"
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      color: "from-indigo-500 to-violet-500",
      description: "Student support, course information, and enrollment"
    },
    {
      id: "travel",
      name: "Travel & Hospitality",
      icon: Plane,
      color: "from-red-500 to-rose-500",
      description: "Booking assistance, travel info, and customer service"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Select Your Industry
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => onSelectIndustry(industry.id)}
            className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-left"
          >
            <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <industry.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {industry.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {industry.description}
            </p>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">→</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
