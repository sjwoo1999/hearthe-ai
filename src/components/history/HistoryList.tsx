'use client';

import { useState } from 'react';
import { MealLog } from '@/types';

interface HistoryListProps {
  logs: MealLog[];
}

export default function HistoryList({ logs }: HistoryListProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedLog = logs.find((log) => log.id === selectedId);

  return (
    <div className="space-y-3">
      {logs.map((log) => (
        <div
          key={log.id}
          className="bg-white rounded-xl shadow-sm p-5 border border-slate-200"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-base font-bold text-slate-900 mb-1">{log.name}</h3>
              <p className="text-xs text-slate-500">
                {log.date} · {log.time}
              </p>
            </div>
            {log.microSuggestionApplied && (
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium flex items-center gap-1">
                <span>✓</span>
                <span>개선됨</span>
              </span>
            )}
          </div>

          {/* Quick stats */}
          <div className="flex gap-4 text-sm text-slate-600 mb-3">
            <span>{log.nutrition.calories} kcal</span>
            <span>단백질 {log.nutrition.protein}g</span>
            <span>{log.price.toLocaleString()}원</span>
          </div>

          {/* Detail button */}
          <button
            onClick={() => setSelectedId(selectedId === log.id ? null : log.id)}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg py-2 text-sm font-medium transition-colors"
          >
            {selectedId === log.id ? '닫기' : '상세 보기'}
          </button>

          {/* Detail panel */}
          {selectedId === log.id && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-800 mb-3">상세 영양 정보</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border border-slate-200 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">칼로리</p>
                  <p className="font-semibold text-slate-900">{log.nutrition.calories} kcal</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">단백질</p>
                  <p className="font-semibold text-green-600">{log.nutrition.protein} g</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">탄수화물</p>
                  <p className="font-semibold text-slate-900">{log.nutrition.carbs} g</p>
                </div>
                <div className="border border-slate-200 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">지방</p>
                  <p className="font-semibold text-slate-900">{log.nutrition.fat} g</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
