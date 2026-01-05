import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 text-center md:text-left">
            <p className="mb-1">🧮 금 시세 계산기 · 개인 프로젝트</p>
            <p className="text-xs text-gray-500">
              정보 비대칭 해소를 위한 도구입니다
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/sell" className="hover:text-gray-900">금 판매</Link>
            <Link href="/buy" className="hover:text-gray-900">금 구매</Link>
            <Link href="/trust" className="hover:text-gray-900">신뢰보증</Link>
            <Link href="/faq" className="hover:text-gray-900">FAQ</Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 금 시세 계산기. 개인 프로젝트로 운영됩니다.</p>
        </div>
      </div>
    </footer>
  )
}
