'use client';

interface CameraPreviewProps {
  onCapture: () => void;
  onGallery: () => void;
}

export default function CameraPreview({ onCapture, onGallery }: CameraPreviewProps) {
  return (
    <div className="space-y-4">
      {/* Camera placeholder */}
      <div className="w-full aspect-square bg-slate-200 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
        <div className="text-center">
          <div className="text-6xl mb-2">📷</div>
          <p className="text-sm text-slate-500">카메라 프리뷰</p>
        </div>
      </div>

      {/* Gallery button */}
      <button
        onClick={onGallery}
        className="w-full bg-white border border-slate-300 hover:bg-slate-50 rounded-lg p-4 text-sm font-medium text-slate-700 transition-colors"
      >
        📁 갤러리에서 불러오기
      </button>

      {/* Capture button */}
      <button
        onClick={onCapture}
        className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-4 flex items-center justify-center gap-2 text-white font-semibold transition-colors"
      >
        <span className="text-2xl">⊙</span>
        <span>촬영하기</span>
      </button>
    </div>
  );
}
