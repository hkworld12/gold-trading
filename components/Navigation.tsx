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

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="font-bold text-xl text-gray-900 hover:text-gray-700 transition">
            금 거래 투명비교
          </Link>

          {/* 네비게이션 메뉴 */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              투명비교(도구)
            </Link>
            <Link href="#why" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              왜 차이나?
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              FAQ
            </Link>

            {/* 오프라인 강의 - 선택적 표시 */}
            {siteConfig.offlineClass.enabled && (
              <a
                href={siteConfig.offlineClass.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition text-sm font-medium"
              >
                강의
              </a>
            )}
          </div>

          {/* 우측 CTA - 카카오톡 */}
          <a
            href={buildKakaoUrl('nav_cta')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="kakao"
              size="md"
              className="font-semibold"
            >
              💬 카톡 문의
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}
