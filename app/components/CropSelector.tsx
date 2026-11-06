"use client";

import { Sprout } from "lucide-react";

export type Crop = "cotton" | "soybean" | "sugarcane";

interface CropOption {
  id: Crop;
  name: string;
  emoji: string;
  description: string;
  season: string;
  titleColor: string;
  selectedClasses: string;
  unselectedClasses: string;
}

const CROPS: CropOption[] = [
  {
    id: "cotton",
    name: "Cotton",
    emoji: "🌿",
    description: "Kharif crop. Best sown in June–July. Needs well-drained soil.",
    season: "Kharif Season",
    titleColor: "text-amber-800",
    selectedClasses: "border-amber-500 bg-amber-50 shadow-xl scale-105",
    unselectedClasses: "border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-50 hover:scale-105",
  },
  {
    id: "soybean",
    name: "Soybean",
    emoji: "🫘",
    description: "Nitrogen-fixing legume. Suits black and loamy soils.",
    season: "Kharif Season",
    titleColor: "text-green-800",
    selectedClasses: "border-green-500 bg-green-50 shadow-xl scale-105",
    unselectedClasses: "border-gray-200 bg-white hover:border-green-300 hover:bg-green-50 hover:scale-105",
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    emoji: "🎋",
    description: "Long-duration crop. Requires heavy irrigation and fertile soil.",
    season: "Annual / Perennial",
    titleColor: "text-emerald-800",
    selectedClasses: "border-emerald-500 bg-emerald-50 shadow-xl scale-105",
    unselectedClasses: "border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50 hover:scale-105",
  },
];

interface CropSelectorProps {
  selectedCrop: Crop | null;
  onCropSelect: (crop: Crop) => void;
}

export default function CropSelector({ selectedCrop, onCropSelect }: CropSelectorProps) {
  return (
    <section id="crop-selector" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Sprout className="w-4 h-4" />
            Crop Advisory
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Select Your Crop
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Choose the crop you need advice for. KrishiMitra AI will tailor its guidance specifically for your selection.
          </p>
        </div>

        {/* Crop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CROPS.map((crop) => {
            const isSelected = selectedCrop === crop.id;
            return (
              <button
                key={crop.id}
                onClick={() => onCropSelect(crop.id)}
                aria-pressed={isSelected}
                className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-200 group ${
                  isSelected ? crop.selectedClasses : crop.unselectedClasses
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
                    Selected ✓
                  </div>
                )}

                <div className="space-y-3">
                  <div className="text-5xl">{crop.emoji}</div>
                  <div>
                    <h3 className={`text-xl font-bold ${isSelected ? crop.titleColor : "text-gray-800"}`}>
                      {crop.name}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {crop.season}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {crop.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`mt-4 h-1 rounded-full transition-all ${
                    isSelected ? "bg-green-500" : "bg-gray-200 group-hover:bg-green-300"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {selectedCrop && (
          <p className="text-center text-sm text-gray-500">
            You selected:{" "}
            <span className="font-bold text-green-600 capitalize">{selectedCrop}</span>.
            Now ask your farming question below.
          </p>
        )}
      </div>
    </section>
  );
}
