'use client'

import { useEffect, useState } from 'react'
import { GoldPrice } from '@/lib/types'

export default function PriceComparisonCard() {
  const [prices, setPrices] = useState<GoldPrice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/gold-price')
        if (!response.ok) throw new Error('Failed to fetch prices')
        const data = await response.json()
        setPrices(data)
        setError(null)
      } catch (err) {
        setError('금시세 조회에 실패했습니다')
      } finally {
        setLoading(false)
      }
    }

    fetchPrices()
    const interval = setInterval(fetchPrices, 5000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-500 text-center">금시세 로딩 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">오늘의 금시세</h2>
        <p className="text-gray-600">실시간으로 업데이트되는 금 시세를 확인하세요</p>
      </div>

      <div className="space-y-6">
        {prices.map((price) => (
          <div
            key={price.purity}
            className="border-2 border-gray-200 rounded-lg p-6 hover:border-yellow-400 transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{price.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">기준시세:</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {price.basePrice.toLocaleString()}원/g
                  </span>
                  <span
                    className={`text-sm ${
                      price.change > 0
                        ? 'text-red-600'
                        : price.change < 0
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {price.change > 0 ? '▲' : price.change < 0 ? '▼' : '―'}{' '}
                    {Math.abs(price.change).toLocaleString()}원 (
                    {price.changePercent > 0 ? '+' : ''}
                    {price.changePercent}%)
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">타사 평균 매입가</div>
                <div className="text-lg font-semibold text-gray-700">
                  {Math.round((price.competitorMin + price.competitorMax) / 2).toLocaleString()}원
                </div>
                <div className="text-xs text-gray-500 mt-1">/g</div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border-2 border-green-400 relative">
                <div className="absolute -top-3 right-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    최고가
                  </span>
                </div>
                <div className="text-sm text-green-700 font-medium mb-1 flex items-center">
                  <span className="mr-1">🔼</span> 우리 매입가
                </div>
                <div className="text-2xl font-bold text-green-700">
                  {price.ourBuyPrice.toLocaleString()}원
                </div>
                <div className="text-sm font-bold text-green-600 mt-2 bg-green-100 rounded px-2 py-1 inline-block">
                  +{(price.ourBuyPrice - Math.round((price.competitorMin + price.competitorMax) / 2)).toLocaleString()}원 유리
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                <div className="text-sm text-blue-700 font-medium mb-1 flex items-center">
                  <span className="mr-1">🔽</span> 우리 판매가
                </div>
                <div className="text-2xl font-bold text-blue-700">
                  {price.ourSellPrice.toLocaleString()}원
                </div>
                <div className="text-xs text-blue-600 mt-1">
                  합리적인 가격
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        * 5초마다 자동 갱신됩니다 | 최종 업데이트: {new Date(prices[0]?.timestamp).toLocaleTimeString('ko-KR')}
      </p>
    </div>
  )
}
