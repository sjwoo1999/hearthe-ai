import { Recommendation } from '@/types';

export const recommendations: Recommendation[] = [
  {
    id: '1',
    name: '닭가슴살 샐러드 + 삶은계란',
    nameKey: 'chicken-salad-boiled-eggs',
    nutrition: {
      calories: 420,
      protein: 38,
      carbs: 28,
      fat: 12,
    },
    price: 6800,
    prepTime: 0,
    tags: ['no-cook', 'high-protein'],
    tradeoff: '평균 대비: -180 kcal, +12g 단백질, +300원',
    tradeoffData: {
      calories: -180,
      protein: 12,
      price: 300,
    },
  },
  {
    id: '2',
    name: '참치김밥 + 우유',
    nameKey: 'tuna-kimbap-milk',
    nutrition: {
      calories: 580,
      protein: 22,
      carbs: 78,
      fat: 16,
    },
    price: 4500,
    prepTime: 0,
    tags: ['no-cook', 'budget-friendly'],
    tradeoff: '평균 대비: -20 kcal, +5g 단백질, -2000원',
    tradeoffData: {
      calories: -20,
      protein: 5,
      price: -2000,
    },
  },
  {
    id: '3',
    name: '냉동 닭가슴살 덮밥',
    nameKey: 'frozen-chicken-rice-bowl',
    nutrition: {
      calories: 520,
      protein: 35,
      carbs: 62,
      fat: 10,
    },
    price: 5500,
    prepTime: 8,
    tags: ['quick-cook', 'high-protein'],
    tradeoff: '평균 대비: -80 kcal, +18g 단백질, -1000원',
    tradeoffData: {
      calories: -80,
      protein: 18,
      price: -1000,
    },
  },
];
