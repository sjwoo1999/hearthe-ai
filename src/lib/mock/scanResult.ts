import { ScanResult } from '@/types';

export const scanResult: ScanResult = {
  name: '편의점 제육 도시락',
  nameKey: 'convenience-pork-lunchbox',
  nutrition: {
    calories: 780,
    protein: 28,
    carbs: 95,
    fat: 22,
  },
  price: 5200,
  microSuggestions: [
    {
      id: '1',
      text: '음료를 물로 변경',
      textKey: 'replace-drink-water',
      impact: '-150 kcal, -1500원',
      impactData: {
        calories: -150,
        price: -1500,
      },
    },
    {
      id: '2',
      text: '삶은 계란 1개 추가',
      textKey: 'add-boiled-egg',
      impact: '+6g 단백질, +80 kcal, +800원',
      impactData: {
        protein: 6,
        calories: 80,
        price: 800,
      },
    },
    {
      id: '3',
      text: '밥 양 20% 줄이기',
      textKey: 'reduce-rice-portion',
      impact: '-90 kcal, -19g 탄수화물',
      impactData: {
        calories: -90,
        carbs: -19,
      },
    },
  ],
  alternative: {
    name: '닭가슴살 샐러드 + 현미밥',
    nameKey: 'chicken-salad-brown-rice',
    nutrition: {
      calories: 620,
      protein: 35,
      carbs: 68,
      fat: 12,
    },
    price: 5500,
    prepTime: 0,
  },
};
