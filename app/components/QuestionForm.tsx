"use client";

import { useState } from "react";
import { Mic, Send, AlertCircle } from "lucide-react";
import type { Crop } from "./CropSelector";
import type { Language } from "./LanguageSelector";

interface QuestionFormProps {
  selectedCrop: Crop | null;
  selectedLanguage: Language;
  onSubmit: (question: string) => void;
}

const placeholders: Record<Language, string> = {
  en: "e.g. What is the best fertilizer for cotton in June?",
  hi: "उदा. कपास के लिए सबसे अच्छा उर्वरक कौन सा है?",
  mr: "उदा. कापूससाठी सर्वोत्तम खत कोणते आहे?",
};

const labels: Record<Language, { heading: string; subheading: string; submit: string; micNotice: string; cropWarning: string; emptyWarning: string }> = {
  en: {
    heading: "Ask Your Farming Question",
    subheading: "Type your question below or use voice input (coming soon)",
    submit: "Ask KrishiMitra",
    micNotice: "Voice input will be available after voice integration is complete.",
    cropWarning: "Please select a crop above before asking a question.",
    emptyWarning: "Please type your question before submitting.",
  },
  hi: {
    heading: "अपना कृषि प्रश्न पूछें",
    subheading: "नीचे अपना प्रश्न टाइप करें या वॉइस इनपुट का उपयोग करें (जल्द आ रहा है)",
    submit: "कृषिमित्र से पूछें",
    micNotice: "वॉइस इंटीग्रेशन पूर्ण होने के बाद वॉइस इनपुट उपलब्ध होगा।",
    cropWarning: "कृपया प्रश्न पूछने से पहले ऊपर फसल चुनें।",
    emptyWarning: "कृपया सबमिट करने से पहले अपना प्रश्न टाइप करें।",
  },
  mr: {
    heading: "तुमचा शेतीचा प्रश्न विचारा",
    subheading: "खाली तुमचा प्रश्न टाइप करा किंवा व्हॉइस इनपुट वापरा (लवकरच येणार)",
    submit: "कृषिमित्रला विचारा",
    micNotice: "व्हॉइस इंटिग्रेशन पूर्ण झाल्यावर व्हॉइस इनपुट उपलब्ध होईल.",
    cropWarning: "कृपया प्रश्न विचारण्यापूर्वी वरील पीक निवडा.",
    emptyWarning: "कृपया सबमिट करण्यापूर्वी तुमचा प्रश्न टाइप करा.",
  },
};

export default function QuestionForm({ selectedCrop, selectedLanguage, onSubmit }: QuestionFormProps) {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [micClicked, setMicClicked] = useState(false);

  const t = labels[selectedLanguage];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!selectedCrop) {
      setError(t.cropWarning);
      return;
    }
    if (!question.trim()) {
      setError(t.emptyWarning);
      return;
    }

    onSubmit(question.trim());
    setQuestion("");
  };

  const handleMicClick = () => {
    setMicClicked(true);
    setTimeout(() => setMicClicked(false), 3000);
  };

  return (
    <section id="voice-assistant" className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t.heading}</h2>
          <p className="text-gray-600 text-lg">{t.subheading}</p>
        </div>

        {/* Mic Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleMicClick}
            aria-label="Voice input (not yet available)"
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-lg border-4 
              ${micClicked
                ? "bg-orange-100 border-orange-400 scale-95"
                : "bg-green-50 border-green-200 hover:border-green-400 hover:bg-green-100 hover:scale-105"
              }`}
          >
            <Mic className={`w-10 h-10 ${micClicked ? "text-orange-500" : "text-green-600"}`} />
          </button>

          {/* Voice notice — always visible */}
          <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 max-w-sm text-center">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{micClicked ? t.micNotice : "Voice input coming soon. Use text below."}</span>
          </div>
        </div>

        {/* Text Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="relative">
            <textarea
              value={question}
              onChange={(e) => { setQuestion(e.target.value); setError(null); }}
              placeholder={placeholders[selectedLanguage]}
              rows={4}
              className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 resize-none text-gray-800 placeholder-gray-400 transition-all"
              aria-label="Your farming question"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          {/* Selected context summary */}
          {(selectedCrop || question.trim()) && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 space-y-1">
              {selectedCrop && (
                <div>
                  Crop: <span className="font-semibold text-green-700 capitalize">{selectedCrop}</span>
                </div>
              )}
              {question.trim() && (
                <div>
                  Question: <span className="font-medium text-gray-800">"{question.trim()}"</span>
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all shadow-md hover:shadow-green-200 hover:shadow-lg active:scale-95"
          >
            <Send className="w-5 h-5" />
            {t.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

