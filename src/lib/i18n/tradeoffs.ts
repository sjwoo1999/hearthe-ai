import type { Language } from '@/contexts/LanguageContext';

export const tradeoffTemplates = {
  ko: (calories: number, protein: number, price: number) => {
    const parts: string[] = [];
    if (calories !== 0) parts.push(`${calories > 0 ? '+' : ''}${calories} kcal`);
    if (protein !== 0) parts.push(`${protein > 0 ? '+' : ''}${protein}g 단백질`);
    if (price !== 0) parts.push(`${price > 0 ? '+' : ''}${price.toLocaleString()}원`);
    return `평균 대비: ${parts.join(', ')}`;
  },
  en: (calories: number, protein: number, price: number) => {
    const parts: string[] = [];
    if (calories !== 0) parts.push(`${calories > 0 ? '+' : ''}${calories} kcal`);
    if (protein !== 0) parts.push(`${protein > 0 ? '+' : ''}${protein}g protein`);
    if (price !== 0) parts.push(`${price > 0 ? '+' : ''}₩${price.toLocaleString()}`);
    return `vs. Average: ${parts.join(', ')}`;
  },
};

export const getTradeoff = (calories: number, protein: number, price: number, language: Language): string => {
  return tradeoffTemplates[language](calories, protein, price);
};
