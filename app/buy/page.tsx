import ContactCTA from '@/components/ContactCTA'

export default function BuyPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">금 구매 서비스</h1>
          <p className="text-xl text-gray-600">
            투자용 금을 합리적인 가격에 구매하세요
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">왜 우리에게 구매해야 할까요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-3xl mr-4">💰</div>
              <div>
                <h3 className="font-bold text-lg mb-1">합리적인 가격</h3>
                <p className="text-gray-700">타사 대비 낮은 프리미엄으로 금을 구매하실 수 있습니다</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">✨</div>
              <div>
                <h3 className="font-bold text-lg mb-1">순도 보증</h3>
                <p className="text-gray-700">모든 제품의 순도를 보증하며, 검증서를 함께 제공합니다</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">📦</div>
              <div>
                <h3 className="font-bold text-lg mb-1">다양한 제품</h3>
                <p className="text-gray-700">금괴, 금화, 골드바 등 다양한 투자용 금 제품을 보유하고 있습니다</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">🔒</div>
              <div>
                <h3 className="font-bold text-lg mb-1">안전한 보관</h3>
                <p className="text-gray-700">구매 후 안전한 보관 서비스도 제공합니다</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">구매 절차</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">상담 신청</h3>
                <p className="text-gray-600">
                  전화 또는 카카오톡으로 상담을 신청하세요. 원하시는 금 제품과 수량을 알려주시면 정확한 견적을 안내해드립니다.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">제품 확인</h3>
                <p className="text-gray-600">
                  직접 방문하시면 제품을 확인하실 수 있습니다. 순도 검증서와 함께 제공됩니다.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">결제</h3>
                <p className="text-gray-600">
                  현금, 계좌이체, 카드 등 다양한 결제 수단을 지원합니다.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">수령 또는 보관</h3>
                <p className="text-gray-600">
                  구매하신 금을 즉시 수령하시거나, 안전한 보관 서비스를 이용하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">판매 제품</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">🧈 금괴 (Gold Bar)</h3>
              <p className="text-gray-600 mb-3">
                투자의 기본, 순도 99.99% 금괴
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 중량: 10g, 100g, 1kg</li>
                <li>• 순도 보증서 제공</li>
                <li>• 국제 표준 규격</li>
              </ul>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">🪙 금화 (Gold Coin)</h3>
              <p className="text-gray-600 mb-3">
                수집과 투자를 동시에
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 종류: 캥거루, 메이플, 이글</li>
                <li>• 순도 99.99%</li>
                <li>• 수집 가치 포함</li>
              </ul>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">💎 골드바 (Small Bar)</h3>
              <p className="text-gray-600 mb-3">
                소액 투자에 적합한 골드바
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 중량: 1g, 5g, 10g</li>
                <li>• 순도 99.9%</li>
                <li>• 선물용으로도 인기</li>
              </ul>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">💍 투자용 금 장신구</h3>
              <p className="text-gray-600 mb-3">
                착용과 투자를 동시에
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 종류: 반지, 목걸이, 팔찌</li>
                <li>• 순도 99.9%</li>
                <li>• 디자인 다양</li>
              </ul>
            </div>
          </div>
        </div>

        <ContactCTA />
      </main>
    </div>
  )
}
