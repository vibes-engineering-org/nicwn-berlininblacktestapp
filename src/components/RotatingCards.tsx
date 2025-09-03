"use client";

import React, { useState, useEffect } from "react";
import { MintCard, type CardData } from "./MintCard";
import { Button } from "~/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const CARDS_DATA: CardData[] = [
  {
    id: "frauenraum",
    title: "Frauenraum",
    description: "Counseling for women fleeing violence. Accommodation, short-term funds, etc…",
    language: "German and English",
    cost: "Free",
    website: "frauenraum.de",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: "marie",
    title: "Marie Frauenzentrum", 
    description: "Advice on education, CV, and career opportunities.",
    language: "German",
    cost: "Free",
    website: "frauenzentrum-marie.de",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  }
];

interface RotatingCardsProps {
  contractAddress: string;
  autoRotate?: boolean;
  rotationInterval?: number;
}

export function RotatingCards({ 
  contractAddress,
  autoRotate = true,
  rotationInterval = 4000 
}: RotatingCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoRotate);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CARDS_DATA.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [isPlaying, rotationInterval]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CARDS_DATA.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + CARDS_DATA.length) % CARDS_DATA.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Card Display */}
      <div className="relative h-[450px] mb-6 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${CARDS_DATA.length * 100}%`
          }}
        >
          {CARDS_DATA.map((card, index) => (
            <div key={card.id} className="w-full flex-shrink-0 px-2">
              <MintCard 
                card={card} 
                contractAddress={contractAddress}
                isActive={index === currentIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="rounded-full w-10 h-10 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={togglePlayPause}
          className="rounded-full w-10 h-10 p-0"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="rounded-full w-10 h-10 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2">
        {CARDS_DATA.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Card Info */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold mb-2">
          {CARDS_DATA[currentIndex].title}
        </h3>
        <p className="text-sm text-muted-foreground">
          Card {currentIndex + 1} of {CARDS_DATA.length}
        </p>
      </div>
    </div>
  );
}