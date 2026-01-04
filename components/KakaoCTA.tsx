import { siteConfig } from '@/lib/siteConfig'

interface KakaoCTAProps {
  variant?: 'primary' | 'secondary' | 'inline'
  showSubtext?: boolean
  subtext?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function KakaoCTA({
  variant = 'primary',
  showSubtext = true,
  subtext = '빠른 상담',
  size = 'md'
}: KakaoCTAProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-yellow-400 hover:bg-yellow-300 text-gray-900 shadow-md',
    inline: 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-md'
  }

  return (
    <a
      href={siteConfig.contact.kakaoOpenChat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteConfig.contact.kakaoLabel}
      className={`inline-flex items-center gap-2 font-bold rounded-lg transition ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      <span className="text-2xl">💬</span>
      <div className="text-left">
        {showSubtext && <div className="text-xs opacity-90">{subtext}</div>}
        <div>{siteConfig.contact.kakaoLabel}</div>
      </div>
    </a>
  )
}
