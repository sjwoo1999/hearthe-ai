import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import type { Language } from '@/contexts/LanguageContext';

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    // Return default values instead of throwing error
    console.warn('useLanguage must be used within a LanguageProvider');
    return {
      language: 'ko' as Language,
      setLanguage: () => {},
      toggleLanguage: () => {},
    };
  }

  return context;
}
