import { GoldPrice } from '@/lib/types'

const basePrices: Record<number, { price: number; name: string }> = {
  999: { price: 85000, name: '24K (999)' },
  995: { price: 84500, name: '24K (995)' },
  916: { price: 77800, name: '22K (916)' },
  750: { price: 63750, name: '18K (750)' },
}

let previousPrices: Record<number, number> = {}

export function generateMockGoldPrice(purity: number = 999): GoldPrice {
  const config = basePrices[purity] || basePrices[999]
  const basePrice = config.price
  const prevPrice = previousPrices[purity] || basePrice

  const fluctuation = (Math.random() - 0.5) * 1000
  const currentPrice = Math.round(basePrice + fluctuation)

  const change = currentPrice - prevPrice
  const changePercent = (change / prevPrice) * 100

  previousPrices[purity] = currentPrice

  const competitorMin = Math.round(currentPrice * 0.975)
  const competitorMax = Math.round(currentPrice * 0.988)
  const ourBuyPrice = Math.round(currentPrice * 0.992)
  const ourSellPrice = Math.round(currentPrice * 1.012)

  return {
    purity,
    name: config.name,
    basePrice: currentPrice,
    competitorMin,
    competitorMax,
    ourBuyPrice,
    ourSellPrice,
    timestamp: new Date(),
    change,
    changePercent: Math.round(changePercent * 100) / 100,
  }
}

export function getAllGoldPrices(): GoldPrice[] {
  return Object.keys(basePrices).map((purity) =>
    generateMockGoldPrice(Number(purity))
  )
}
