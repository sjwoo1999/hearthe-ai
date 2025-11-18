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
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{t.heading}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.subtitle}</p>
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
            className="w-full mt-4 bg-slate-600 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg p-4 font-semibold transition-colors"
          >
            {t.resetButton}
          </button>
        </>
      )}
    </div>
  );
}
