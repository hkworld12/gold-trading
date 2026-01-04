import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{siteConfig.siteName}</h3>
            <div className="space-y-2 text-sm">
              <p>상호: {siteConfig.business.name}</p>
              <p>대표자: {siteConfig.business.owner}</p>
              <p>사업자등록번호: {siteConfig.business.businessNumber}</p>
              <p>주소: {siteConfig.business.address}</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">바로가기</h3>
            <div className="space-y-2 text-sm">
              <Link href="/sell" className="block hover:text-yellow-500 transition">
                금 판매
              </Link>
              <Link href="/buy" className="block hover:text-yellow-500 transition">
                금 구매
              </Link>
              <Link href="/trust" className="block hover:text-yellow-500 transition">
                신뢰보증
              </Link>
              <Link href="/faq" className="block hover:text-yellow-500 transition">
                FAQ
              </Link>
            </div>
          </div>

          {/* 연락처 및 시세 문의 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">연락처</h3>
            <div className="space-y-2 text-sm mb-4">
              <p>전화: {siteConfig.contact.phoneDisplay}</p>
              <p>이메일: {siteConfig.contact.email}</p>
              <p className="pt-2 text-gray-400">{siteConfig.businessHours.weekday}</p>
              <p className="text-gray-400">{siteConfig.businessHours.saturday}</p>
              <p className="text-gray-400">{siteConfig.businessHours.sunday}</p>
            </div>

            {/* 시세 문의 CTA */}
            <a
              href={siteConfig.contact.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.contact.kakaoLabel}
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-3 rounded-lg transition shadow-md text-sm"
            >
              <span className="text-lg">💬</span>
              <span>시세 문의하기</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
