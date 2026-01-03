import ContactCTA from '@/components/ContactCTA'
import { siteConfig } from '@/lib/siteConfig'

export default function TrustPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">신뢰와 보증</h1>
          <p className="text-xl text-gray-600">
            안전하고 투명한 금 거래를 약속드립니다
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">신뢰할 수 있는 이유</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">📜</div>
              <h3 className="font-bold text-lg mb-2">정식 사업자 등록</h3>
              <p className="text-gray-700">
                정부에 정식 등록된 사업자로, 모든 거래는 법적 보호를 받습니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-lg mb-2">개인정보 보호</h3>
              <p className="text-gray-700">
                고객님의 개인정보는 암호화되어 안전하게 보관되며, 외부 유출을 철저히 방지합니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-lg mb-2">투명한 시세 공개</h3>
              <p className="text-gray-700">
                실시간 금 시세를 투명하게 공개하여 고객님께서 직접 확인하실 수 있습니다.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-lg mb-2">보험 가입</h3>
              <p className="text-gray-700">
                거래 과정에서 발생할 수 있는 사고에 대비하여 보험에 가입되어 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">안전 거래 프로세스</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-600 pl-4">
              <h3 className="font-bold text-lg mb-1">1. 신원 확인</h3>
              <p className="text-gray-600">
                거래 전 신분증을 통한 본인 확인을 진행합니다. 이는 불법 거래를 방지하고 양측의 안전을 보장합니다.
              </p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-4">
              <h3 className="font-bold text-lg mb-1">2. 정밀 검수</h3>
              <p className="text-gray-600">
                공인된 검수 장비를 사용하여 금의 순도와 무게를 정확하게 측정합니다. 검수 과정은 고객님께서 직접 확인하실 수 있습니다.
              </p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-4">
              <h3 className="font-bold text-lg mb-1">3. 계약서 작성</h3>
              <p className="text-gray-600">
                모든 거래는 서면 계약서를 작성하며, 고객님께 사본을 제공합니다. 계약서에는 금의 정보, 거래 금액, 거래 조건이 명시됩니다.
              </p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-4">
              <h3 className="font-bold text-lg mb-1">4. 안전한 결제</h3>
              <p className="text-gray-600">
                현금, 계좌이체, 카드 등 다양한 결제 수단을 지원하며, 모든 거래 내역은 기록되어 보관됩니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">고객 보호 정책</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <div className="mr-2 text-yellow-600">•</div>
              <p>
                {siteConfig.policy.dispute.refundPeriod}
              </p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 text-yellow-600">•</div>
              <p>
                {siteConfig.policy.dispute.thirdPartyInspection}
              </p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 text-yellow-600">•</div>
              <p>
                {siteConfig.policy.dispute.mediation}
              </p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 text-yellow-600">•</div>
              <p>
                고객님의 개인정보는 거래 완료 후 관련 법규에 따라 일정 기간 보관 후 안전하게 폐기됩니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-2 text-gray-900">사업자 정보</h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>상호: {siteConfig.business.name}</p>
            <p>대표자: {siteConfig.business.owner}</p>
            <p>사업자등록번호: {siteConfig.business.businessNumber}</p>
            <p>주소: {siteConfig.business.address} {siteConfig.business.detailAddress}</p>
            <p>전화: {siteConfig.contact.phoneDisplay}</p>
          </div>
        </div>

        <ContactCTA />
      </main>
    </div>
  )
}
