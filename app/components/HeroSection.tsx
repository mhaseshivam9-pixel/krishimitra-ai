"use client";

import { ArrowRight, ChevronDown, Sprout, Sun, Droplets } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
  onExploreFeatures: () => void;
}

export default function HeroSection({ onGetStarted, onExploreFeatures }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Sprout className="w-4 h-4" />
              AI-Powered Agricultural Advisory
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Smart
                <span className="text-green-600 block">Farming</span>
                Companion
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                KrishiMitra AI provides instant agricultural guidance in your language.
                Ask questions about crops, weather, pests, and best practices — 
                simply by voice or text.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-green-200 hover:shadow-xl active:scale-95"
              >
                Ask KrishiMitra
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onExploreFeatures}
                className="flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-700 border-2 border-green-200 hover:border-green-400 font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Explore Features
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { label: "Crops Supported", value: "50+" },
                { label: "Languages", value: "3" },
                { label: "Voice-First", value: "✓" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Main circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-10" />
              <div className="absolute inset-6 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full opacity-10" />

              {/* Center illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-3xl shadow-2xl p-8 w-56 h-56 sm:w-72 sm:h-72 flex flex-col items-center justify-center gap-4 border border-green-100">
                  <div className="bg-green-100 rounded-full p-5">
                    <Sprout className="w-14 h-14 sm:w-16 sm:h-16 text-green-600" />
                  </div>
                  <div className="text-center">
                    <div className="text-green-700 font-bold text-base sm:text-lg">KrishiMitra AI</div>
                    <div className="text-gray-500 text-xs sm:text-sm">Smart Farming Assistant</div>
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-3 border border-green-100">
                <Sun className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="absolute bottom-8 left-2 bg-white rounded-xl shadow-lg p-3 border border-green-100">
                <Droplets className="w-6 h-6 text-blue-500" />
              </div>
              <div className="absolute top-12 left-0 bg-green-600 rounded-xl shadow-lg p-3">
                <Sprout className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

