import { ScanResult } from '@/types';

export const scanResult: ScanResult = {
  name: '편의점 제육 도시락',
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
      impact: '-150 kcal, -1500원',
    },
    {
      id: '2',
      text: '삶은 계란 1개 추가',
      impact: '+6g 단백질, +80 kcal, +800원',
    },
    {
      id: '3',
      text: '밥 양 20% 줄이기',
      impact: '-90 kcal, -19g 탄수화물',
    },
  ],
  alternative: {
    name: '닭가슴살 샐러드 + 현미밥',
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
