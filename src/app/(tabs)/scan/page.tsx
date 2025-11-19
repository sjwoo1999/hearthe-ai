'use client';

import { useState } from 'react';
import CameraPreview from '@/components/scan/CameraPreview';
import AnalyzingState from '@/components/scan/AnalyzingState';
import ResultView from '@/components/scan/ResultView';
import { scanResult } from '@/lib/mock/scanResult';
import { useLanguage } from '@/hooks/useLanguage';

type ScanStep = 'idle' | 'analyzing' | 'result';

const messages = {
  ko: {
    heading: '음식 스캔',
    subtitle: '사진으로 영양 정보를 분석해요',
    resetButton: '다시 스캔하기',
  },
  en: {
    heading: 'Food Scan',
    subtitle: 'Analyze nutrition info with photos',
    resetButton: 'Scan Again',
  },
} as const;

export default function ScanPage() {
  const { language } = useLanguage();
  const t = messages[language];
  const [step, setStep] = useState<ScanStep>('idle');

  const handleCapture = () => {
    setStep('analyzing');
    // Simulate API call
    setTimeout(() => {
      setStep('result');
    }, 2000);
  };

  const handleGallery = () => {
    setStep('analyzing');
    // Simulate API call
    setTimeout(() => {
      setStep('result');
    }, 2000);
  };

  const handleReset = () => {
    setStep('idle');
  };

  return (
    <div className="px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-stone-800">{t.heading}</h1>
        <p className="text-sm text-stone-600 mt-1">{t.subtitle}</p>
      </header>

      {step === 'idle' && (
        <CameraPreview onCapture={handleCapture} onGallery={handleGallery} />
      )}

      {step === 'analyzing' && <AnalyzingState />}

      {step === 'result' && (
        <>
          <ResultView result={scanResult} />
          <button
            onClick={handleReset}
            className="w-full mt-4 bg-hearth-500 hover:bg-hearth-600 text-white rounded-3xl p-4 font-semibold transition-colors shadow-soft"
          >
            {t.resetButton}
          </button>
        </>
      )}
    </div>
  );
}
