import TabBar from '@/components/layout/TabBar';

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="max-w-md mx-auto pb-20 min-h-screen">
        {children}
      </main>
      <TabBar />
    </>
  );
}
