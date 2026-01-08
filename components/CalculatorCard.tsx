'use client'

import { Card, CardHeader, CardTitle, CardContent } from './ui/Card'
import { Input } from './ui/Input'
import { Select } from './ui/Select'
import { Button } from './ui/Button'

interface CalculatorCardProps {
  goldWeight: string
  basePrice: string
  transactionType: string
  onGoldWeightChange: (value: string) => void
  onBasePriceChange: (value: string) => void
  onTransactionTypeChange: (value: string) => void
  onCalculate: () => void
}

const transactionTypeOptions = [
  { value: 'sell', label: '금 판매 (내가 판매)' },
  { value: 'buy', label: '금 구매 (내가 구매)' },
]

export default function CalculatorCard({
  goldWeight,
  basePrice,
  transactionType,
  onGoldWeightChange,
  onBasePriceChange,
  onTransactionTypeChange,
  onCalculate,
}: CalculatorCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>거래 정보 입력</CardTitle>
        <p className="text-sm text-gray-600 mt-2">
          기준가와 무게를 입력하면 수수료를 제외한 최종 금액을 계산합니다
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <Select
            label="거래 유형"
            options={transactionTypeOptions}
            value={transactionType}
            onChange={(e) => onTransactionTypeChange(e.target.value)}
          />

          <Input
            type="number"
            label="무게 (g)"
            placeholder="예: 37.5"
            value={goldWeight}
            onChange={(e) => onGoldWeightChange(e.target.value)}
          />

          <Input
            type="number"
            label="g당 기준가 (원)"
            placeholder="예: 105000"
            value={basePrice}
            onChange={(e) => onBasePriceChange(e.target.value)}
          />

          <Button
            variant="primary"
            size="lg"
            onClick={onCalculate}
            className="w-full mt-2"
          >
            💰 최종가격 계산하기
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500 leading-relaxed">
            💡 <span className="font-semibold">팁:</span> 같은 기준가라도 수수료가 다르면
            최종 금액이 3~7% 차이날 수 있습니다. 꼭 "기준가 + 수수료"를 함께 확인하세요.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
