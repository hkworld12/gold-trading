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
    <nav className="sticky top-0 z-50 bg-white border-b border-border-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="font-bold text-lg text-text-primary hover:text-primary transition-colors">
            금거래 계산기
          </Link>

          {/* 네비게이션 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium">
              계산기
            </Link>
            <Link href="/faq" className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium">
              FAQ
            </Link>
          </div>

          {/* 우측 CTA */}
          <a
            href={buildKakaoUrl('nav_cta')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="sm">
              문의하기
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}
