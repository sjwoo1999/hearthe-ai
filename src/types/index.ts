// Core nutrition and meal types
export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface MealLog {
  id: string;
  date: string;
  time: string;
  name: string;
  nutrition: NutritionInfo;
  price: number;
  imageUrl?: string;
  microSuggestionApplied?: boolean;
}

export interface TodaySummary {
  calories: {
    current: number;
    target: number;
  };
  protein: {
    current: number;
    target: number;
  };
  budget: {
    current: number;
    target: number;
  };
}

export interface MicroSuggestion {
  id: string;
  text: string;
  impact: string; // e.g., "-150 kcal", "+6g protein"
}

export interface Alternative {
  name: string;
  nutrition: NutritionInfo;
  price: number;
  prepTime: number; // minutes
}

export interface ScanResult {
  name: string;
  nutrition: NutritionInfo;
  price: number;
  imageUrl?: string;
  microSuggestions: MicroSuggestion[];
  alternative: Alternative;
}

export interface Recommendation {
  id: string;
  name: string;
  nutrition: NutritionInfo;
  price: number;
  prepTime: number;
  tags: string[]; // e.g., ["no-cook", "high-protein"]
  tradeoff: string;
}

export interface HistorySummary {
  avgCalories: number;
  avgBudget: number;
  totalMeals: number;
  weekRange: string; // e.g., "2025.01.12 - 01.18"
}
