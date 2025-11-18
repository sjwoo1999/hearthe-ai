'use client';

import { NutritionInfo, Alternative } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { getFoodName } from '@/lib/i18n/foodNames';

interface ComparisonCardProps {
  current: {
    name: string;
    nameKey?: string;
    nutrition: NutritionInfo;
    price: number;
  };
  alternative: Alternative;
}

const messages = {
  ko: {
    heading: '대안 비교',
    currentLabel: '현재 선택',
    alternativeLabel: '추천 대안',
    differenceLabel: '차이점',
    calories: '칼로리',
    protein: '단백질',
    price: '가격',
    proteinUnit: 'g 단백질',
    currency: '원',
  },
  en: {
    heading: 'Alternative Comparison',
    currentLabel: 'Current Choice',
    alternativeLabel: 'Recommended Alternative',
    differenceLabel: 'Difference',
    calories: 'Calories',
    protein: 'Protein',
    price: 'Price',
    proteinUnit: 'g protein',
    currency: '',
  },
} as const;

export default function ComparisonCard({ current, alternative }: ComparisonCardProps) {
  const { language } = useLanguage();
  const t = messages[language];
  const calorieDiff = alternative.nutrition.calories - current.nutrition.calories;
  const proteinDiff = alternative.nutrition.protein - current.nutrition.protein;
  const priceDiff = alternative.price - current.price;

  const formatDiff = (value: number, unit: string, inverse = false) => {
    const sign = value > 0 ? '+' : '';
    const color = inverse
      ? value > 0
        ? 'text-red-600 dark:text-red-400'
        : 'text-green-600 dark:text-green-400'
      : value > 0
      ? 'text-green-600 dark:text-green-400'
      : 'text-red-600 dark:text-red-400';
    return <span className={color}>{sign}{value}{unit}</span>;
  };

  return (
    <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">{t.heading}</h3>

      <div className="space-y-4">
        {/* Current */}
        <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-800/50">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">{t.currentLabel}</p>
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-50 mb-3">
            {current.nameKey ? getFoodName(current.nameKey, language) : current.name}
          </h4>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <p className="text-slate-500 dark:text-slate-400">{t.calories}</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{current.nutrition.calories} kcal</p>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400">{t.protein}</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{current.nutrition.protein} g</p>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400">{t.price}</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{current.price.toLocaleString()}{t.currency}</p>
            </div>
          </div>
        </div>

        {/* Alternative */}
        <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">{t.alternativeLabel}</p>
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-50 mb-3">
            {alternative.nameKey ? getFoodName(alternative.nameKey, language) : alternative.name}
          </h4>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <p className="text-slate-500 dark:text-slate-400">{t.calories}</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{alternative.nutrition.calories} kcal</p>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400">{t.protein}</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{alternative.nutrition.protein} g</p>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400">{t.price}</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{alternative.price.toLocaleString()}{t.currency}</p>
            </div>
          </div>
        </div>

        {/* Trade-off */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">{t.differenceLabel}</p>
          <div className="flex gap-4 text-sm">
            <span>{formatDiff(calorieDiff, ' kcal', true)}</span>
            <span>{formatDiff(proteinDiff, `g ${t.proteinUnit.replace('g ', '')}`)}</span>
            <span>{formatDiff(priceDiff, t.currency, true)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
