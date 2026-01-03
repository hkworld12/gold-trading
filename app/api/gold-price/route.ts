import { NextResponse } from 'next/server'
import { getAllGoldPrices } from '@/utils/mockGoldPrice'

export async function GET() {
  try {
    const prices = getAllGoldPrices()
    return NextResponse.json(prices)
  } catch (error) {
    console.error('Gold price API error:', error)
    return NextResponse.json(
      { error: '금시세 조회에 실패했습니다' },
      { status: 500 }
    )
  }
}
