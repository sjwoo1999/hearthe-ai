import { NutritionInfo, Alternative } from '@/types';

interface ComparisonCardProps {
  current: {
    name: string;
    nutrition: NutritionInfo;
    price: number;
  };
  alternative: Alternative;
}

export default function ComparisonCard({ current, alternative }: ComparisonCardProps) {
  const calorieDiff = alternative.nutrition.calories - current.nutrition.calories;
  const proteinDiff = alternative.nutrition.protein - current.nutrition.protein;
  const priceDiff = alternative.price - current.price;

  const formatDiff = (value: number, unit: string, inverse = false) => {
    const sign = value > 0 ? '+' : '';
    const color = inverse
      ? value > 0
        ? 'text-red-600'
        : 'text-green-600'
      : value > 0
      ? 'text-green-600'
      : 'text-red-600';
    return <span className={color}>{sign}{value}{unit}</span>;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">대안 비교</h3>

      <div className="space-y-4">
        {/* Current */}
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
          <p className="text-xs font-semibold text-slate-500 mb-2">현재 선택</p>
          <h4 className="text-sm font-bold text-slate-900 mb-3">{current.name}</h4>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <p className="text-slate-500">칼로리</p>
              <p className="font-semibold text-slate-900">{current.nutrition.calories} kcal</p>
            </div>
            <div>
              <p className="text-slate-500">단백질</p>
              <p className="font-semibold text-slate-900">{current.nutrition.protein} g</p>
            </div>
            <div>
              <p className="text-slate-500">가격</p>
              <p className="font-semibold text-slate-900">{current.price.toLocaleString()}원</p>
            </div>
          </div>
        </div>

        {/* Alternative */}
        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
          <p className="text-xs font-semibold text-blue-600 mb-2">추천 대안</p>
          <h4 className="text-sm font-bold text-slate-900 mb-3">{alternative.name}</h4>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <p className="text-slate-500">칼로리</p>
              <p className="font-semibold text-slate-900">{alternative.nutrition.calories} kcal</p>
            </div>
            <div>
              <p className="text-slate-500">단백질</p>
              <p className="font-semibold text-slate-900">{alternative.nutrition.protein} g</p>
            </div>
            <div>
              <p className="text-slate-500">가격</p>
              <p className="font-semibold text-slate-900">{alternative.price.toLocaleString()}원</p>
            </div>
          </div>
        </div>

        {/* Trade-off */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 border border-blue-100">
          <p className="text-xs font-semibold text-slate-600 mb-2">차이점</p>
          <div className="flex gap-4 text-sm">
            <span>{formatDiff(calorieDiff, ' kcal', true)}</span>
            <span>{formatDiff(proteinDiff, 'g 단백질')}</span>
            <span>{formatDiff(priceDiff, '원', true)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
