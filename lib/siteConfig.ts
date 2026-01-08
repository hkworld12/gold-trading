/**
 * 사이트 전체 설정 파일
 * 배포 전 이 파일의 모든 정보를 실제 비즈니스 정보로 업데이트하세요
 */

export const siteConfig = {
  // 기본 정보
  siteName: '금 거래소',
  siteUrl: 'https://gold-trading.vercel.app',
  description: '시세 기준 투명한 금 거래 플랫폼. 실시간 시세 비교와 합리적인 가격으로 금을 사고팔 수 있습니다.',

  // 연락처 정보
  contact: {
    phone: '010-1234-5678', // TODO: 실제 전화번호로 변경
    phoneDisplay: '010-1234-5678',
    kakaoChannel: 'http://pf.kakao.com/_yourID', // TODO: 실제 카카오톡 채널 URL로 변경
    kakaoOpenChat: 'https://open.kakao.com/o/your-openchat-id', // TODO: 실제 오픈채팅 URL로 변경
    kakaoLabel: '카톡으로 최종가격 확인',
    email: 'contact@example.com', // TODO: 실제 이메일로 변경
  },

  // CTA 라벨
  cta: {
    hero: {
      primary: '💬 카톡으로 최종가격 확인',
      secondary: '직접 계산해보기',
    },
    calculator: '💰 최종가격 계산하기',
    resultCard: '💬 이 조건 그대로 카톡에 붙여넣고 문의하기',
    priceCheck: '내 예산으로 최종가격 체크하기',
    offlineClass: '오프라인 강의 신청하기',
  },

  // 오프라인 강의
  offlineClass: {
    enabled: true,
    title: '금 거래 제대로 배우기',
    description: '수수료부터 시세 계산까지, 실전 금 거래 교육',
    url: 'https://forms.gle/your-form-id', // TODO: 구글폼/노션/캘린들리 URL로 변경
  },

  // UTM 기본값
  tracking: {
    utmSource: 'landing',
    utmMedium: 'cta',
    utmCampaign: 'gold-trading',
  },

  // 영업 시간
  businessHours: {
    weekday: '평일 09:00 - 18:00',
    saturday: '토요일 09:00 - 15:00',
    sunday: '일요일 및 공휴일 휴무',
    display: '평일 09:00 - 18:00 | 토요일 09:00 - 15:00',
  },

  // 사업자 정보
  business: {
    name: '금 거래소', // TODO: 실제 상호명으로 변경
    owner: '홍길동', // TODO: 실제 대표자명으로 변경
    businessNumber: '123-45-67890', // TODO: 실제 사업자등록번호로 변경
    address: '서울특별시 강남구 테헤란로 123', // TODO: 실제 주소로 변경
    detailAddress: '1층', // TODO: 상세 주소로 변경
  },

  // 거래 정책
  policy: {
    inspection: {
      method: '공인된 XRF 검수 장비를 사용하여 순도와 무게를 정밀 측정',
      standards: '한국금거래소 기준 시세 적용',
      transparency: '검수 과정 고객 직접 확인 가능',
    },
    payment: {
      timing: '검수 완료 즉시 지급',
      methods: '현금, 계좌이체, 카드 결제',
      largeAmount: '고액 거래 시 계좌이체 권장',
    },
    dispute: {
      refundPeriod: '거래 후 7일 이내 하자 발견 시 기준에 따라 환불/교환 검토',
      thirdPartyInspection: '제3자 전문기관 재검수 요청 가능 (비용/절차는 별도 안내)',
      mediation: '분쟁 발생 시 소비자보호원 중재 절차 안내',
    },
  },

  // SEO
  seo: {
    keywords: '금 거래, 금 매입, 금 판매, 금 시세, 골드바, 금괴, 금 투자',
    ogImage: '/og.svg', // TODO: 배포 전 실제 og.png (1200x630px)로 교체
    favicon: '/favicon.svg', // TODO: 배포 전 favicon.ico로 교체
    twitterHandle: '@yourusername', // TODO: 트위터 계정 (선택사항)
  },
}

export type SiteConfig = typeof siteConfig
