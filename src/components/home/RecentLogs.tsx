import { MealLog } from '@/types';

interface RecentLogsProps {
  logs: MealLog[];
}

export default function RecentLogs({ logs }: RecentLogsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold text-slate-800 mb-4">최근 기록</h2>

      <div className="space-y-3">
        {logs.map((log) => (
          <div
            key={log.id}
            className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{log.name}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  {log.date} {log.time}
                </p>
              </div>
              {log.microSuggestionApplied && (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                  ✓
                </span>
              )}
            </div>
            <div className="flex gap-4 text-xs text-slate-600">
              <span>{log.nutrition.calories} kcal</span>
              <span>단백질 {log.nutrition.protein}g</span>
              <span>{log.price.toLocaleString()}원</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
