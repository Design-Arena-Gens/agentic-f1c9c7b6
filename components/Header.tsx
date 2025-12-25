"use client";

import { Bot } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI Chatbot Platform</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Intelligent Support Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
