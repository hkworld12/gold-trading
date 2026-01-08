'use client'

import { useState } from 'react'
import CalculatorCard from '@/components/CalculatorCard'
import FeeBreakdownCard from '@/components/FeeBreakdownCard'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/siteConfig'

export default function Home() {
  const [goldWeight, setGoldWeight] = useState('')
  const [basePrice, setBasePrice] = useState('')
  const [transactionType, setTransactionType] = useState('sell')
  const [calculatedResult, setCalculatedResult] = useState<{
    base: number
    withFee5: number
    withFee3: number
    withFee1: number
  } | null>(null)

  const calculatePrice = () => {
    const weight = parseFloat(goldWeight)
    const price = parseFloat(basePrice)

    if (isNaN(weight) || isNaN(price) || weight <= 0 || price <= 0) {
      alert('올바른 숫자를 입력해주세요')
      return
    }

    const base = weight * price
    setCalculatedResult({
      base,
      withFee5: base * 0.95,
      withFee3: base * 0.97,
      withFee1: base * 0.99,
    })
  }

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* 히어로 섹션 - 정보 비대칭 해결 강조 */}
        <div className="mb-12 text-center">
          {/* 배지 - 개인 프로젝트 강조 유지 */}
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm mb-4 font-medium">
            개인 프로젝트 · 마지막 업데이트 {new Date().toLocaleDateString('ko-KR')}
          </div>

          {/* 메인 헤드라인 - 정보 비대칭 해결 강조 */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            금 거래, 기준가만 보면 손해봅니다
          </h1>

          {/* 서브헤드라인 - 가치 제안 명확화 */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            최종가격(기준가+수수료+스프레드)을 공개합니다.<br />
            내 조건 넣으면 바로 계산 + 비교 질문 템플릿 제공
          </p>

          {/* Primary CTA - 카카오톡 */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={`${siteConfig.contact.kakaoOpenChat}?utm_source=${siteConfig.tracking.utmSource}&utm_medium=hero_primary&utm_campaign=${siteConfig.tracking.utmCampaign}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="kakao"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
              >
                {siteConfig.cta.hero.primary}
              </Button>
            </a>

            {/* Secondary - 계산기로 스크롤 */}
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToCalculator}
              className="w-full sm:w-auto"
            >
              {siteConfig.cta.hero.secondary}
            </Button>
          </div>

          {/* 반복 인식 문구 #1 */}
          <p className="text-sm text-gray-500 mt-6">
            💡 기준가가 같아도 최종가격은 달라집니다. 차이는 수수료·스프레드·부가비용입니다.
          </p>
        </div>

        {/* 반복 인식 문구 #2 */}
        <div className="mb-6 text-center">
          <p className="text-base text-gray-700 font-medium">
            그래서 &quot;최종가격&quot;으로 비교합니다
          </p>
        </div>

        {/* Wise 스타일 2카드 레이아웃 */}
        <div id="calculator" className="grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-mt-20">
          {/* 좌측 카드: 거래 조건 입력 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">거래 조건</h2>
            <CalculatorCard
              goldWeight={goldWeight}
              basePrice={basePrice}
              transactionType={transactionType}
              onGoldWeightChange={setGoldWeight}
              onBasePriceChange={setBasePrice}
              onTransactionTypeChange={setTransactionType}
              onCalculate={calculatePrice}
            />

            {/* 반복 인식 문구 #3 */}
            <p className="text-sm text-gray-500 mt-4">
              💡 같은 기준가라도 업체마다 수수료가 다르면 최종 금액이 3~7% 차이납니다
            </p>
          </div>

          {/* 우측 카드: 최종가격 Breakdown */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">최종가격 Breakdown</h2>
            <FeeBreakdownCard
              result={calculatedResult}
              showOfflineClass={!!calculatedResult} // 계산 후에만 오프라인 강의 표시
            />
          </div>
        </div>

        {/* 반복 인식 문구 #4 */}
        <div className="mt-12 mb-6 text-center" id="why">
          <p className="text-lg text-gray-700 font-medium">
            최종가격(기준가+수수료+스프레드)을 공개하는 이유
          </p>
        </div>

        {/* 기존 스토리텔링 섹션 유지하되, 문구 일부 수정 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            왜 이 도구를 만들었나요?
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              2019년부터 3년간 재테크 오프라인 모임을 운영하며 200명 이상과 금 투자를 논의했습니다.
              그 과정에서 발견한 가장 큰 문제는 <strong>&quot;정보 비대칭&quot;</strong>이었습니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              대부분의 업체가 <strong>기준가만 크게 표시</strong>하고,
              수수료·스프레드·부가비용은 작게 숨기거나 말로만 설명합니다.
              결국 같은 기준가라도 <strong>최종 금액은 3~7% 차이</strong>가 나는데,
              고객은 이를 비교할 방법이 없었습니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              그래서 이 도구를 만들었습니다.
              누구나 쉽게 <strong>&quot;최종가격&quot;</strong>을 계산하고,
              업체에 물어볼 <strong>질문 템플릿</strong>까지 제공합니다.
            </p>

            {/* 반복 인식 문구 #5 */}
            <p className="text-sm text-blue-600 font-medium mt-6">
              💡 이 도구로 비교하면, 왜 더 싸게 살 수 있는지 명확해집니다.
            </p>
          </div>
        </div>

        {/* 하단 CTA - 카카오톡 */}
        <div className="mt-12 text-center">
          <a
            href={`${siteConfig.contact.kakaoOpenChat}?utm_source=${siteConfig.tracking.utmSource}&utm_medium=bottom_cta&utm_campaign=${siteConfig.tracking.utmCampaign}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="kakao"
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
            >
              💬 카톡으로 최종가격 확인받기
            </Button>
          </a>

          {/* 반복 인식 문구 #6 */}
          <p className="text-sm text-gray-500 mt-4">
            💡 기준가가 같아도 최종가격은 달라집니다. 그래서 비교가 필요합니다.
          </p>
        </div>
      </main>
    </div>
  )
}
