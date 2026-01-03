import { siteConfig } from '@/lib/siteConfig'

export default function ContactCTA() {
  const telHref = `tel:${siteConfig.contact.phone.replace(/-/g, '')}`

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow-lg p-8 text-white">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">지금 바로 상담을 시작하세요!</h2>
        <p className="text-yellow-100 text-lg">
          전문 상담원이 친절하게 안내해드립니다
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href={telHref}
          className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-50 transition shadow-md flex items-center gap-2 min-w-[200px] justify-center"
        >
          <span className="text-2xl">📞</span>
          <div className="text-left">
            <div className="text-xs text-gray-600">전화 상담</div>
            <div>{siteConfig.contact.phoneDisplay}</div>
          </div>
        </a>

        <a
          href={siteConfig.contact.kakaoChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition shadow-md flex items-center gap-2 min-w-[200px] justify-center"
        >
          <span className="text-2xl">💬</span>
          <div className="text-left">
            <div className="text-xs text-gray-700">카카오톡 상담</div>
            <div>1:1 문의하기</div>
          </div>
        </a>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-yellow-100">
          영업시간: {siteConfig.businessHours.display}
        </p>
      </div>
    </div>
  )
}
