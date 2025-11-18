'use client';

import TodaySummaryCard from '@/components/home/TodaySummaryCard';
import QuickActions from '@/components/home/QuickActions';
import RecentLogs from '@/components/home/RecentLogs';
import FlowGuideBanner from '@/components/common/FlowGuideBanner';
import { todaySummary } from '@/lib/mock/todaySummary';
import { recentLogs } from '@/lib/mock/recentLogs';
import { useLanguage } from '@/hooks/useLanguage';
import { getGuidance } from '@/lib/i18n/guidance';

const messages = {
  ko: {
    title: 'Hearthé AI',
    subtitle: '오늘도 현명한 식사를 시작해요',
  },
  en: {
    title: 'Hearthé AI',
    subtitle: 'Start your smart meal today',
  },
} as const;

export default function HomePage() {
  const { language } = useLanguage();
  const t = messages[language];
  const guidance = getGuidance('home', language);

  return (
    <div className="px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{t.title}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.subtitle}</p>
      </header>

      <FlowGuideBanner
        title={guidance.title}
        body={guidance.body}
        variant="info"
      />

      <div className="mt-6">
        <TodaySummaryCard summary={todaySummary} />
      </div>
      <QuickActions />
      <RecentLogs logs={recentLogs} />
    </div>
  );
}
