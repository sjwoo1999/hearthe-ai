import type { Language } from '@/contexts/LanguageContext';

export const foodNames = {
  ko: {
    'convenience-pork-lunchbox': '편의점 제육 도시락',
    'americano-egg-sandwich': '아메리카노 + 에그샌드위치',
    'chicken-salad': '닭가슴살 샐러드',
    'chicken-salad-brown-rice': '닭가슴살 샐러드 + 현미밥',
    'chicken-salad-boiled-eggs': '닭가슴살 샐러드 + 삶은계란',
    'tuna-kimbap': '참치김밥',
    'tuna-kimbap-milk': '참치김밥 + 우유',
    'kimbap-milk': '김밥 + 우유',
    'frozen-chicken-rice-bowl': '냉동 닭가슴살 덮밥',
    'chicken-rice-bowl': '닭가슴살 덮밥',
    'granola-yogurt': '그래놀라 + 요거트',
    'protein-shake-banana': '프로틴 쉐이크 + 바나나',
    'boiled-eggs-sweet-potato': '삶은 계란 2개 + 고구마',
    'greek-yogurt-granola': '그릭요거트 + 그래놀라',
    'salmon-avocado-bowl': '연어 아보카도 볼',
    'vegetable-soup-bread': '야채 수프 + 빵',
    'tofu-stir-fry-rice': '두부 볶음밥',
  },
  en: {
    'convenience-pork-lunchbox': 'Convenience Store Spicy Pork Lunchbox',
    'americano-egg-sandwich': 'Americano + Egg Sandwich',
    'chicken-salad': 'Chicken Breast Salad',
    'chicken-salad-brown-rice': 'Chicken Salad + Brown Rice',
    'chicken-salad-boiled-eggs': 'Chicken Salad + Boiled Eggs',
    'tuna-kimbap': 'Tuna Kimbap',
    'tuna-kimbap-milk': 'Tuna Kimbap + Milk',
    'kimbap-milk': 'Kimbap + Milk',
    'frozen-chicken-rice-bowl': 'Frozen Chicken Rice Bowl',
    'chicken-rice-bowl': 'Chicken Rice Bowl',
    'granola-yogurt': 'Granola + Yogurt',
    'protein-shake-banana': 'Protein Shake + Banana',
    'boiled-eggs-sweet-potato': '2 Boiled Eggs + Sweet Potato',
    'greek-yogurt-granola': 'Greek Yogurt + Granola',
    'salmon-avocado-bowl': 'Salmon Avocado Bowl',
    'vegetable-soup-bread': 'Vegetable Soup + Bread',
    'tofu-stir-fry-rice': 'Tofu Fried Rice',
  },
} as const;

export const getFoodName = (key: string, language: Language): string => {
  return foodNames[language][key as keyof typeof foodNames.ko] || key;
};
