'use client';

import HistoryList from '@/components/history/HistoryList';
import { historySummary } from '@/lib/mock/historySummary';
import { historyLogs } from '@/lib/mock/historyLogs';
import { useLanguage } from '@/hooks/useLanguage';

const messages = {
  ko: {
    heading: '식사 기록',
    subtitle: '나의 식습관을 확인해요',
    weeklySummaryHeading: '이번 주 요약',
    avgCaloriesLabel: '평균 칼로리',
    avgBudgetLabel: '평균 예산',
    totalMealsLabel: '총 식사',
    kcalPerDay: 'kcal/일',
    wonPerDay: '원/일',
    timesUnit: '회',
    allRecordsHeading: '전체 기록',
  },
  en: {
    heading: 'Meal History',
    subtitle: 'Track your eating habits',
    weeklySummaryHeading: 'This Week Summary',
    avgCaloriesLabel: 'Avg Calories',
    avgBudgetLabel: 'Avg Budget',
    totalMealsLabel: 'Total Meals',
    kcalPerDay: 'kcal/day',
    wonPerDay: '/day',
    timesUnit: 'meals',
    allRecordsHeading: 'All Records',
  },
} as const;

export default function HistoryPage() {
  const { language } = useLanguage();
  const t = messages[language];
  return (
    <div className="px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{t.heading}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.subtitle}</p>
      </header>

      {/* Weekly summary */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl shadow-sm p-6 mb-6 border border-blue-100 dark:border-blue-800">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">{t.weeklySummaryHeading}</h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{historySummary.weekRange}</p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.avgCaloriesLabel}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{historySummary.avgCalories}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.kcalPerDay}</p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.avgBudgetLabel}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{historySummary.avgBudget.toLocaleString()}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.wonPerDay}</p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.totalMealsLabel}</p>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{historySummary.totalMeals}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.timesUnit}</p>
          </div>
        </div>
      </div>

      {/* History list */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">{t.allRecordsHeading}</h2>
      </div>

      <HistoryList logs={historyLogs} />
    </div>
  );
}
