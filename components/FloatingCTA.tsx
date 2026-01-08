'use client'

import { siteConfig } from '@/lib/siteConfig'
import { useState, useEffect } from 'react'

function buildKakaoUrl(context: string) {
  const params = new URLSearchParams({
    utm_source: siteConfig.tracking.utmSource,
    utm_medium: siteConfig.tracking.utmMedium,
    utm_campaign: siteConfig.tracking.utmCampaign,
    utm_content: context,
  })
  return `${siteConfig.contact.kakaoOpenChat}?${params.toString()}`
}

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
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
      style={{
        bottom: 'env(safe-area-inset-bottom, 0px)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
        <div className="px-4 py-3">
          <a
            href={buildKakaoUrl('floating_cta')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="카톡으로 최종가격 문의"
            className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-xl transition text-center shadow-md hover:shadow-lg"
          >
            <span className="text-lg">💬</span>{' '}
            <span>카톡으로 문의하기</span>
          </a>
          <p className="text-xs text-gray-500 text-center mt-2">
            기준가 + 수수료 투명하게 안내
          </p>
        </div>
      </div>
    </div>
  )
}
