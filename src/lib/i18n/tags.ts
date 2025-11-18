import type { Language } from '@/contexts/LanguageContext';

export const tagTranslations = {
  ko: {
    'no-cook': '조리 불필요',
    'high-protein': '고단백',
    'budget-friendly': '가성비',
    'quick-cook': '빠른 조리',
  },
  en: {
    'no-cook': 'No Cooking',
    'high-protein': 'High Protein',
    'budget-friendly': 'Budget Friendly',
    'quick-cook': 'Quick Cook',
  },
} as const;

export const getTagTranslation = (tag: string, language: Language): string => {
  return tagTranslations[language][tag as keyof typeof tagTranslations.ko] || tag;
};
