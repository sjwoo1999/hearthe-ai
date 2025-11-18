import { TodaySummary } from '@/types';

interface TodaySummaryCardProps {
  summary: TodaySummary;
}

// Helper function to clamp ratio between 0 and 1
const clampRatio = (current: number, target: number): number => {
  const ratio = current / target;
  return Math.max(0, Math.min(1, ratio));
};

// Helper function to get status text and color
const getStatus = (
  ratio: number,
  type: 'calories' | 'protein' | 'budget'
): { text: string; color: string } => {
  if (type === 'budget') {
    if (ratio < 0.5) return { text: '예산 여유', color: 'text-emerald-600 dark:text-emerald-400' };
    if (ratio < 0.85) return { text: '예산 정상', color: 'text-sky-600 dark:text-sky-400' };
    return { text: '예산 경고', color: 'text-orange-600 dark:text-orange-400' };
  }

  if (ratio < 0.5) return { text: '여유', color: 'text-emerald-600 dark:text-emerald-400' };
  if (ratio < 0.85) return { text: '적정', color: 'text-sky-600 dark:text-sky-400' };
  return { text: '주의', color: 'text-orange-600 dark:text-orange-400' };
};

export default function TodaySummaryCard({ summary }: TodaySummaryCardProps) {
  const caloriesRatio = clampRatio(summary.calories.current, summary.calories.target);
  const proteinRatio = clampRatio(summary.protein.current, summary.protein.target);
  const budgetRatio = clampRatio(summary.budget.current, summary.budget.target);

  const caloriesPercent = Math.round(caloriesRatio * 100);
  const proteinPercent = Math.round(proteinRatio * 100);
  const budgetPercent = Math.round(budgetRatio * 100);

  const caloriesStatus = getStatus(caloriesRatio, 'calories');
  const proteinStatus = getStatus(proteinRatio, 'protein');
  const budgetStatus = getStatus(budgetRatio, 'budget');

  return (
    <div
      className="bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-700/60 p-6 mb-4 backdrop-blur-sm"
      aria-label="오늘의 영양 및 예산 요약"
    >
      <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-5">
        오늘의 요약
      </h2>

      {/* Calories */}
      <div className="mb-5">
        <div className="flex justify-between items-start mb-1.5">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Calories
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              일일 칼로리 섭취량
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900 dark:text-slate-50">
              {summary.calories.current.toLocaleString()} <span className="text-xs font-normal text-slate-600 dark:text-slate-400">/ {summary.calories.target.toLocaleString()} kcal</span>
            </p>
          </div>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden mb-2">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 transition-all duration-500"
            style={{ width: `${caloriesPercent}%` }}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
            {caloriesPercent}%
          </span>
          <span className={`text-xs font-semibold ${caloriesStatus.color}`}>
            {caloriesStatus.text}
          </span>
        </div>
      </div>

      {/* Protein */}
      <div className="mb-5">
        <div className="flex justify-between items-start mb-1.5">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Protein
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              일일 단백질 섭취량
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900 dark:text-slate-50">
              {summary.protein.current} <span className="text-xs font-normal text-slate-600 dark:text-slate-400">/ {summary.protein.target} g</span>
            </p>
          </div>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden mb-2">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-500 dark:from-emerald-400 dark:via-emerald-500 dark:to-green-600 transition-all duration-500"
            style={{ width: `${proteinPercent}%` }}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
            {proteinPercent}%
          </span>
          <span className={`text-xs font-semibold ${proteinStatus.color}`}>
            {proteinStatus.text}
          </span>
        </div>
      </div>

      {/* Budget */}
      <div>
        <div className="flex justify-between items-start mb-1.5">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Budget
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              오늘 사용한 식비
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900 dark:text-slate-50">
              {summary.budget.current.toLocaleString()} <span className="text-xs font-normal text-slate-600 dark:text-slate-400">/ {summary.budget.target.toLocaleString()}원</span>
            </p>
          </div>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden mb-2">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 dark:from-sky-400 dark:via-sky-500 dark:to-blue-600 transition-all duration-500"
            style={{ width: `${budgetPercent}%` }}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
            {budgetPercent}%
          </span>
          <span className={`text-xs font-semibold ${budgetStatus.color}`}>
            {budgetStatus.text}
          </span>
        </div>
      </div>
    </div>
  );
}
