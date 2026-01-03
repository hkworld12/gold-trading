# Gold Trading Platform - 프로젝트 가이드

## MVP 범위
- **포함**: 홈(시세비교+CTA), sell/buy/trust/faq 페이지만
- **제외**: listings/마켓플레이스 기능은 MVP에서 제외 (추후 확장)

## 금 품목
- 골드바/주물금(순금 위주)

## 개발 규칙
- 모든 Bash 명령은 `cd ~/projects/gold-trading`부터 시작
- DB/Prisma는 MVP에서 제외 (추후 확장)

## 기술 스택
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## 주요 페이지 구조
1. **홈페이지** (`/`): 시세 비교 + CTA
2. **금 판매** (`/sell`): 판매 프로세스 안내
3. **금 구매** (`/buy`): 구매 프로세스 안내
4. **신뢰성** (`/trust`): 신뢰성/보안 정보
5. **FAQ** (`/faq`): 자주 묻는 질문
