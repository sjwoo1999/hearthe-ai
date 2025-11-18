import { ScanResult } from '@/types';
import ComparisonCard from './ComparisonCard';

interface ResultViewProps {
  result: ScanResult;
}

export default function ResultView({ result }: ResultViewProps) {
  return (
    <div className="space-y-4">
      {/* Image thumbnail */}
      <div className="w-full aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-2">🍱</div>
          <p className="text-xs text-slate-500">촬영된 이미지</p>
        </div>
      </div>

      {/* Food name */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-1">{result.name}</h2>
        <p className="text-sm text-slate-500">(AI 추정)</p>
      </div>

      {/* Nutrition summary */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">영양 정보</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-1">칼로리</p>
            <p className="text-lg font-bold text-slate-900">{result.nutrition.calories} <span className="text-sm font-normal">kcal</span></p>
          </div>
          <div className="border border-slate-200 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-1">단백질</p>
            <p className="text-lg font-bold text-green-600">{result.nutrition.protein} <span className="text-sm font-normal">g</span></p>
          </div>
          <div className="border border-slate-200 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-1">탄수화물</p>
            <p className="text-lg font-bold text-slate-900">{result.nutrition.carbs} <span className="text-sm font-normal">g</span></p>
          </div>
          <div className="border border-slate-200 rounded-lg p-3">
            <p className="text-xs text-slate-500 mb-1">지방</p>
            <p className="text-lg font-bold text-slate-900">{result.nutrition.fat} <span className="text-sm font-normal">g</span></p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <p className="text-sm text-slate-600">예상 가격: <span className="font-bold text-slate-900">{result.price.toLocaleString()}원</span></p>
        </div>
      </div>

      {/* Micro suggestions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">💡 작은 변화 제안</h3>
        <div className="space-y-2">
          {result.microSuggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg"
            >
              <span className="text-lg">✨</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{suggestion.text}</p>
                <p className="text-xs text-blue-600 mt-1">{suggestion.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <ComparisonCard
        current={{
          name: result.name,
          nutrition: result.nutrition,
          price: result.price,
        }}
        alternative={result.alternative}
      />
    </div>
  );
}
