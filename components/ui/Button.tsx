import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'kakao' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    font-semibold rounded-xl
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  const variantStyles = {
    primary: `
      bg-primary text-white
      hover:bg-primary-dark
      focus:ring-primary/30
      shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-surface-secondary text-text-primary
      hover:bg-gray-200
      focus:ring-gray-300
    `,
    kakao: `
      bg-[#FEE500] text-[#191919]
      hover:bg-[#FDD835]
      focus:ring-[#FEE500]/50
      shadow-sm hover:shadow-md
    `,
    outline: `
      bg-transparent text-primary
      border-2 border-primary
      hover:bg-primary hover:text-white
      focus:ring-primary/30
    `,
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-3.5 text-base',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
