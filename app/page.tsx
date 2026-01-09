'use client'

import { useState } from 'react'
import CalculatorCard from '@/components/CalculatorCard'
import FeeBreakdownCard from '@/components/FeeBreakdownCard'

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

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* 히어로 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            금 거래 수수료 계산기
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            같은 기준가라도 수수료에 따라 최종 금액이 달라집니다.<br className="hidden sm:block" />
            수수료별 최종 금액을 한눈에 비교하세요.
          </p>
        </div>

        {/* 계산기 섹션 */}
        <div id="calculator" className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 scroll-mt-20">
          {/* 좌측: 입력 폼 */}
          <div>
            <div className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
              거래 정보 입력
            </div>
            <CalculatorCard
              goldWeight={goldWeight}
              basePrice={basePrice}
              transactionType={transactionType}
              onGoldWeightChange={setGoldWeight}
              onBasePriceChange={setBasePrice}
              onTransactionTypeChange={setTransactionType}
              onCalculate={calculatePrice}
            />
          </div>

          {/* 우측: 결과 */}
          <div>
            <div className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
              계산 결과
            </div>
            <FeeBreakdownCard
              result={calculatedResult}
              showOfflineClass={!!calculatedResult}
            />
          </div>
        </div>

        {/* 설명 섹션 */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-card p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">
              왜 최종가격을 비교해야 할까요?
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                대부분의 금 거래 업체는 <strong className="text-text-primary">기준가</strong>만 크게 표시합니다.
                하지만 실제로 받거나 내는 금액은 수수료가 적용된 <strong className="text-text-primary">최종가격</strong>입니다.
              </p>
              <p>
                같은 기준가라도 수수료가 1%에서 5%까지 차이나면,
                1,000만원 거래 시 <strong className="text-text-primary">최대 40만원</strong>까지 차이가 날 수 있습니다.
              </p>
              <p className="text-sm text-text-muted">
                이 도구로 미리 계산해보고, 현명한 거래를 하세요.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
