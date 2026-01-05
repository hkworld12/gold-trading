import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span>🧮</span>
              <span>금 시세 계산기</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href="/#calculator"
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition hidden sm:block"
            >
              계산기
            </Link>
            <Link
              href="/#price-compare"
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition hidden sm:block"
            >
              시세 비교
            </Link>

            {/* Primary CTA - 카톡 */}
            <a
              href={siteConfig.contact.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카톡 문의"
              className="ml-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-lg transition text-sm flex items-center gap-1"
            >
              <span>💬</span>
              <span className="hidden sm:inline">카톡 문의</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
