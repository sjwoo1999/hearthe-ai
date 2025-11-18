import TodaySummaryCard from '@/components/home/TodaySummaryCard';
import QuickActions from '@/components/home/QuickActions';
import RecentLogs from '@/components/home/RecentLogs';
import { todaySummary } from '@/lib/mock/todaySummary';
import { recentLogs } from '@/lib/mock/recentLogs';

export default function HomePage() {
  return (
    <div className="px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Hearthé AI</h1>
        <p className="text-sm text-slate-600 mt-1">오늘도 현명한 식사를 시작해요</p>
      </header>

      <TodaySummaryCard summary={todaySummary} />
      <QuickActions />
      <RecentLogs logs={recentLogs} />
    </div>
  );
}
