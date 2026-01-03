/**
 * 사이트 전체 설정 파일
 * 배포 전 이 파일의 모든 정보를 실제 비즈니스 정보로 업데이트하세요
 */

export const siteConfig = {
  // 기본 정보
  siteName: '금 거래소',
  siteUrl: 'https://your-domain.com', // TODO: Vercel 배포 후 실제 도메인으로 변경
  description: '시세 기준 투명한 금 거래 플랫폼. 실시간 시세 비교와 합리적인 가격으로 금을 사고팔 수 있습니다.',

  // 연락처 정보
  contact: {
    phone: '010-1234-5678', // TODO: 실제 전화번호로 변경
    phoneDisplay: '010-1234-5678',
    kakaoChannel: 'http://pf.kakao.com/_yourID', // TODO: 실제 카카오톡 채널 URL로 변경
    email: 'contact@example.com', // TODO: 실제 이메일로 변경
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
