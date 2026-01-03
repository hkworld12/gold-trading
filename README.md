# 금 거래소 웹사이트

금 매입/판매 서비스를 제공하는 웹사이트 MVP

## 프로젝트 구조

```
gold-trading/
├── app/
│   ├── page.tsx              # 홈 (시세 비교 + CTA)
│   ├── sell/page.tsx         # 금 판매 안내
│   ├── buy/page.tsx          # 금 구매 안내
│   ├── trust/page.tsx        # 신뢰보증
│   ├── faq/page.tsx          # FAQ
│   ├── api/
│   │   └── gold-price/       # Mock 금시세 API
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx        # 네비게이션 바
│   ├── PriceComparisonCard.tsx  # 시세 비교 카드
│   └── ContactCTA.tsx        # 연락처 CTA
├── lib/
│   └── types.ts              # TypeScript 타입
└── utils/
    └── mockGoldPrice.ts      # Mock 시세 생성 유틸
```

## 기능

### 홈 페이지 (/)
- 실시간 금시세 비교 카드 (기준시세/타사/우리 매입·판매)
- 전화/카카오톡 상담 CTA
- 주요 서비스 카드 (판매/구매/신뢰보증)

### 금 판매 (/sell)
- 매입 서비스 안내
- 판매 절차 설명
- 매입 가능 품목

### 금 구매 (/buy)
- 판매 제품 안내
- 구매 절차 설명
- 제품 종류 소개

### 신뢰보증 (/trust)
- 사업자 정보
- 안전 거래 프로세스
- 고객 보호 정책

### FAQ (/faq)
- 자주 묻는 질문과 답변

## 설치 및 실행

### 1. Node.js 설치 (WSL 환경)

```bash
# nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 셸 재시작
exec $SHELL

# Node LTS 설치
nvm install --lts
nvm use --lts

# 확인
node -v
npm -v
```

### 2. 프로젝트 의존성 설치

```bash
cd ~/projects/gold-trading
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

## 기술 스택

- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **폼 관리**: React Hook Form
- **검증**: Zod

## Mock 데이터

현재는 Mock 데이터로 금시세를 생성합니다:
- 기준시세: 랜덤 변동으로 실시간 시세 시뮬레이션
- 타사 매입 범위: 기준시세의 97.5-98.8%
- 우리 매입가: 기준시세의 99.2% (타사 대비 소폭 우위)
- 우리 판매가: 기준시세의 101.2%

실제 금시세 API로 교체 가능합니다.

## 향후 확장

- 실제 금시세 API 연동
- 사용자 인증 (NextAuth.js)
- 문의 폼 백엔드 연동
- 관리자 대시보드
- 거래 내역 관리
- 결제 시스템 (PG 연동)

## 라이선스

MIT
