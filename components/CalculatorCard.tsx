'use client'

import { Card } from './ui/Card'
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
    <Card className="h-full">
      <div className="p-6 space-y-5">
        <Select
          label="거래 유형"
          options={transactionTypeOptions}
          value={transactionType}
          onChange={(e) => onTransactionTypeChange(e.target.value)}
        />

        <Input
          type="number"
          label="무게 (g)"
          placeholder="37.5"
          value={goldWeight}
          onChange={(e) => onGoldWeightChange(e.target.value)}
          hint="예: 1돈 = 3.75g"
        />

        <Input
          type="number"
          label="g당 기준가 (원)"
          placeholder="105,000"
          value={basePrice}
          onChange={(e) => onBasePriceChange(e.target.value)}
        />

        <Button
          variant="primary"
          size="lg"
          onClick={onCalculate}
          className="w-full"
        >
          계산하기
        </Button>
      </div>
    </Card>
  )
}
