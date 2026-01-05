import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function Navigation() {
  return (
    <nav className="bg-yellow-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              금 거래소
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition hidden md:block"
            >
              홈
            </Link>
            <Link
              href="/sell"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition hidden md:block"
            >
              금 판매
            </Link>
            <Link
              href="/buy"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition hidden md:block"
            >
              금 구매
            </Link>
            <Link
              href="/trust"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition hidden md:block"
            >
              신뢰보증
            </Link>
            <Link
              href="/faq"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition hidden md:block"
            >
              FAQ
            </Link>

            {/* Secondary Link - 시세 비교 */}
            <Link
              href="/#price-compare"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition hidden lg:block"
            >
              📊 시세 비교
            </Link>

            {/* Primary CTA - 카톡 오픈채팅 */}
            <a
              href={siteConfig.contact.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.cta.hero.primary}
              className="ml-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-4 py-2 rounded-lg transition shadow-md flex items-center gap-1"
            >
              <span className="text-lg">💬</span>
              <span className="hidden sm:inline">시세 문의</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
