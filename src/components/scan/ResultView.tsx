'use client';

import { ScanResult } from '@/types';
import ComparisonCard from './ComparisonCard';
import { useLanguage } from '@/hooks/useLanguage';
import { getFoodName } from '@/lib/i18n/foodNames';
import { getSuggestion, getImpact } from '@/lib/i18n/suggestions';
import { getGuidance } from '@/lib/i18n/guidance';
import FlowGuideBanner from '@/components/common/FlowGuideBanner';

interface ResultViewProps {
  result: ScanResult;
}

const messages = {
  ko: {
    imagePlaceholder: '촬영된 이미지',
    aiEstimation: '(AI 추정)',
    nutritionHeading: '영양 정보',
    calories: '칼로리',
    protein: '단백질',
    carbs: '탄수화물',
    fat: '지방',
    priceLabel: '예상 가격',
    currency: '원',
    microSuggestionsHeading: '💡 작은 변화 제안',
  },
  en: {
    imagePlaceholder: 'Captured image',
    aiEstimation: '(AI Estimated)',
    nutritionHeading: 'Nutrition Info',
    calories: 'Calories',
    protein: 'Protein',
    carbs: 'Carbs',
    fat: 'Fat',
    priceLabel: 'Estimated price',
    currency: '',
    microSuggestionsHeading: '💡 Small Change Suggestions',
  },
} as const;

export default function ResultView({ result }: ResultViewProps) {
  const { language } = useLanguage();
  const t = messages[language];
  const guidance = getGuidance('scanResult', language);

  return (
    <div className="space-y-4">
      {/* Flow guidance */}
      <FlowGuideBanner
        title={guidance.title}
        body={guidance.body}
        variant="info"
      />

      {/* Image thumbnail */}
      <div className="w-full aspect-video bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-2">🍱</div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t.imagePlaceholder}</p>
        </div>
      </div>

      {/* Food name */}
      <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">
          {result.nameKey ? getFoodName(result.nameKey, language) : result.name}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">{t.aiEstimation}</p>
      </div>

      {/* Nutrition summary */}
      <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">{t.nutritionHeading}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.calories}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{result.nutrition.calories} <span className="text-sm font-normal">kcal</span></p>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.protein}</p>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">{result.nutrition.protein} <span className="text-sm font-normal">g</span></p>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.carbs}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{result.nutrition.carbs} <span className="text-sm font-normal">g</span></p>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.fat}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{result.nutrition.fat} <span className="text-sm font-normal">g</span></p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-400">{t.priceLabel}: <span className="font-bold text-slate-900 dark:text-slate-50">{result.price.toLocaleString()}{t.currency}</span></p>
        </div>
      </div>

      {/* Micro suggestions */}
      <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">{t.microSuggestionsHeading}</h3>
        <div className="space-y-2">
          {result.microSuggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg"
            >
              <span className="text-lg">✨</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                  {suggestion.textKey ? getSuggestion(suggestion.textKey, language) : suggestion.text}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  {suggestion.impactData ? getImpact(suggestion.impactData, language) : suggestion.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <ComparisonCard
        current={{
          name: result.name,
          nameKey: result.nameKey,
          nutrition: result.nutrition,
          price: result.price,
        }}
        alternative={result.alternative}
      />
    </div>
  );
}
