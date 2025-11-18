'use client';

import { MealLog } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { getFoodName } from '@/lib/i18n/foodNames';

interface RecentLogsProps {
  logs: MealLog[];
}

const messages = {
  ko: {
    heading: '최근 기록',
    protein: '단백질',
    currency: '원',
  },
  en: {
    heading: 'Recent Logs',
    protein: 'Protein',
    currency: '',
  },
} as const;

export default function RecentLogs({ logs }: RecentLogsProps) {
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">{t.heading}</h2>

      <div className="space-y-3">
        {logs.map((log) => (
          <div
            key={log.id}
            className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {log.nameKey ? getFoodName(log.nameKey, language) : log.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {log.date} {log.time}
                </p>
              </div>
              {log.microSuggestionApplied && (
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                  ✓
                </span>
              )}
            </div>
            <div className="flex gap-4 text-xs text-slate-600 dark:text-slate-400">
              <span>{log.nutrition.calories} kcal</span>
              <span>{t.protein} {log.nutrition.protein}g</span>
              <span>{log.price.toLocaleString()}{t.currency}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
