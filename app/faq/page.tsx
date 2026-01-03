import ContactCTA from '@/components/ContactCTA'

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">자주 묻는 질문</h1>
          <p className="text-xl text-gray-600">
            고객님들이 자주 문의하시는 내용을 모았습니다
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 금을 판매할 때 어떤 서류가 필요한가요?
            </h3>
            <p className="text-gray-700">
              A. 본인 확인을 위한 신분증(주민등록증, 운전면허증, 여권 등)만 있으면 됩니다.
              금을 구매하셨을 때의 영수증이나 보증서가 있으면 더 좋지만, 없어도 거래는 가능합니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 매입 시세는 어떻게 결정되나요?
            </h3>
            <p className="text-gray-700">
              A. 국제 금 시세를 기준으로 하며, 당일 환율과 순도를 고려하여 결정됩니다.
              홈페이지에서 실시간 시세를 확인하실 수 있으며, 전화 상담 시에도 정확한 매입가를 안내해드립니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 현금으로 바로 받을 수 있나요?
            </h3>
            <p className="text-gray-700">
              A. 네, 검수 완료 후 즉시 현금으로 지급 가능합니다.
              다만, 고액 거래의 경우 계좌이체를 권장드리며, 이 경우에도 즉시 송금해드립니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 택배로 금을 보내도 안전한가요?
            </h3>
            <p className="text-gray-700">
              A. 안전한 포장 방법을 안내해드리며, 배송 중 분실이나 파손에 대비한 보험에 가입되어 있습니다.
              또한, 등기우편이나 보험 택배를 이용하시면 더욱 안전합니다. 택배비는 저희가 부담합니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 보석이 박힌 금 제품도 매입하나요?
            </h3>
            <p className="text-gray-700">
              A. 네, 매입 가능합니다. 다만, 보석의 가치는 별도로 평가되며,
              금 부분만의 무게와 순도를 측정하여 매입가를 산정합니다. 보석의 가치가 높은 경우 별도로 안내해드립니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 순도가 낮은 금도 매입하나요?
            </h3>
            <p className="text-gray-700">
              A. 네, 14K, 18K, 22K, 24K 등 모든 순도의 금 제품을 매입합니다.
              순도에 따라 매입가가 달라지며, 정밀 검수를 통해 정확한 순도를 측정합니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 금을 구매한 후 보관은 어떻게 하나요?
            </h3>
            <p className="text-gray-700">
              A. 구매하신 금을 직접 수령하시거나, 저희의 안전 보관 서비스를 이용하실 수 있습니다.
              보관 서비스는 별도 요금이 발생하며, 보험이 적용되어 안전하게 보관됩니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 거래 시간은 어떻게 되나요?
            </h3>
            <p className="text-gray-700">
              A. 평일 오전 9시부터 오후 6시까지, 토요일은 오전 9시부터 오후 3시까지 영업합니다.
              일요일 및 공휴일은 휴무입니다. 방문 전 전화로 예약하시면 대기 시간 없이 거래하실 수 있습니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 검수 결과가 마음에 들지 않으면 어떻게 하나요?
            </h3>
            <p className="text-gray-700">
              A. 검수 결과에 동의하지 않으시면 언제든지 거래를 취소하실 수 있으며,
              금을 다시 돌려드립니다. 어떠한 비용도 청구하지 않습니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              Q. 금 구매 시 세금이 있나요?
            </h3>
            <p className="text-gray-700">
              A. 금 거래 시 부가가치세(10%)가 부과됩니다.
              다만, 투자용 금괴의 경우 일정 조건을 충족하면 부가세 면제 혜택을 받으실 수 있습니다.
              자세한 사항은 상담 시 안내해드립니다.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-2 text-gray-900">
            추가 문의사항이 있으신가요?
          </h3>
          <p className="text-gray-700 mb-4">
            위 내용 외에 궁금하신 사항이 있으시면 언제든지 연락 주세요.
            친절하게 상담해드리겠습니다.
          </p>
        </div>

        <ContactCTA />
      </main>
    </div>
  )
}
