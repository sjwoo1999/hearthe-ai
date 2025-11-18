'use client';

import { useState } from 'react';
import { MealLog } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { getFoodName } from '@/lib/i18n/foodNames';

interface HistoryListProps {
  logs: MealLog[];
}

const messages = {
  ko: {
    improvedBadge: '개선됨',
    protein: '단백질',
    currency: '원',
    closeButton: '닫기',
    viewDetailsButton: '상세 보기',
    detailedNutritionHeading: '상세 영양 정보',
    calories: '칼로리',
    carbs: '탄수화물',
    fat: '지방',
  },
  en: {
    improvedBadge: 'Improved',
    protein: 'Protein',
    currency: '',
    closeButton: 'Close',
    viewDetailsButton: 'View Details',
    detailedNutritionHeading: 'Detailed Nutrition Info',
    calories: 'Calories',
    carbs: 'Carbs',
    fat: 'Fat',
  },
} as const;

export default function HistoryList({ logs }: HistoryListProps) {
  const { language } = useLanguage();
  const t = messages[language];
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedLog = logs.find((log) => log.id === selectedId);

  return (
    <div className="space-y-3">
      {logs.map((log) => (
        <div
          key={log.id}
          className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-5 border border-slate-200 dark:border-slate-700"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 mb-1">
                {log.nameKey ? getFoodName(log.nameKey, language) : log.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {log.date} · {log.time}
              </p>
            </div>
            {log.microSuggestionApplied && (
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium flex items-center gap-1">
                <span>✓</span>
                <span>{t.improvedBadge}</span>
              </span>
            )}
          </div>

          {/* Quick stats */}
          <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
            <span>{log.nutrition.calories} kcal</span>
            <span>{t.protein} {log.nutrition.protein}g</span>
            <span>{log.price.toLocaleString()}{t.currency}</span>
          </div>

          {/* Detail button */}
          <button
            onClick={() => setSelectedId(selectedId === log.id ? null : log.id)}
            className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg py-2 text-sm font-medium transition-colors"
          >
            {selectedId === log.id ? t.closeButton : t.viewDetailsButton}
          </button>

          {/* Detail panel */}
          {selectedId === log.id && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">{t.detailedNutritionHeading}</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.calories}</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{log.nutrition.calories} kcal</p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.protein}</p>
                  <p className="font-semibold text-green-600 dark:text-green-400">{log.nutrition.protein} g</p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.carbs}</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{log.nutrition.carbs} g</p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.fat}</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{log.nutrition.fat} g</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
