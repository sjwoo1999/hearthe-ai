'use client';

import { useState, useMemo } from 'react';
import FilterSection from '@/components/recommend/FilterSection';
import RecommendationList from '@/components/recommend/RecommendationList';
import { recommendations } from '@/lib/mock/recommendations';
import type { Recommendation } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

const messages = {
  ko: {
    heading: '추천 메뉴',
    subtitle: '예산과 시간에 맞는 최적의 선택',
    resultsCount: (count: number) => `${count}개의 추천 메뉴`,
  },
  en: {
    heading: 'Recommended Menu',
    subtitle: 'Best choices for your budget and time',
    resultsCount: (count: number) => `${count} Recommendations`,
  },
} as const;

export default function RecommendPage() {
  const { language } = useLanguage();
  const t = messages[language];
  const [filters, setFilters] = useState({
    budget: 7000,
    time: 10,
    noCook: false,
  });

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter((rec: Recommendation) => {
      // Filter by budget
      if (rec.price > filters.budget) return false;

      // Filter by time (if noCook is true, only show items with prepTime 0)
      if (filters.noCook && rec.prepTime > 0) return false;

      // Filter by prep time
      if (!filters.noCook && rec.prepTime > filters.time) return false;

      return true;
    });
  }, [filters]);

  return (
    <div className="px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{t.heading}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.subtitle}</p>
      </header>

      <FilterSection onFilterChange={setFilters} />

      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
          {t.resultsCount(filteredRecommendations.length)}
        </h2>
      </div>

      <RecommendationList recommendations={filteredRecommendations} />
    </div>
  );
}
