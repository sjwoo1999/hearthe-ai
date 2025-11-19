'use client';

import { useState } from 'react';
import { Recommendation } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { getFoodName } from '@/lib/i18n/foodNames';
import { getTagTranslation } from '@/lib/i18n/tags';
import { getTradeoff } from '@/lib/i18n/tradeoffs';

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
    suggestion: '💡 제안',
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
    suggestion: '💡 Suggestion',
  },
} as const;

export default function RecommendationList({ recommendations }: RecommendationListProps) {
  const { language } = useLanguage();
  const t = messages[language];
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {recommendations.map((rec) => (
        <div
          key={rec.id}
          className="bg-white rounded-3xl shadow-soft p-6 border border-stone-100 transition-all duration-300 hover:shadow-md"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-stone-800 mb-2">
                {rec.nameKey ? getFoodName(rec.nameKey, language) : rec.name}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {rec.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-nature-100 text-nature-600 text-xs rounded-full font-medium"
                  >
                    {getTagTranslation(tag, language)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Trade-off / Micro-suggestion Badge */}
          <div className="mb-5">
            <div className="inline-flex items-start gap-2 bg-hearth-100 rounded-2xl p-3 pr-4">
              <span className="text-xs font-bold text-hearth-600 mt-0.5">{t.suggestion}</span>
              <p className="text-sm font-medium text-stone-700 leading-snug">
                {rec.tradeoffData
                  ? getTradeoff(rec.tradeoffData.calories, rec.tradeoffData.protein, rec.tradeoffData.price, language)
                  : rec.tradeoff}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-5 p-4 bg-cream rounded-2xl">
            <div className="text-center">
              <p className="text-xs text-stone-500 mb-1">{t.calories}</p>
              <p className="text-sm font-bold text-stone-800">{rec.nutrition.calories} kcal</p>
            </div>
            <div className="text-center border-l border-stone-200">
              <p className="text-xs text-stone-500 mb-1">{t.protein}</p>
              <p className="text-sm font-bold text-nature-600">{rec.nutrition.protein} g</p>
            </div>
            <div className="text-center border-l border-stone-200">
              <p className="text-xs text-stone-500 mb-1">{t.price}</p>
              <p className="text-sm font-bold text-stone-800">{rec.price.toLocaleString()}{t.currency}</p>
            </div>
          </div>

          {/* Detail button */}
          <button
            onClick={() => setSelectedId(selectedId === rec.id ? null : rec.id)}
            className={`w-full rounded-2xl py-3 text-sm font-semibold transition-colors ${selectedId === rec.id
                ? 'bg-stone-100 text-stone-600'
                : 'bg-hearth-500 text-white hover:bg-hearth-600 shadow-soft'
              }`}
          >
            {selectedId === rec.id ? t.closeButton : t.detailButton}
          </button>

          {/* Detail panel */}
          {selectedId === rec.id && (
            <div className="mt-5 pt-5 border-t border-stone-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="text-sm font-bold text-stone-800 mb-4">{t.detailedNutritionHeading}</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-cream rounded-2xl p-4">
                  <p className="text-xs text-stone-500 mb-1">{t.carbs}</p>
                  <p className="font-bold text-stone-800">{rec.nutrition.carbs} g</p>
                </div>
                <div className="bg-cream rounded-2xl p-4">
                  <p className="text-xs text-stone-500 mb-1">{t.fat}</p>
                  <p className="font-bold text-stone-800">{rec.nutrition.fat} g</p>
                </div>
                <div className="bg-cream rounded-2xl p-4">
                  <p className="text-xs text-stone-500 mb-1">{t.prepTimeLabel}</p>
                  <p className="font-bold text-stone-800">{rec.prepTime === 0 ? t.prepTimeNotRequired : t.prepTimeMinutes(rec.prepTime)}</p>
                </div>
                <div className="bg-cream rounded-2xl p-4">
                  <p className="text-xs text-stone-500 mb-1">{t.estimatedPriceLabel}</p>
                  <p className="font-bold text-stone-800">{rec.price.toLocaleString()}{t.currency}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
