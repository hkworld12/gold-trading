'use client'

import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { siteConfig } from '@/lib/siteConfig'

interface FeeBreakdownCardProps {
  result: {
    base: number
    withFee5: number
    withFee3: number
    withFee1: number
    weight?: number
    basePricePerGram?: number
    type?: 'sell' | 'buy'
  } | null
  showOfflineClass?: boolean
}

function buildKakaoUrl(baseUrl: string, context: string) {
  const params = new URLSearchParams({
    utm_source: siteConfig.tracking.utmSource,
    utm_medium: siteConfig.tracking.utmMedium,
    utm_campaign: siteConfig.tracking.utmCampaign,
    utm_content: context,
  })
  return `${baseUrl}?${params.toString()}`
}

export default function FeeBreakdownCard({ result, showOfflineClass = false }: FeeBreakdownCardProps) {
  // 계산 전 상태
  if (!result) {
    return (
      <Card className="h-full bg-surface-secondary">
        <div className="p-6 h-full flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            계산 결과가 여기에 표시됩니다
          </h3>
          <p className="text-sm text-text-secondary max-w-xs">
            왼쪽에서 거래 정보를 입력하고 계산하기 버튼을 누르세요
          </p>
        </div>
      </Card>
    )
  }

  // 계산 후 상태
  const feeAmount5 = result.base - result.withFee5
  const feeAmount3 = result.base - result.withFee3
  const feeAmount1 = result.base - result.withFee1
  const maxDifference = result.withFee1 - result.withFee5

  return (
    <Card className="h-full">
      <div className="p-6">
        {/* 기준가 합계 */}
        <div className="mb-6">
          <div className="text-sm text-text-secondary mb-1">기준가 합계</div>
          <div className="text-3xl font-bold text-text-primary">
            {result.base.toLocaleString()}
            <span className="text-lg font-normal text-text-muted ml-1">원</span>
          </div>
        </div>

        {/* 구분선 */}
        <div className="h-px bg-border-light mb-6" />

        {/* 수수료별 최종가격 */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">
            수수료별 최종 금액
          </div>

          {/* 수수료 5% */}
          <div className="flex justify-between items-center p-4 bg-surface-secondary rounded-xl">
            <div>
              <div className="text-sm font-medium text-text-primary">수수료 5%</div>
              <div className="text-xs text-text-muted">-{feeAmount5.toLocaleString()}원</div>
            </div>
            <div className="text-lg font-semibold text-text-primary">
              {result.withFee5.toLocaleString()}원
            </div>
          </div>

          {/* 수수료 3% */}
          <div className="flex justify-between items-center p-4 bg-surface-secondary rounded-xl">
            <div>
              <div className="text-sm font-medium text-text-primary">수수료 3%</div>
              <div className="text-xs text-text-muted">-{feeAmount3.toLocaleString()}원</div>
            </div>
            <div className="text-lg font-semibold text-text-primary">
              {result.withFee3.toLocaleString()}원
            </div>
          </div>

          {/* 수수료 1% - 하이라이트 */}
          <div className="flex justify-between items-center p-4 bg-accent/10 rounded-xl border border-accent/20">
            <div>
              <div className="text-sm font-medium text-primary">수수료 1%</div>
              <div className="text-xs text-primary/70">-{feeAmount1.toLocaleString()}원</div>
            </div>
            <div className="text-lg font-bold text-primary">
              {result.withFee1.toLocaleString()}원
            </div>
          </div>
        </div>

        {/* 핵심 인사이트 */}
        <div className="mb-6 p-4 bg-primary/5 rounded-xl">
          <p className="text-sm text-text-primary">
            수수료에 따라 최대 <span className="font-bold text-primary">{maxDifference.toLocaleString()}원</span> 차이
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-3">
          <a
            href={buildKakaoUrl(siteConfig.contact.kakaoOpenChat, 'result_primary')}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button variant="kakao" size="lg" className="w-full">
              카톡으로 최종가격 확인
            </Button>
          </a>

          {showOfflineClass && siteConfig.offlineClass.enabled && (
            <a
              href={siteConfig.offlineClass.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="secondary" size="md" className="w-full">
                {siteConfig.offlineClass.title}
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
