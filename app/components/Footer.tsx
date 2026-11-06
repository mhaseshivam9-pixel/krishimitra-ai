"use client";

import { Leaf, Mail, ExternalLink } from "lucide-react";

const CURRENT_YEAR = 2026;

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-green-500 rounded-lg p-1.5">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-green-400">KrishiMitra</span>
                <span className="text-lg font-bold text-white"> AI</span>
              </div>
            </div>
            <p className="text-green-400 font-medium text-sm italic">
              Smart Farming. Simple Advice.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              An AI-powered agricultural advisory platform designed to empower Indian 
              farmers with accessible, multilingual, and voice-first farming guidance.
            </p>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wide">About the Project</h3>
            <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
              <p>
                KrishiMitra AI is a hackathon project (Phase 2) focused on building 
                a voice-first, multilingual agricultural advisory platform.
              </p>
              <p>
                The platform targets smallholder and marginal farmers across Maharashtra 
                and other Indian states, providing crop-specific advice in Marathi, Hindi, and English.
              </p>
              <div className="bg-gray-800 rounded-lg px-3 py-2 text-xs text-gray-500 border border-gray-700">
                🚧 AI backend integration is pending. This is Phase 2 UI prototype.
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wide">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:team@krishimitra.ai"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                team@krishimitra.ai
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                View on GitHub (placeholder)
              </a>
            </div>

            {/* Tech stack note */}
            <div className="pt-4">
              <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-2">Built With</div>
              <div className="flex flex-wrap gap-2">
                {["Next.js 16", "TypeScript", "Tailwind CSS", "Lucide Icons"].map((tech) => (
                  <span key={tech} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {currentYear} KrishiMitra AI. Built for Indian Farmers.</p>
          <p className="text-gray-600 text-xs">
            Hackathon Project · Phase 2 · UI Prototype
          </p>
        </div>
      </div>
    </footer>
  );
}
