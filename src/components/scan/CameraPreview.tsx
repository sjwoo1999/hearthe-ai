'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { getGuidance } from '@/lib/i18n/guidance';
import FlowGuideBanner from '@/components/common/FlowGuideBanner';

interface CameraPreviewProps {
  onCapture: () => void;
  onGallery: () => void;
}

const messages = {
  ko: {
    cameraPreview: '카메라 프리뷰',
    galleryButton: '📁 갤러리에서 불러오기',
    captureButton: '촬영하기',
  },
  en: {
    cameraPreview: 'Camera Preview',
    galleryButton: '📁 Load from Gallery',
    captureButton: 'Capture',
  },
} as const;

export default function CameraPreview({ onCapture, onGallery }: CameraPreviewProps) {
  const { language } = useLanguage();
  const t = messages[language];
  const guidance = getGuidance('scanIdle', language);

  return (
    <div className="space-y-4">
      {/* Flow guidance */}
      <FlowGuideBanner
        title={guidance.title}
        body={guidance.body}
        variant="tip"
      />

      {/* Camera placeholder */}
      <div className="w-full aspect-square bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600">
        <div className="text-center">
          <div className="text-6xl mb-2">📷</div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t.cameraPreview}</p>
        </div>
      </div>

      {/* Gallery button */}
      <button
        onClick={onGallery}
        className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg p-4 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors"
      >
        {t.galleryButton}
      </button>

      {/* Capture button */}
      <button
        onClick={onCapture}
        className="w-full bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg p-4 flex items-center justify-center gap-2 text-white font-semibold transition-colors"
      >
        <span className="text-2xl">⊙</span>
        <span>{t.captureButton}</span>
      </button>
    </div>
  );
}
