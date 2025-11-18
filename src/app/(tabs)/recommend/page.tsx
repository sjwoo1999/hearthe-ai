import FilterSection from '@/components/recommend/FilterSection';
import RecommendationList from '@/components/recommend/RecommendationList';
import { recommendations } from '@/lib/mock/recommendations';

export default function RecommendPage() {
  return (
    <div className="px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">추천 메뉴</h1>
        <p className="text-sm text-slate-600 mt-1">예산과 시간에 맞는 최적의 선택</p>
      </header>

      <FilterSection />

      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800 mb-3">
          {recommendations.length}개의 추천 메뉴
        </h2>
      </div>

      <RecommendationList recommendations={recommendations} />
    </div>
  );
}
