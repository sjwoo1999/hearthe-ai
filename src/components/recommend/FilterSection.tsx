'use client';

import { useState } from 'react';

interface FilterSectionProps {
  onFilterChange?: (filters: {
    budget: number;
    time: number;
    noCook: boolean;
  }) => void;
}

export default function FilterSection({ onFilterChange }: FilterSectionProps) {
  const [budget, setBudget] = useState(7000);
  const [time, setTime] = useState(10);
  const [noCook, setNoCook] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
      <h3 className="text-lg font-bold text-slate-800 mb-4">필터</h3>

      {/* Budget */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          예산 (원)
        </label>
        <select
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={5000}>5,000원 이하</option>
          <option value={7000}>7,000원 이하</option>
          <option value={10000}>10,000원 이하</option>
          <option value={15000}>15,000원 이하</option>
        </select>
      </div>

      {/* Time */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          조리 시간 (분)
        </label>
        <select
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={0}>조리 불필요</option>
          <option value={10}>10분 이내</option>
          <option value={20}>20분 이내</option>
          <option value={30}>30분 이내</option>
        </select>
      </div>

      {/* No-cook toggle */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700">
          조리 없이 바로 먹기
        </label>
        <button
          onClick={() => setNoCook(!noCook)}
          className={`relative w-12 h-6 rounded-full transition-colors ${
            noCook ? 'bg-blue-600' : 'bg-slate-300'
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
