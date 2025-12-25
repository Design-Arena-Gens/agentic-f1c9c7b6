"use client";

import { useState } from "react";
import IndustrySelector from "@/components/IndustrySelector";
import ChatInterface from "@/components/ChatInterface";
import Header from "@/components/Header";
import Features from "@/components/Features";

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Header />

      {!selectedIndustry ? (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Chatbot Platform
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Intelligent support across industries. Handle queries, troubleshoot issues,
              and provide personalized assistance with advanced AI technology.
            </p>
          </div>

          <Features />

          <IndustrySelector onSelectIndustry={setSelectedIndustry} />
        </div>
      ) : (
        <ChatInterface
          industry={selectedIndustry}
          onBack={() => setSelectedIndustry(null)}
        />
      )}
    </main>
  );
}
