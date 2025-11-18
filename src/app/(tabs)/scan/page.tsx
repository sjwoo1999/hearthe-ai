'use client';

import { useState } from 'react';
import CameraPreview from '@/components/scan/CameraPreview';
import AnalyzingState from '@/components/scan/AnalyzingState';
import ResultView from '@/components/scan/ResultView';
import { scanResult } from '@/lib/mock/scanResult';

type ScanStep = 'idle' | 'analyzing' | 'result';

export default function ScanPage() {
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
        <h1 className="text-2xl font-bold text-slate-900">음식 스캔</h1>
        <p className="text-sm text-slate-600 mt-1">사진으로 영양 정보를 분석해요</p>
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
            className="w-full mt-4 bg-slate-600 hover:bg-slate-700 text-white rounded-lg p-4 font-semibold transition-colors"
          >
            다시 스캔하기
          </button>
        </>
      )}
    </div>
  );
}
