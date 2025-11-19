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
    strokeWidth="2"
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
    strokeWidth="2"
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
    strokeWidth="2"
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const tabs: Tab[] = [
  { name: 'Home', path: '/', icon: <HomeIcon className="h-6 w-6" /> },
  { name: 'Scan', path: '/scan', icon: <ScanIcon className="h-6 w-6" /> },
  { name: 'Recommend', path: '/recommend', icon: <RecommendIcon className="h-6 w-6" /> },
  { name: 'History', path: '/history', icon: <HistoryIcon className="h-6 w-6" /> },
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
      className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-stone-100 safe-area-bottom z-50 shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.03)]"
      aria-label="하단 내비게이션"
    >
      <div className="max-w-md mx-auto flex justify-around items-center px-2 pb-1 pt-2">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`
                flex flex-col items-center justify-center flex-1 py-2 rounded-2xl transition-all duration-300
                ${active
                  ? 'text-hearth-600 bg-hearth-50 scale-105'
                  : 'text-stone-400 hover:text-stone-600 hover:bg-stone-50'
                }
              `}
              aria-label={`${tab.name} 탭으로 이동`}
              aria-current={active ? 'page' : undefined}
            >
              <span className="mb-1">{tab.icon}</span>
              <span className={`text-[10px] font-semibold ${active ? 'opacity-100' : 'opacity-0 hidden'}`}>
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
