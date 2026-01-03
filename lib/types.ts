export interface GoldPrice {
  purity: number
  name: string
  basePrice: number
  competitorMin: number
  competitorMax: number
  ourBuyPrice: number
  ourSellPrice: number
  timestamp: Date
  change: number
  changePercent: number
}
