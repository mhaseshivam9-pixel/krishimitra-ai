"use client";

import {
  Mic,
  Globe,
  ShieldCheck,
  Sprout,
  Accessibility,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  iconBg: string;
  iconColor: string;
}

const FEATURES: Feature[] = [
  {
    icon: <Mic className="w-7 h-7" />,
    title: "Voice-First Interaction",
    description:
      "Simply speak your farming question. KrishiMitra AI is designed so farmers can get advice without needing to type.",
    badge: "Coming Soon",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Regional Language Support",
    description:
      "Full support for Marathi, Hindi, and English. KrishiMitra AI meets farmers in the language they know best.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Verified Agricultural Information",
    description:
      "Every recommendation is grounded in information from ICAR, KVK, and official government agricultural guidelines.",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: <Sprout className="w-7 h-7" />,
    title: "Crop Advisory",
    description:
      "Get specific advice for cotton, soybean, sugarcane, and more — from sowing to harvesting, season by season.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: <Accessibility className="w-7 h-7" />,
    title: "Easy Accessibility",
    description:
      "Designed for farmers with limited digital experience. Large buttons, simple UI, and no jargon — just clear advice.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Sprout className="w-4 h-4" />
            Platform Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why KrishiMitra AI?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Built specifically for Indian farmers, with accessibility, regional languages, 
            and verified agricultural knowledge at the core.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4 hover:border-green-300 hover:shadow-lg transition-all duration-200 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center ${feature.iconColor} group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Title + Badge */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {feature.title}
                </h3>
                {feature.badge && (
                  <span className="shrink-0 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-medium">
                    {feature.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

