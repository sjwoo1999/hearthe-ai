'use client';

import { useRouter } from 'next/navigation';

export default function QuickActions() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
      <h2 className="text-lg font-bold text-slate-800 mb-4">빠른 액션</h2>

      <div className="space-y-3">
        <button
          onClick={() => router.push('/scan')}
          className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-4 flex items-center gap-3 transition-colors"
        >
          <span className="text-2xl">📷</span>
          <span className="text-sm font-medium text-blue-900">사진 찍고 분석하기</span>
        </button>

        <button
          onClick={() => router.push('/recommend')}
          className="w-full bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-4 flex items-center gap-3 transition-colors"
        >
          <span className="text-2xl">₩</span>
          <span className="text-sm font-medium text-green-900">예산 안에서 뭐 먹을까?</span>
        </button>

        <button
          onClick={() => router.push('/recommend')}
          className="w-full bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg p-4 flex items-center gap-3 transition-colors"
        >
          <span className="text-2xl">⏱</span>
          <span className="text-sm font-medium text-amber-900">시간 적을 때 빠른 식사</span>
        </button>
      </div>
    </div>
  );
}
