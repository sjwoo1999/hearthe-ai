'use client';

import { useState } from 'react';
import { Recommendation } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

interface RecommendationListProps {
  recommendations: Recommendation[];
}

const messages = {
  ko: {
    calories: '칼로리',
    protein: '단백질',
    price: '가격',
    closeButton: '닫기',
    detailButton: '상세 비교',
    detailedNutritionHeading: '상세 영양 정보',
    carbs: '탄수화물',
    fat: '지방',
    prepTimeLabel: '조리 시간',
    prepTimeNotRequired: '불필요',
    prepTimeMinutes: (minutes: number) => `${minutes}분`,
    estimatedPriceLabel: '예상 가격',
    currency: '원',
  },
  en: {
    calories: 'Calories',
    protein: 'Protein',
    price: 'Price',
    closeButton: 'Close',
    detailButton: 'View Details',
    detailedNutritionHeading: 'Detailed Nutrition Info',
    carbs: 'Carbs',
    fat: 'Fat',
    prepTimeLabel: 'Prep Time',
    prepTimeNotRequired: 'Not required',
    prepTimeMinutes: (minutes: number) => `${minutes} min`,
    estimatedPriceLabel: 'Estimated Price',
    currency: '',
  },
} as const;

export default function RecommendationList({ recommendations }: RecommendationListProps) {
  const { language } = useLanguage();
  const t = messages[language];
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedRec = recommendations.find((r) => r.id === selectedId);

  return (
    <div className="space-y-3">
      {recommendations.map((rec) => (
        <div
          key={rec.id}
          className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-5 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 mb-1">{rec.name}</h3>
              <div className="flex gap-2 flex-wrap">
                {rec.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.calories}</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{rec.nutrition.calories} kcal</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.protein}</p>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400">{rec.nutrition.protein} g</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.price}</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{rec.price.toLocaleString()}{t.currency}</p>
            </div>
          </div>

          {/* Trade-off */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-3 mb-3">
            <p className="text-xs font-medium text-blue-900 dark:text-blue-200">{rec.tradeoff}</p>
          </div>

          {/* Detail button */}
          <button
            onClick={() => setSelectedId(selectedId === rec.id ? null : rec.id)}
            className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg py-2 text-sm font-medium transition-colors"
          >
            {selectedId === rec.id ? t.closeButton : t.detailButton}
          </button>

          {/* Detail panel */}
          {selectedId === rec.id && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">{t.detailedNutritionHeading}</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.carbs}</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{rec.nutrition.carbs} g</p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.fat}</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{rec.nutrition.fat} g</p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.prepTimeLabel}</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{rec.prepTime === 0 ? t.prepTimeNotRequired : t.prepTimeMinutes(rec.prepTime)}</p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.estimatedPriceLabel}</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{rec.price.toLocaleString()}{t.currency}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
