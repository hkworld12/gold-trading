import Link from 'next/link'

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
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition"
            >
              홈
            </Link>
            <Link
              href="/sell"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition"
            >
              금 판매
            </Link>
            <Link
              href="/buy"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition"
            >
              금 구매
            </Link>
            <Link
              href="/trust"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition"
            >
              신뢰보증
            </Link>
            <Link
              href="/faq"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
