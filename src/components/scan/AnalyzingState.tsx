'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { getGuidance } from '@/lib/i18n/guidance';

const messages = {
  ko: {
    loadingHint: '잠시만 기다려 주세요...',
  },
  en: {
    loadingHint: 'Please wait a moment...',
  },
} as const;

export default function AnalyzingState() {
  const { language } = useLanguage();
  const t = messages[language];
  const guidance = getGuidance('scanAnalyzing', language);

  return (
    <div className="space-y-6 px-2">
      {/* Header */}
      <div className="text-center pt-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
          {guidance.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {guidance.body}
        </p>
      </div>

      {/* AI Badge with ping animation */}
      <div className="flex justify-center py-6">
        <div className="relative">
          {/* Ping animation ring */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-20 w-20 rounded-full bg-orange-400/30 dark:bg-orange-500/30 animate-ping" />
          </span>
          {/* Static outer ring */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-20 w-20 rounded-full bg-gradient-to-br from-orange-300 to-rose-400 dark:from-orange-400 dark:to-rose-500 opacity-20" />
          </span>
          {/* Inner badge */}
          <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 via-rose-400 to-pink-500 dark:from-orange-500 dark:via-rose-500 dark:to-pink-600 shadow-lg">
            <span className="text-white text-lg font-bold tracking-wide">AI</span>
          </div>
        </div>
      </div>

      {/* Skeleton rows */}
      <div className="space-y-4">
        {/* Row 1 */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-3 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>
          <div className="relative h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-slate-600/40 to-transparent animate-[shimmer_1.4s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="h-3 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>
          <div className="relative h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-slate-600/40 to-transparent animate-[shimmer_1.4s_ease-in-out_infinite] [animation-delay:0.2s]" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="h-3 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-3 w-28 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>
          <div className="relative h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-slate-600/40 to-transparent animate-[shimmer_1.4s_ease-in-out_infinite] [animation-delay:0.4s]" />
          </div>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="text-center pt-2">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {t.loadingHint}
        </p>
      </div>
    </div>
  );
}
