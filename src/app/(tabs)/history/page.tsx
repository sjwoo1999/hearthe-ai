import HistoryList from '@/components/history/HistoryList';
import { historySummary } from '@/lib/mock/historySummary';
import { historyLogs } from '@/lib/mock/historyLogs';

export default function HistoryPage() {
  return (
    <div className="px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">식사 기록</h1>
        <p className="text-sm text-slate-600 mt-1">나의 식습관을 확인해요</p>
      </header>

      {/* Weekly summary */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl shadow-sm p-6 mb-6 border border-blue-100">
        <h2 className="text-lg font-bold text-slate-800 mb-4">이번 주 요약</h2>
        <p className="text-xs text-slate-600 mb-4">{historySummary.weekRange}</p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-3 border border-slate-200">
            <p className="text-xs text-slate-500 mb-1">평균 칼로리</p>
            <p className="text-lg font-bold text-slate-900">{historySummary.avgCalories}</p>
            <p className="text-xs text-slate-500">kcal/일</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-slate-200">
            <p className="text-xs text-slate-500 mb-1">평균 예산</p>
            <p className="text-lg font-bold text-slate-900">{historySummary.avgBudget.toLocaleString()}</p>
            <p className="text-xs text-slate-500">원/일</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-slate-200">
            <p className="text-xs text-slate-500 mb-1">총 식사</p>
            <p className="text-lg font-bold text-slate-900">{historySummary.totalMeals}</p>
            <p className="text-xs text-slate-500">회</p>
          </div>
        </div>
      </div>

      {/* History list */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800 mb-3">전체 기록</h2>
      </div>

      <HistoryList logs={historyLogs} />
    </div>
  );
}
