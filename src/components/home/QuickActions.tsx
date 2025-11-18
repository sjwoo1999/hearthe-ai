'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/hooks/useLanguage';

const messages = {
  ko: {
    heading: '빠른 액션',
    scanButton: '사진 찍고 분석하기',
    recommendButton: '예산 안에서 뭐 먹을까?',
    historyButton: '최근 식사 기록 보기',
  },
  en: {
    heading: 'Quick Actions',
    scanButton: 'Take Photo & Analyze',
    recommendButton: 'What to eat within budget?',
    historyButton: 'View recent meal logs',
  },
} as const;

export default function QuickActions() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-6 mb-4">
      <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">{t.heading}</h2>

      <div className="space-y-3">
        <button
          onClick={() => router.push('/scan')}
          className="w-full bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-center gap-3 transition-colors"
        >
          <span className="text-2xl">📷</span>
          <span className="text-sm font-medium text-blue-900 dark:text-blue-200">{t.scanButton}</span>
        </button>

        <button
          onClick={() => router.push('/recommend')}
          className="w-full bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3 transition-colors"
        >
          <span className="text-2xl">₩</span>
          <span className="text-sm font-medium text-green-900 dark:text-green-200">{t.recommendButton}</span>
        </button>

        <button
          onClick={() => router.push('/history')}
          className="w-full bg-amber-50 dark:bg-amber-900/20 hover:bg-amber-100 dark:hover:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex items-center gap-3 transition-colors"
        >
          <span className="text-2xl">⏱</span>
          <span className="text-sm font-medium text-amber-900 dark:text-amber-200">{t.historyButton}</span>
        </button>
      </div>
    </div>
  );
}
