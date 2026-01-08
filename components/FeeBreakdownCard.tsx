'use client'

import { Card, CardHeader, CardTitle, CardContent } from './ui/Card'
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
  // 계산 전 상태 - 투명성 메시지 + 예시 표시
  if (!result) {
    return (
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              왜 최종가격으로 비교해야 할까요?
            </h3>
            <p className="text-sm text-gray-600">
              같은 기준가라도 수수료가 다르면<br />
              실제 받는 금액이 크게 달라집니다
            </p>
          </div>

          {/* 예시 Breakdown */}
          <div className="space-y-3 mb-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              예시: 금 100g 판매 시
            </div>

            {/* 기준가 */}
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">기준가 합계</span>
              <span className="text-sm font-semibold text-gray-900">10,000,000원</span>
            </div>

            {/* 수수료 5% */}
            <div className="flex justify-between p-3 bg-red-50 rounded-lg border border-red-100">
              <div>
                <div className="text-sm font-medium text-red-900">수수료 5% 차감</div>
                <div className="text-xs text-red-600">-500,000원</div>
              </div>
              <span className="text-base font-bold text-red-700">9,500,000원</span>
            </div>

            {/* 수수료 3% */}
            <div className="flex justify-between p-3 bg-orange-50 rounded-lg border border-orange-100">
              <div>
                <div className="text-sm font-medium text-orange-900">수수료 3% 차감</div>
                <div className="text-xs text-orange-600">-300,000원</div>
              </div>
              <span className="text-base font-bold text-orange-700">9,700,000원</span>
            </div>

            {/* 수수료 1% */}
            <div className="flex justify-between p-3 bg-green-50 rounded-lg border border-green-100">
              <div>
                <div className="text-sm font-medium text-green-900">수수료 1% 차감</div>
                <div className="text-xs text-green-600">-100,000원</div>
              </div>
              <span className="text-base font-bold text-green-700">9,900,000원</span>
            </div>
          </div>

          {/* 핵심 인사이트 */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
            <p className="text-sm font-medium text-blue-900">
              💡 최대 <strong className="text-blue-700">400,000원</strong> 차이
            </p>
            <p className="text-xs text-blue-600 mt-1">
              수수료만 비교해도 이만큼 차이가 납니다
            </p>
          </div>

          {/* CTA */}
          <div>
            <a
              href={buildKakaoUrl(siteConfig.contact.kakaoOpenChat, 'initial_breakdown')}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="kakao" size="lg" className="w-full">
                💬 카톡으로 최종가격 확인
              </Button>
            </a>
          </div>
        </CardContent>
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
      <CardContent className="p-6">
        {/* 기준가 합계 (회색) */}
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">기준가 합계</span>
            <span className="text-lg font-bold text-gray-900">
              {result.base.toLocaleString()}원
            </span>
          </div>
        </div>

        {/* Wise 스타일 "Total included fees" 박스 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
            총 포함 비용 (Total included fees)
          </div>
          <div className="text-sm text-blue-900">
            수수료 1% ~ 5%
          </div>
          <div className="text-xs text-blue-600 mt-1">
            실제 받는 금액은 업체마다 다릅니다
          </div>
        </div>

        {/* 수수료별 최종가격 3가지 */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-100">
            <div>
              <div className="text-sm font-medium text-red-900">수수료 5% 차감</div>
              <div className="text-xs text-red-600">-{feeAmount5.toLocaleString()}원</div>
            </div>
            <div className="text-lg font-bold text-red-700">
              {result.withFee5.toLocaleString()}원
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg border border-orange-100">
            <div>
              <div className="text-sm font-medium text-orange-900">수수료 3% 차감</div>
              <div className="text-xs text-orange-600">-{feeAmount3.toLocaleString()}원</div>
            </div>
            <div className="text-lg font-bold text-orange-700">
              {result.withFee3.toLocaleString()}원
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100">
            <div>
              <div className="text-sm font-medium text-green-900">수수료 1% 차감</div>
              <div className="text-xs text-green-600">-{feeAmount1.toLocaleString()}원</div>
            </div>
            <div className="text-lg font-bold text-green-700">
              {result.withFee1.toLocaleString()}원
            </div>
          </div>
        </div>

        {/* 핵심 인사이트 */}
        <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm font-semibold text-yellow-900">
            💡 최종가격 차이가 최대 <strong>{maxDifference.toLocaleString()}원</strong>까지 날 수 있습니다
          </p>
          <p className="text-xs text-yellow-700 mt-1">
            그래서 &quot;최종가격&quot;으로 비교하는 게 중요합니다
          </p>
        </div>

        {/* Primary CTA - 카카오톡 */}
        <div className="space-y-3">
          <a
            href={buildKakaoUrl(siteConfig.contact.kakaoOpenChat, 'result_primary')}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button variant="kakao" size="lg" className="w-full text-base font-semibold">
              {siteConfig.cta.resultCard}
            </Button>
          </a>

          {/* Secondary CTAs */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={buildKakaoUrl(siteConfig.contact.kakaoChannel, 'result_channel')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm" className="w-full">
                카카오톡 채널
              </Button>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`}>
              <Button variant="secondary" size="sm" className="w-full">
                이메일 문의
              </Button>
            </a>
          </div>

          {/* 오프라인 강의 CTA - props로 제어 */}
          {showOfflineClass && siteConfig.offlineClass.enabled && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">
                이 개념을 60분에 끝내기
              </p>
              <a
                href={siteConfig.offlineClass.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" className="w-full">
                  📚 {siteConfig.offlineClass.title}
                </Button>
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
