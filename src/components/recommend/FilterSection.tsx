'use client';

import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface FilterSectionProps {
  onFilterChange?: (filters: {
    budget: number;
    time: number;
    noCook: boolean;
  }) => void;
}

const messages = {
  ko: {
    heading: '필터',
    budgetLabel: '예산 (원)',
    timeLabel: '조리 시간 (분)',
    noCookLabel: '조리 없이 바로 먹기',
    budget5000: '5,000원 이하',
    budget7000: '7,000원 이하',
    budget10000: '10,000원 이하',
    budget15000: '15,000원 이하',
    time0: '조리 불필요',
    time10: '10분 이내',
    time20: '20분 이내',
    time30: '30분 이내',
  },
  en: {
    heading: 'Filters',
    budgetLabel: 'Budget',
    timeLabel: 'Cooking Time (min)',
    noCookLabel: 'Ready to eat (no cooking)',
    budget5000: 'Under ₩5,000',
    budget7000: 'Under ₩7,000',
    budget10000: 'Under ₩10,000',
    budget15000: 'Under ₩15,000',
    time0: 'No cooking required',
    time10: 'Under 10 min',
    time20: 'Under 20 min',
    time30: 'Under 30 min',
  },
} as const;

export default function FilterSection({ onFilterChange }: FilterSectionProps) {
  const { language } = useLanguage();
  const t = messages[language];
  const [budget, setBudget] = useState(7000);
  const [time, setTime] = useState(10);
  const [noCook, setNoCook] = useState(false);

  const handleBudgetChange = (value: number) => {
    setBudget(value);
    onFilterChange?.({ budget: value, time, noCook });
  };

  const handleTimeChange = (value: number) => {
    setTime(value);
    onFilterChange?.({ budget, time: value, noCook });
  };

  const handleNoCookToggle = () => {
    const newNoCook = !noCook;
    setNoCook(newNoCook);
    onFilterChange?.({ budget, time, noCook: newNoCook });
  };

  return (
    <div className="bg-white dark:bg-slate-900/80 rounded-xl shadow-sm p-6 mb-4">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">{t.heading}</h3>

      {/* Budget */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
          {t.budgetLabel}
        </label>
        <select
          value={budget}
          onChange={(e) => handleBudgetChange(Number(e.target.value))}
          className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        >
          <option value={5000}>{t.budget5000}</option>
          <option value={7000}>{t.budget7000}</option>
          <option value={10000}>{t.budget10000}</option>
          <option value={15000}>{t.budget15000}</option>
        </select>
      </div>

      {/* Time */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
          {t.timeLabel}
        </label>
        <select
          value={time}
          onChange={(e) => handleTimeChange(Number(e.target.value))}
          className="w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        >
          <option value={0}>{t.time0}</option>
          <option value={10}>{t.time10}</option>
          <option value={20}>{t.time20}</option>
          <option value={30}>{t.time30}</option>
        </select>
      </div>

      {/* No-cook toggle */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
          {t.noCookLabel}
        </label>
        <button
          onClick={handleNoCookToggle}
          className={`relative w-12 h-6 rounded-full transition-colors ${
            noCook ? 'bg-blue-600 dark:bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
              noCook ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
