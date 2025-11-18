'use client';

import { useState, useMemo } from 'react';
import FilterSection from '@/components/recommend/FilterSection';
import RecommendationList from '@/components/recommend/RecommendationList';
import { recommendations } from '@/lib/mock/recommendations';
import type { Recommendation } from '@/types';

export default function RecommendPage() {
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
        <h1 className="text-2xl font-bold text-slate-900">추천 메뉴</h1>
        <p className="text-sm text-slate-600 mt-1">예산과 시간에 맞는 최적의 선택</p>
      </header>

      <FilterSection onFilterChange={setFilters} />

      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800 mb-3">
          {filteredRecommendations.length}개의 추천 메뉴
        </h2>
      </div>

      <RecommendationList recommendations={filteredRecommendations} />
    </div>
  );
}
