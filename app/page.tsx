import PriceComparisonCard from '@/components/PriceComparisonCard'
import ContactCTA from '@/components/ContactCTA'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 히어로 섹션 - 단일 CTA */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            타사보다 높은 가격으로<br />금을 매입합니다
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            실시간 시세 비교 · 즉시 현금 지급 · 투명한 검수
          </p>

          {/* 메인 CTA - 카카오톡 오픈채팅 */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={siteConfig.contact.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.contact.kakaoLabel}
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg px-10 py-5 rounded-xl transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="text-2xl">💬</span>
              <div className="text-left">
                <div className="text-sm opacity-90">빠른 상담</div>
                <div className="text-xl">{siteConfig.contact.kakaoLabel}</div>
              </div>
            </a>

            {/* 보조 정보 */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>지금 상담 가능</span>
              </div>
              <span>·</span>
              <a href={`tel:${siteConfig.contact.phone.replace(/-/g, '')}`} className="hover:text-yellow-600">
                📞 {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <PriceComparisonCard />
        </div>

        {/* 중간 CTA - 가격 비교 카드 아래 */}
        <div className="mb-8 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8 text-center border-2 border-yellow-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            지금 카톡으로 오늘 시세 받아보기
          </h3>
          <p className="text-gray-600 mb-5">
            실시간 시세 확인 · 빠른 상담 · 투명한 거래
          </p>
          <a
            href={siteConfig.contact.kakaoOpenChat}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={siteConfig.contact.kakaoLabel}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-2xl">💬</span>
            <span>{siteConfig.contact.kakaoLabel}</span>
          </a>
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
