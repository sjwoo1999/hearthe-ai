import TabBar from '@/components/layout/TabBar';
import LanguageToggle from '@/components/layout/LanguageToggle';

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-w-md mx-auto">
        <header className="flex items-center justify-between px-4 py-3 mb-2">
          <h1 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Hearthé AI
          </h1>
          <LanguageToggle />
        </header>
      </div>
      <main className="max-w-md mx-auto pb-20 min-h-screen">
        {children}
      </main>
      <TabBar />
    </>
  );
}
