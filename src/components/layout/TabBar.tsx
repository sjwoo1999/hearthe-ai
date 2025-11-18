'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Tab {
  name: string;
  path: string;
  icon: React.ReactNode;
}

// SVG Icons
const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const ScanIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const RecommendIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 19V5" />
    <polyline points="5 12 12 5 19 12" />
    <polyline points="5 12 12 19 19 12" />
  </svg>
);

const HistoryIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const tabs: Tab[] = [
  { name: 'Home', path: '/', icon: <HomeIcon className="h-5 w-5" /> },
  { name: 'Scan', path: '/scan', icon: <ScanIcon className="h-5 w-5" /> },
  { name: 'Recommend', path: '/recommend', icon: <RecommendIcon className="h-5 w-5" /> },
  { name: 'History', path: '/history', icon: <HistoryIcon className="h-5 w-5" /> },
];

export default function TabBar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200/60 dark:border-slate-700/60 safe-area-bottom z-50"
      aria-label="하단 내비게이션"
    >
      <div className="max-w-md mx-auto flex justify-around items-center">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`
                flex flex-col items-center justify-center flex-1 py-2 px-3
                min-h-[48px] transition-all duration-200
                ${
                  active
                    ? 'bg-orange-50 dark:bg-orange-900/40 text-orange-700 dark:text-orange-200 border-t-2 border-orange-200/80 dark:border-orange-700/70 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 border-t-2 border-transparent hover:text-slate-700 dark:hover:text-slate-300'
                }
              `}
              aria-label={`${tab.name} 탭으로 이동`}
              aria-current={active ? 'page' : undefined}
            >
              <span className="mb-1">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
