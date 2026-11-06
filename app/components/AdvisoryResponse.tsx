"use client";

import { Bot, Info, BookOpen, Clock } from "lucide-react";
import type { Crop } from "./CropSelector";

interface AdvisoryResponseProps {
  submittedQuestion: string | null;
  selectedCrop: Crop | null;
}

export default function AdvisoryResponse({ submittedQuestion, selectedCrop }: AdvisoryResponseProps) {
  const hasSubmission = submittedQuestion !== null;

  return (
    <section id="advisory-response" className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Bot className="w-4 h-4" />
            AI Advisory Response
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            KrishiMitra&apos;s Response
          </h2>
        </div>

        {/* Backend pending notice — ALWAYS visible */}
        <div className="flex items-start gap-3 bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
          <Info className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div className="space-y-1">
            <p className="text-amber-800 font-semibold text-sm">
              🚧 AI Backend Not Connected
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              The AI advisory backend (Gemini API integration) is not connected yet. 
              This is a frontend prototype. Real agricultural recommendations will be 
              generated when the backend integration is complete in a later phase.
            </p>
          </div>
        </div>

        {/* Response area */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm">
          {/* Response header */}
          <div className="bg-green-50 border-b border-green-100 px-6 py-4 flex items-center gap-3">
            <div className="bg-green-600 rounded-full p-2">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-800 text-sm">KrishiMitra AI</div>
              <div className="text-xs text-gray-500">Agricultural Advisory Assistant</div>
            </div>
            <div className="ml-auto flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              Backend pending
            </div>
          </div>

          {/* Response body */}
          <div className="p-6 min-h-40">
            {hasSubmission ? (
              <div className="space-y-4">
                {/* Echo the submitted question */}
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 space-y-1">
                  <div className="text-xs font-semibold text-green-600 uppercase tracking-wide">Your Question</div>
                  {selectedCrop && (
                    <div className="text-xs text-gray-500">
                      Crop: <span className="font-semibold capitalize">{selectedCrop}</span>
                    </div>
                  )}
                  <div className="text-gray-800 font-medium text-base">
                    &ldquo;{submittedQuestion}&rdquo;
                  </div>
                </div>

                {/* Placeholder response */}
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your question has been received. When the AI backend is connected, 
                    KrishiMitra AI will provide a detailed, verified answer here — 
                    including specific recommendations, timings, and best practices 
                    tailored for <span className="font-semibold capitalize">{selectedCrop ?? "your crop"}</span>.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                      <span className="text-xs text-gray-400 ml-2">Waiting for AI backend connection...</span>
                    </div>
                    <div className="space-y-2">
                      {[70, 90, 55, 80].map((w, i) => (
                        <div key={i} className="h-3 bg-gray-200 rounded" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-32 text-center space-y-3">
                <Bot className="w-10 h-10 text-gray-300" />
                <p className="text-gray-400 text-sm">
                  Select a crop and ask your question to see the response area in action.
                </p>
              </div>
            )}
          </div>

          {/* Source references */}
          <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-gray-500" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Source References</span>
            </div>
            {hasSubmission ? (
              <div className="space-y-2">
                {[
                  "ICAR – Indian Council of Agricultural Research",
                  "Krishi Vigyan Kendra (KVK) Guidelines",
                  "State Agriculture Department Advisories",
                ].map((source) => (
                  <div key={source} className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full shrink-0" />
                    {source} <span className="text-gray-400">(will be cited when backend is live)</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-400">
                Verified sources from ICAR, KVK, and state agriculture departments will appear here.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

