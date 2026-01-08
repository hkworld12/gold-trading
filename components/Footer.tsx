import Link from 'next/link'
import { Button } from './ui/Button'
import { siteConfig } from '@/lib/siteConfig'

function buildKakaoUrl(context: string) {
  const params = new URLSearchParams({
    utm_source: siteConfig.tracking.utmSource,
    utm_medium: siteConfig.tracking.utmMedium,
    utm_campaign: siteConfig.tracking.utmCampaign,
    utm_content: context,
  })
  return `${siteConfig.contact.kakaoOpenChat}?${params.toString()}`
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 좌측: 사이트 정보 */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-3">
              금 거래 투명비교
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              개인 프로젝트로 운영되는<br />
              정보 비대칭 해소 도구입니다
            </p>
            <p className="text-xs text-gray-500">
              마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}
            </p>
          </div>

          {/* 중앙: 빠른 링크 */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
                  투명비교 도구
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition">
                  FAQ
                </Link>
              </li>
              {siteConfig.offlineClass.enabled && (
                <li>
                  <a
                    href={siteConfig.offlineClass.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    오프라인 강의
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* 우측: 연락처 (전화 보조) */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3">연락처</h4>
            <div className="space-y-3">
              {/* 카카오톡 - Primary */}
              <a
                href={buildKakaoUrl('footer_cta')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="kakao"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  💬 카톡 문의
                </Button>
              </a>

              {/* 전화 - Secondary (작게) */}
              <div className="text-xs text-gray-500">
                📞 전화: {siteConfig.contact.phone}
              </div>

              {/* 영업시간 */}
              <div className="text-xs text-gray-500">
                🕐 {siteConfig.businessHours.display}
              </div>
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} 금 거래 투명비교. 개인 프로젝트로 운영됩니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
