import type { Language } from '@/contexts/LanguageContext';

export const guidanceMessages = {
  ko: {
    home: {
      title: '오늘 식사 한눈에 보기',
      body: '칼로리, 단백질, 예산 사용 현황을 확인하고 아래 빠른 액션으로 스캔, 추천, 기록을 바로 시작하세요.',
    },
    recommend: {
      title: '맞춤 메뉴 추천',
      body: '예산과 조리 시간을 먼저 설정하면, 조건에 맞는 메뉴를 추천해드립니다. 각 카드를 눌러 영양 정보를 자세히 비교해보세요.',
    },
    history: {
      title: '식사 패턴 분석',
      body: '주간 요약으로 전체 패턴을 확인하고, 아래 목록에서 개별 식사를 눌러 상세 정보와 개선 이력을 볼 수 있습니다.',
    },
    scanIdle: {
      title: '3단계 간편 분석',
      body: '1) 음식을 촬영하거나 갤러리에서 선택 → 2) AI가 칼로리와 영양소 분석 → 3) 결과 확인 및 더 나은 대안 비교',
    },
    scanAnalyzing: {
      title: 'AI 분석 중',
      body: '칼로리, 단백질, 탄수화물, 지방과 예상 가격을 분석하고 있습니다. 보통 몇 초 정도 소요됩니다.',
    },
    scanResult: {
      title: '분석 완료',
      body: '현재 선택한 식사와 추천 대안을 비교해보세요. 작은 변화 제안을 적용하거나 추천 메뉴로 이동할 수 있습니다.',
    },
  },
  en: {
    home: {
      title: "Today's meals at a glance",
      body: 'Check your calories, protein, and budget usage, then use Quick Actions below to scan, get recommendations, or review your logs.',
    },
    recommend: {
      title: 'Personalized meal recommendations',
      body: 'Set your budget and cooking time first, then browse meals that match your criteria. Tap each card to compare detailed nutrition info.',
    },
    history: {
      title: 'Meal pattern analysis',
      body: 'Use the weekly summary to see your overall pattern, then tap individual meals below to view details and improvement history.',
    },
    scanIdle: {
      title: '3-step easy analysis',
      body: '1) Capture a photo or select from gallery → 2) AI analyzes calories and nutrition → 3) Review results and compare better alternatives',
    },
    scanAnalyzing: {
      title: 'AI analyzing',
      body: "We're analyzing calories, protein, carbs, fat, and estimated price. This usually takes a few seconds.",
    },
    scanResult: {
      title: 'Analysis complete',
      body: 'Compare your current meal with the recommended alternative. You can apply micro suggestions or navigate to recommendations.',
    },
  },
} as const;

export const getGuidance = (
  screen: keyof typeof guidanceMessages.ko,
  language: Language
): { title: string; body: string } => {
  return guidanceMessages[language][screen];
};
