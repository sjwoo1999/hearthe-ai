import { MealLog } from '@/types';

export const recentLogs: MealLog[] = [
  {
    id: '1',
    date: '2025-01-18',
    time: '12:30',
    name: '편의점 제육 도시락',
    nameKey: 'convenience-pork-lunchbox',
    nutrition: {
      calories: 780,
      protein: 28,
      carbs: 95,
      fat: 22,
    },
    price: 5200,
    microSuggestionApplied: true,
  },
  {
    id: '2',
    date: '2025-01-18',
    time: '08:00',
    name: '아메리카노 + 에그샌드위치',
    nameKey: 'americano-egg-sandwich',
    nutrition: {
      calories: 470,
      protein: 17,
      carbs: 42,
      fat: 18,
    },
    price: 3300,
    microSuggestionApplied: false,
  },
];
