import PriceComparisonCard from '@/components/PriceComparisonCard'
import ContactCTA from '@/components/ContactCTA'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 히어로 섹션 - 정보 비대칭 해결 도구 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            금 거래, 알고 하면<br />손해 보지 않습니다
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            실시간 시세 비교 · 최종가격 차이 확인 · 투명한 거래 교육
          </p>

          {/* Primary & Secondary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Primary CTA - 오픈채팅 */}
            <a
              href={siteConfig.contact.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.cta.hero.primary}
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
            >
              <span className="text-2xl">💬</span>
              <span>{siteConfig.cta.hero.primary}</span>
            </a>

            {/* Secondary CTA - 시세 비교로 스크롤 */}
            <a
              href="#price-compare"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl transition shadow-md border-2 border-gray-200 w-full sm:w-auto"
            >
              <span className="text-xl">📊</span>
              <span>{siteConfig.cta.hero.secondary}</span>
            </a>
          </div>

          {/* 질문 예시 */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-3">💡 이런 질문을 해보세요</p>
            <div className="flex flex-col sm:flex-row gap-2 text-sm">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                "수수료는 얼마나 되나요?"
              </div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                "시세는 어떻게 정해지나요?"
              </div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                "최종가격이 왜 다른가요?"
              </div>
            </div>
          </div>
        </div>

        <div id="price-compare" className="mb-8 scroll-mt-20">
          <PriceComparisonCard />
        </div>

        {/* 왜 최종가격이 달라질까? 섹션 */}
        <div id="why-cheaper" className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              💰 왜 최종가격이 달라질까?
            </h2>

            <p className="text-gray-700 text-center mb-8">
              '기준 시세'는 같아도, <span className="font-bold text-blue-600">수수료·스프레드·부가비용</span>이 달라서 <span className="font-bold">실제 받는 금액이 크게 차이날 수 있습니다.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-gray-900 mb-2">수수료 구조</h3>
                <p className="text-sm text-gray-600">업체마다 검수비, 거래수수료가 다릅니다</p>
                <p className="text-xs text-blue-600 mt-2">→ 최종가격 2~5% 차이</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">📉</div>
                <h3 className="font-bold text-gray-900 mb-2">스프레드</h3>
                <p className="text-sm text-gray-600">매입가와 판매가 사이의 마진 폭</p>
                <p className="text-xs text-blue-600 mt-2">→ 최종가격 1~3% 차이</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">💳</div>
                <h3 className="font-bold text-gray-900 mb-2">부가비용</h3>
                <p className="text-sm text-gray-600">배송비, 보험료, 포장비 등</p>
                <p className="text-xs text-blue-600 mt-2">→ 최종가격 0.5~2% 차이</p>
              </div>
            </div>

            {/* 반복 인식 문구 */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-sm text-gray-700">
                <span className="font-bold">💡 핵심:</span> 기준 시세가 아니라 <span className="font-bold text-yellow-700">'내가 실제로 받는 최종금액'</span>을 비교해야 합니다.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href={siteConfig.contact.kakaoOpenChat}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={siteConfig.cta.priceCheck}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition shadow-lg"
              >
                <span className="text-xl">💬</span>
                <span>{siteConfig.cta.priceCheck}</span>
              </a>
              <p className="text-xs text-gray-500 mt-3">
                수수료·스프레드·부가비용까지 모두 포함된 최종가격을 확인하세요
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <ContactCTA />
        </div>

        {/* 오프라인 강의 섹션 */}
        {siteConfig.offlineClass.enabled && (
          <div id="offline-class" className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {siteConfig.offlineClass.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {siteConfig.offlineClass.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-purple-600 mb-1">시세 계산법</div>
                  <div className="text-gray-600">g당 가격부터 최종금액까지</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-purple-600 mb-1">수수료 구조</div>
                  <div className="text-gray-600">숨은 비용 찾아내기</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-bold text-purple-600 mb-1">실전 협상</div>
                  <div className="text-gray-600">유리한 조건 만들기</div>
                </div>
              </div>

              <a
                href={siteConfig.offlineClass.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={siteConfig.cta.offlineClass}
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-lg transition shadow-lg"
              >
                <span className="text-xl">📝</span>
                <span>{siteConfig.cta.offlineClass}</span>
              </a>
              <p className="text-xs text-gray-500 mt-3">
                선착순 마감 · 소규모 그룹 진행
              </p>
            </div>
          </div>
        )}

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
