'use client'

import { siteConfig } from '@/lib/siteConfig'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const telHref = `tel:${siteConfig.contact.phone.replace(/-/g, '')}`

  useEffect(() => {
    const toggleVisibility = () => {
      // 100px 스크롤하면 나타남
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed left-0 right-0 z-50 transition-transform duration-300 md:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ bottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="bg-white border-t-2 border-yellow-500 shadow-2xl pb-safe">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-2">
            {/* 카카오톡 오픈채팅 - 메인 CTA */}
            <a
              href={siteConfig.contact.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.contact.kakaoLabel}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition flex items-center justify-center gap-2 shadow-lg"
            >
              <span className="text-xl">💬</span>
              <div className="text-left">
                <div className="text-xs opacity-90">빠른 상담</div>
                <div className="text-base">시세 문의</div>
              </div>
            </a>

            {/* 전화 - 보조 CTA */}
            <a
              href={telHref}
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-4 rounded-lg transition flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl">📞</span>
            </a>
          </div>

          {/* 실시간 상담 가능 표시 */}
          <div className="text-center mt-2">
            <p className="text-xs text-green-600 font-medium flex items-center justify-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              지금 상담 가능 · 평균 5분 내 답변
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
