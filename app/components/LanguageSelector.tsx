"use client";

import { Globe } from "lucide-react";

export type Language = "en" | "hi" | "mr";

interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "mr", label: "Marathi", nativeLabel: "मराठी", flag: "🇮🇳" },
  { code: "hi", label: "Hindi",   nativeLabel: "हिन्दी", flag: "🇮🇳" },
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
];

interface LanguageSelectorProps {
  selected: Language;
  onChange: (lang: Language) => void;
}

export default function LanguageSelector({ selected, onChange }: LanguageSelectorProps) {
  return (
    <section id="language-selector" className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Globe className="w-4 h-4" />
            Regional Language Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Choose Your Language
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            KrishiMitra AI speaks your language. Select the language you are most comfortable with.
          </p>
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {LANGUAGES.map((lang) => {
            const isSelected = selected === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => onChange(lang.code)}
                aria-pressed={isSelected}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-200 text-center space-y-2 group
                  ${isSelected
                    ? "border-green-500 bg-green-50 shadow-lg shadow-green-100 scale-105"
                    : "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50 hover:scale-105"
                  }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs rounded-full px-2 py-0.5 font-semibold">
                    ✓
                  </div>
                )}
                <div className="text-3xl">{lang.flag}</div>
                <div className={`text-2xl font-bold ${isSelected ? "text-green-700" : "text-gray-800"}`}>
                  {lang.nativeLabel}
                </div>
                <div className={`text-sm font-medium ${isSelected ? "text-green-600" : "text-gray-500"}`}>
                  {lang.label}
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-sm text-gray-400">
          Selected: <span className="font-semibold text-green-600">
            {LANGUAGES.find(l => l.code === selected)?.nativeLabel}
          </span>
        </p>
      </div>
    </section>
  );
}

