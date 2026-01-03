import ContactCTA from '@/components/ContactCTA'

export default function SellPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">금 판매 서비스</h1>
          <p className="text-xl text-gray-600">
            보유하신 금을 시세에 맞춰 합리적으로 매입해드립니다
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">왜 우리에게 판매해야 할까요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-3xl mr-4">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">합리적인 매입가</h3>
                <p className="text-gray-700">당일 기준 시세를 투명하게 적용하여 매입합니다</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">⚡</div>
              <div>
                <h3 className="font-bold text-lg mb-1">즉시 현금 지급</h3>
                <p className="text-gray-700">검수 완료 즉시 현금 또는 계좌이체로 지급합니다</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">🔍</div>
              <div>
                <h3 className="font-bold text-lg mb-1">정밀 검수 시스템</h3>
                <p className="text-gray-700">최신 장비로 정확한 순도와 무게를 측정합니다</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-3xl mr-4">🛡️</div>
              <div>
                <h3 className="font-bold text-lg mb-1">안전한 거래 보장</h3>
                <p className="text-gray-700">정식 사업자로서 안전하고 투명한 거래를 보장합니다</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">판매 절차</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">상담 신청</h3>
                <p className="text-gray-600">
                  전화 또는 카카오톡으로 상담을 신청하세요. 보유하신 금의 종류와 무게를 알려주시면 예상 매입가를 안내해드립니다.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">방문 또는 택배 발송</h3>
                <p className="text-gray-600">
                  직접 방문하시거나 안전 포장 후 택배로 발송하실 수 있습니다. 택배비는 저희가 부담합니다.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">정밀 검수</h3>
                <p className="text-gray-600">
                  최신 장비로 금의 순도와 무게를 정확하게 측정합니다. 검수 과정은 고객님께서 직접 확인하실 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">즉시 대금 지급</h3>
                <p className="text-gray-600">
                  검수 결과에 동의하시면 즉시 현금 또는 계좌이체로 대금을 지급합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">매입 가능 품목</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">💍</div>
              <div className="font-medium">금반지</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">📿</div>
              <div className="font-medium">금목걸이</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🪙</div>
              <div className="font-medium">금화</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🧈</div>
              <div className="font-medium">금괴</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-medium">금팔찌</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">⌚</div>
              <div className="font-medium">금시계</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">💎</div>
              <div className="font-medium">보석 금</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">📦</div>
              <div className="font-medium">기타 금제품</div>
            </div>
          </div>
        </div>

        <ContactCTA />
      </main>
    </div>
  )
}
