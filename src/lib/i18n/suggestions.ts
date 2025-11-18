import type { Language } from '@/contexts/LanguageContext';

export const suggestionTemplates = {
  ko: {
    'replace-drink-water': '음료를 물로 변경',
    'reduce-rice': '밥 양 줄이기',
    'reduce-rice-portion': '밥 양 20% 줄이기',
    'add-vegetables': '채소 추가',
    'add-boiled-egg': '삶은 계란 1개 추가',
  },
  en: {
    'replace-drink-water': 'Replace drink with water',
    'reduce-rice': 'Reduce rice portion',
    'reduce-rice-portion': 'Reduce rice portion by 20%',
    'add-vegetables': 'Add vegetables',
    'add-boiled-egg': 'Add 1 boiled egg',
  },
} as const;

interface ImpactData {
  calories?: number;
  protein?: number;
  carbs?: number;
  price?: number;
}

export const impactTemplates = {
  ko: (data: ImpactData) => {
    const parts: string[] = [];
    if (data.protein !== undefined) parts.push(`${data.protein > 0 ? '+' : ''}${data.protein}g 단백질`);
    if (data.calories !== undefined) parts.push(`${data.calories > 0 ? '+' : ''}${data.calories} kcal`);
    if (data.carbs !== undefined) parts.push(`${data.carbs > 0 ? '+' : ''}${data.carbs}g 탄수화물`);
    if (data.price !== undefined) parts.push(`${data.price > 0 ? '+' : ''}${data.price.toLocaleString()}원`);
    return parts.join(', ');
  },
  en: (data: ImpactData) => {
    const parts: string[] = [];
    if (data.protein !== undefined) parts.push(`${data.protein > 0 ? '+' : ''}${data.protein}g protein`);
    if (data.calories !== undefined) parts.push(`${data.calories > 0 ? '+' : ''}${data.calories} kcal`);
    if (data.carbs !== undefined) parts.push(`${data.carbs > 0 ? '+' : ''}${data.carbs}g carbs`);
    if (data.price !== undefined) parts.push(`${data.price > 0 ? '+' : ''}₩${data.price.toLocaleString()}`);
    return parts.join(', ');
  },
};

export const getSuggestion = (key: string, language: Language): string => {
  return suggestionTemplates[language][key as keyof typeof suggestionTemplates.ko] || key;
};

export const getImpact = (data: ImpactData, language: Language): string => {
  return impactTemplates[language](data);
};
