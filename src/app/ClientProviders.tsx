'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import type { ReactNode } from 'react';

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
