'use client';

interface FlowGuideBannerProps {
  title: string;
  body: string;
  variant?: 'info' | 'tip';
}

export default function FlowGuideBanner({
  title,
  body,
  variant = 'info'
}: FlowGuideBannerProps) {
  const variantStyles = {
    info: 'bg-blue-50/80 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    tip: 'bg-amber-50/80 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
  };

  const iconStyles = {
    info: 'text-blue-600 dark:text-blue-400',
    tip: 'text-amber-600 dark:text-amber-400',
  };

  return (
    <div
      className={`rounded-xl border backdrop-blur-sm p-4 ${variantStyles[variant]}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 mt-0.5 ${iconStyles[variant]}`}>
          {variant === 'info' ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
            {title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
