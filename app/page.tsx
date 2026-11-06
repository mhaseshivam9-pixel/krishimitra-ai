"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LanguageSelector, { type Language } from "./components/LanguageSelector";
import CropSelector, { type Crop } from "./components/CropSelector";
import QuestionForm from "./components/QuestionForm";
import AdvisoryResponse from "./components/AdvisoryResponse";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [submittedQuestion, setSubmittedQuestion] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuestionSubmit = (question: string) => {
    setSubmittedQuestion(question);
    // Scroll to the response section after submission
    setTimeout(() => scrollToSection("advisory-response"), 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />

      {/* Main content */}
      <main className="flex-1">
        {/* A: Hero Section */}
        <HeroSection
          onGetStarted={() => scrollToSection("voice-assistant")}
          onExploreFeatures={() => scrollToSection("features")}
        />

        {/* C: Language Selection */}
        <LanguageSelector
          selected={selectedLanguage}
          onChange={setSelectedLanguage}
        />

        {/* D: Crop Selection */}
        <CropSelector
          selectedCrop={selectedCrop}
          onCropSelect={setSelectedCrop}
        />

        {/* E: Voice Assistant / Question Form */}
        <QuestionForm
          selectedCrop={selectedCrop}
          selectedLanguage={selectedLanguage}
          onSubmit={handleQuestionSubmit}
        />

        {/* F: Advisory Response */}
        <AdvisoryResponse
          submittedQuestion={submittedQuestion}
          selectedCrop={selectedCrop}
        />

        {/* G: Features Section */}
        <FeaturesSection />
      </main>

      {/* H: Footer */}
      <Footer />
    </div>
  );
}
