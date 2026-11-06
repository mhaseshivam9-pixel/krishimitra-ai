"use client";

import { useState } from "react";
import { Menu, X, Leaf, Globe } from "lucide-react";

type Language = "en" | "hi" | "mr";

interface NavbarProps {
  selectedLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const languageLabels: Record<Language, string> = {
  en: "English",
  hi: "हिन्दी",
  mr: "मराठी",
};

export default function Navbar({ selectedLanguage, onLanguageChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-green-600 rounded-lg p-1.5">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold text-green-700">KrishiMitra</span>
              <span className="text-lg font-bold text-gray-700"> AI</span>
              <div className="text-[10px] text-gray-500 leading-none hidden sm:block">
                Smart Farming. Simple Advice.
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollTo("hero")}
              className="text-gray-700 hover:text-green-700 font-medium transition-colors text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("features")}
              className="text-gray-700 hover:text-green-700 font-medium transition-colors text-sm"
            >
              About
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-1 border border-green-200 rounded-lg px-2 py-1 bg-green-50">
              <Globe className="w-4 h-4 text-green-600" />
              <select
                value={selectedLanguage}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-sm text-green-700 font-medium outline-none cursor-pointer"
                aria-label="Select language"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="mr">मराठी</option>
              </select>
            </div>

            <button
              onClick={() => scrollTo("voice-assistant")}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-green-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-green-100 py-4 space-y-3">
            <button
              onClick={() => scrollTo("hero")}
              className="block w-full text-left px-2 py-2 text-gray-700 hover:text-green-700 font-medium text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("features")}
              className="block w-full text-left px-2 py-2 text-gray-700 hover:text-green-700 font-medium text-base"
            >
              About
            </button>

            {/* Mobile Language Selector */}
            <div className="flex items-center gap-2 px-2 py-2">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600 font-medium">Language:</span>
              {(["en", "hi", "mr"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => { onLanguageChange(lang); setMenuOpen(false); }}
                  className={`text-sm px-2 py-1 rounded ${
                    selectedLanguage === lang
                      ? "bg-green-600 text-white"
                      : "text-gray-600 hover:bg-green-50"
                  }`}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("voice-assistant")}
              className="block w-full bg-green-600 text-white font-semibold px-4 py-3 rounded-lg text-base text-center"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

