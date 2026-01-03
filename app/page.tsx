import PriceComparisonCard from '@/components/PriceComparisonCard'
import ContactCTA from '@/components/ContactCTA'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            믿을 수 있는 금 거래, 지금 시작하세요
          </h1>
          <p className="text-xl text-gray-600">
            기준 시세 대비 조건을 투명하게 보여드리고, 상담으로 빠르게 진행합니다
          </p>
        </div>

        <div className="mb-8">
          <PriceComparisonCard />
        </div>

        <div className="mb-8">
          <ContactCTA />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/sell" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">금 판매</h3>
            <p className="text-gray-600">
              보유하신 금을 합리적인 가격에 매입해드립니다
            </p>
          </Link>

          <Link href="/buy" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🪙</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">금 구매</h3>
            <p className="text-gray-600">
              투자용 금을 합리적인 가격에 구매하세요
            </p>
          </Link>

          <Link href="/trust" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">신뢰보증</h3>
            <p className="text-gray-600">
              안전하고 투명한 거래를 보장합니다
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
