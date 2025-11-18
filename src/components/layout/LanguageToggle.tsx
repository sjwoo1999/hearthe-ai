'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors min-h-[36px] backdrop-blur-sm"
    >
      {language === 'ko' ? (
        <span>한 / En</span>
      ) : (
        <span>Ko / EN</span>
      )}
    </button>
  );
}
