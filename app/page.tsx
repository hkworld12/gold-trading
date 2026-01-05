'use client'

import { useState } from 'react'
import PriceComparisonCard from '@/components/PriceComparisonCard'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function Home() {
  const [goldWeight, setGoldWeight] = useState('')
  const [basePrice, setBasePrice] = useState('')
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
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero - 개인 도구 톤 */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            개인 프로젝트 · 정보 비대칭 해소 도구
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            금 살 때 "기준가 + 수수료"<br className="sm:hidden" /> 꼭 확인하세요
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            같은 시세여도 수수료가 다르면 최종가격이 3~7% 차이납니다. 계산기로 미리 확인하고 물어보세요.
          </p>

          {/* Primary CTA - 카톡 오픈채팅 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href={siteConfig.contact.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카톡으로 최종가격 문의"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <span className="text-xl">💬</span>
              <span>카톡으로 최종가격 문의</span>
            </a>

            <a
              href="#calculator"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-lg transition border border-gray-200 w-full sm:w-auto"
            >
              <span>🧮</span>
              <span>계산기 바로 가기</span>
            </a>
          </div>

          <p className="text-xs text-gray-500">
            👋 스타트업 대표가 직접 만든 비교 도구입니다
          </p>
        </div>

        {/* 시세/최종가격 Tool 섹션 */}
        <div id="calculator" className="mb-12 scroll-mt-20">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              💰 최종가격 계산기
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              기준가에서 수수료를 뺀 실제 받을 금액을 미리 계산해보세요
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  무게 (g)
                </label>
                <input
                  type="number"
                  value={goldWeight}
                  onChange={(e) => setGoldWeight(e.target.value)}
                  placeholder="예: 37.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  g당 기준가 (원)
                </label>
                <input
                  type="number"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                  placeholder="예: 105000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={calculatePrice}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition mb-6"
            >
              계산하기
            </button>

            {calculatedResult && (
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-sm text-gray-600 mb-4">계산 결과 (예시)</div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">기준가 합계</span>
                    <span className="font-bold text-lg">{calculatedResult.base.toLocaleString()}원</span>
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">수수료 5% 차감 시</span>
                      <span className="font-semibold text-red-600">-{(calculatedResult.base - calculatedResult.withFee5).toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">수수료 3% 차감 시</span>
                      <span className="font-semibold text-orange-600">-{(calculatedResult.base - calculatedResult.withFee3).toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">수수료 1% 차감 시</span>
                      <span className="font-semibold text-green-600">-{(calculatedResult.base - calculatedResult.withFee1).toLocaleString()}원</span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      💡 <span className="font-bold">최종가격 차이가 최대 {(calculatedResult.withFee5 - calculatedResult.withFee1).toLocaleString()}원</span>까지 날 수 있습니다
                    </p>
                  </div>
                </div>

                {/* CTA #2 - 계산 후 */}
                <div className="mt-6">
                  <a
                    href={siteConfig.contact.kakaoOpenChat}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="내 조건으로 최종가격 확인"
                    className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition text-center"
                  >
                    💬 내 조건으로 최종가격 확인하기
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 실시간 시세 비교 */}
        <div id="price-compare" className="mb-12 scroll-mt-20">
          <PriceComparisonCard />
        </div>

        {/* 왜 달라지는지 - 간소화 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            기준가가 같아도 왜 최종가격이 다를까?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">수수료</h3>
              <p className="text-sm text-gray-600 mb-2">검수비, 거래 수수료</p>
              <p className="text-xs font-semibold text-blue-600">보통 2~5%</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="text-3xl mb-3">📉</div>
              <h3 className="font-bold text-gray-900 mb-2">스프레드</h3>
              <p className="text-sm text-gray-600 mb-2">매입-판매 마진</p>
              <p className="text-xs font-semibold text-blue-600">보통 1~3%</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-bold text-gray-900 mb-2">부가비용</h3>
              <p className="text-sm text-gray-600 mb-2">배송, 보험, 포장</p>
              <p className="text-xs font-semibold text-blue-600">보통 0.5~2%</p>
            </div>
          </div>

          {/* CTA #3 - 가격 차이 섹션 후 */}
          <div className="mt-8 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto mb-4">
              <p className="text-sm text-gray-700">
                <span className="font-bold">반복 인식 #3:</span> "기준가 + 수수료"를 모두 확인해야 손해를 막을 수 있습니다
              </p>
            </div>
            <a
              href={siteConfig.contact.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="수수료 포함 최종가격 문의"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              💬 수수료 포함 최종가격 문의하기
            </a>
          </div>
        </div>

        {/* 개인 스토리 섹션 */}
        <div className="mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">👤</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  왜 이 도구를 만들었나요?
                </h2>
                <p className="text-sm text-gray-600">스타트업 대표 · 개인 프로젝트</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                회사 운영 자금 마련을 위해 금을 사려고 했을 때, <span className="font-semibold">업체마다 "기준 시세는 같다"고 하는데 최종 견적은 수십만 원씩 차이</span>가 났습니다.
              </p>
              <p>
                알고 보니 수수료·스프레드·부가비용이 다 달랐고, 이걸 투명하게 공개하는 곳이 거의 없었습니다.
              </p>
              <p className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                <span className="font-bold">💡 핵심 깨달음:</span> 기준 시세만 보면 안 되고, <span className="font-semibold text-blue-600">"기준가 + 수수료" 를 명확히 확인</span>해야 정확한 비교가 가능합니다.
              </p>
              <p>
                그래서 직접 만들었습니다. 이 도구가 같은 고민을 하는 분들께 도움이 되길 바랍니다.
              </p>
            </div>

            {/* CTA #4 - 스토리 후 */}
            <div className="mt-6">
              <a
                href={siteConfig.contact.kakaoOpenChat}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="투명한 조건 문의"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg transition"
              >
                💬 투명한 조건으로 문의하기
              </a>
            </div>
          </div>
        </div>

        {/* 오프라인 강의 - 2차 CTA */}
        {siteConfig.offlineClass.enabled && (
          <div id="offline-class" className="mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 md:p-8 text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {siteConfig.offlineClass.title}
              </h2>
              <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
                {siteConfig.offlineClass.description}
              </p>

              <a
                href={siteConfig.offlineClass.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={siteConfig.cta.offlineClass}
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                <span>📝</span>
                <span>{siteConfig.cta.offlineClass}</span>
              </a>
            </div>
          </div>
        )}

        {/* Footer CTA #5 */}
        <div className="mb-8">
          <div className="bg-gray-900 text-white rounded-xl p-6 text-center">
            <p className="text-sm mb-4">궁금한 점이 있으신가요?</p>
            <a
              href={siteConfig.contact.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카톡으로 문의"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg transition"
            >
              💬 카톡으로 편하게 물어보기
            </a>
          </div>
        </div>

        {/* 간단 링크 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <Link href="/sell" className="text-gray-600 hover:text-gray-900">금 판매</Link>
          <Link href="/buy" className="text-gray-600 hover:text-gray-900">금 구매</Link>
          <Link href="/trust" className="text-gray-600 hover:text-gray-900">신뢰보증</Link>
          <Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
        </div>
      </main>
    </div>
  )
}
