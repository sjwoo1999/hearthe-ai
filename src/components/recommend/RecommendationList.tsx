'use client';

import { useState } from 'react';
import { Recommendation } from '@/types';

interface RecommendationListProps {
  recommendations: Recommendation[];
}

export default function RecommendationList({ recommendations }: RecommendationListProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedRec = recommendations.find((r) => r.id === selectedId);

  return (
    <div className="space-y-3">
      {recommendations.map((rec) => (
        <div
          key={rec.id}
          className="bg-white rounded-xl shadow-sm p-5 border border-slate-200 hover:border-blue-300 transition-colors"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-base font-bold text-slate-900 mb-1">{rec.name}</h3>
              <div className="flex gap-2 flex-wrap">
                {rec.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div>
              <p className="text-xs text-slate-500">칼로리</p>
              <p className="text-sm font-semibold text-slate-900">{rec.nutrition.calories} kcal</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">단백질</p>
              <p className="text-sm font-semibold text-green-600">{rec.nutrition.protein} g</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">가격</p>
              <p className="text-sm font-semibold text-slate-900">{rec.price.toLocaleString()}원</p>
            </div>
          </div>

          {/* Trade-off */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-3">
            <p className="text-xs font-medium text-blue-900">{rec.tradeoff}</p>
          </div>

          {/* Detail button */}
          <button
            onClick={() => setSelectedId(selectedId === rec.id ? null : rec.id)}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg py-2 text-sm font-medium transition-colors"
          >
            {selectedId === rec.id ? '닫기' : '상세 비교'}
          </button>

          {/* Detail panel */}
          {selectedId === rec.id && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-800 mb-3">상세 영양 정보</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border border-slate-200 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">탄수화물</p>
                  <p className="font-semibold text-slate-900">{rec.nutrition.carbs} g</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">지방</p>
                  <p className="font-semibold text-slate-900">{rec.nutrition.fat} g</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">조리 시간</p>
                  <p className="font-semibold text-slate-900">{rec.prepTime === 0 ? '불필요' : `${rec.prepTime}분`}</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">예상 가격</p>
                  <p className="font-semibold text-slate-900">{rec.price.toLocaleString()}원</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
