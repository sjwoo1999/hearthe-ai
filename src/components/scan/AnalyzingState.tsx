'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const messages = {
  ko: {
    steps: [
      '사진을 분석하고 있어요...',
      '재료를 확인하는 중이에요...',
      '영양 정보를 계산하고 있어요...',
      '거의 다 됐어요!'
    ],
  },
  en: {
    steps: [
      'Analyzing photo...',
      'Identifying ingredients...',
      'Calculating nutrition...',
      'Almost there!'
    ],
  },
} as const;

export default function AnalyzingState() {
  const { language } = useLanguage();
  const t = messages[language];
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % t.steps.length);
    }, 800); // Change text every 800ms

    return () => clearInterval(interval);
  }, [t.steps.length]);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {/* Warm Glow Animation */}
      <div className="relative mb-10">
        {/* Outer pulsing glow */}
        <div className="absolute inset-0 rounded-full bg-hearth-500/20 animate-ping duration-1000" />

        {/* Middle glow */}
        <div className="absolute inset-0 rounded-full bg-hearth-500/30 animate-pulse duration-2000" />

        {/* Center Core */}
        <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-hearth-500 to-hearth-600 shadow-soft flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>
      </div>

      {/* Conversational Text */}
      <div className="text-center space-y-2 h-16">
        <h3 className="text-xl font-bold text-stone-800 transition-all duration-300 ease-in-out">
          {t.steps[currentStep]}
        </h3>
        <div className="flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${i === currentStep % 3 ? 'bg-hearth-500' : 'bg-stone-200'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
