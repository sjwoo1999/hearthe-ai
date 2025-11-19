'use client';

import { TodaySummary } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

interface TodaySummaryCardProps {
  summary: TodaySummary;
}

const messages = {
  ko: {
    ariaLabel: '일일 균형 및 예산 요약',
    heading: '오늘의 균형',
    remainingBudget: '남은 식비',
    currency: '원',
    calories: '칼로리',
    protein: '단백질',
    status: {
      good: '여유',
      normal: '적정',
      warning: '주의',
    },
  },
  en: {
    ariaLabel: 'Daily balance and budget summary',
    heading: 'Daily Balance',
    remainingBudget: 'Remaining Budget',
    currency: 'KRW',
    calories: 'Calories',
    protein: 'Protein',
    status: {
      good: 'Good',
      normal: 'Normal',
      warning: 'Warning',
    },
  },
} as const;

export default function TodaySummaryCard({ summary }: TodaySummaryCardProps) {
  const { language } = useLanguage();
  const t = messages[language];

  // Calculate remaining budget
  const remainingBudget = Math.max(0, summary.budget.target - summary.budget.current);
  const budgetProgress = Math.min(100, (summary.budget.current / summary.budget.target) * 100);

  // Nutrition progress
  const caloriesProgress = Math.min(100, (summary.calories.current / summary.calories.target) * 100);
  const proteinProgress = Math.min(100, (summary.protein.current / summary.protein.target) * 100);

  return (
    <div
      className="bg-white rounded-3xl shadow-soft p-6 mb-6 border border-stone-100"
      aria-label={t.ariaLabel}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-stone-800">
          {t.heading}
        </h2>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-nature-100 text-nature-600">
          {new Date().toLocaleDateString(language === 'ko' ? 'ko-KR' : 'en-US', { month: 'short', day: 'numeric' })}
        </span>
      </div>

      {/* Main Focus: Remaining Budget */}
      <div className="mb-8 text-center">
        <p className="text-sm text-stone-600 mb-1">{t.remainingBudget}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-hearth-500">
            {remainingBudget.toLocaleString()}
          </span>
          <span className="text-lg text-stone-500">{t.currency}</span>
        </div>

        {/* Budget Progress Bar */}
        <div className="mt-4 w-full bg-stone-100 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-hearth-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${budgetProgress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-stone-500">
          <span>0</span>
          <span>{summary.budget.target.toLocaleString()}</span>
        </div>
      </div>

      {/* Secondary Stats: Nutrition */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-100">
        {/* Calories */}
        <div className="bg-cream rounded-2xl p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-stone-600">{t.calories}</span>
            <span className="text-xs font-bold text-nature-600">{Math.round(caloriesProgress)}%</span>
          </div>
          <div className="flex items-end gap-1 mb-2">
            <span className="text-lg font-bold text-stone-800">{summary.calories.current}</span>
            <span className="text-xs text-stone-500 mb-1">/ {summary.calories.target}</span>
          </div>
          <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-nature-500 rounded-full"
              style={{ width: `${caloriesProgress}%` }}
            />
          </div>
        </div>

        {/* Protein */}
        <div className="bg-cream rounded-2xl p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-stone-600">{t.protein}</span>
            <span className="text-xs font-bold text-nature-600">{Math.round(proteinProgress)}%</span>
          </div>
          <div className="flex items-end gap-1 mb-2">
            <span className="text-lg font-bold text-stone-800">{summary.protein.current}</span>
            <span className="text-xs text-stone-500 mb-1">/ {summary.protein.target}g</span>
          </div>
          <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-nature-500 rounded-full"
              style={{ width: `${proteinProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

