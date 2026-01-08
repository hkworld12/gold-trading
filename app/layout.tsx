import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  title: "금 거래 투명비교 | 최종가격으로 비교하세요",
  description: "기준가만 보면 손해봅니다. 수수료+스프레드까지 포함한 최종가격으로 금 거래를 투명하게 비교하세요. 개인 프로젝트.",
  keywords: "금 거래, 금 시세, 금 계산기, 수수료 비교, 투명 비교, 금 투자, 금 매입, 금 판매",
  openGraph: {
    title: "금 거래 투명비교 | 최종가격으로 비교하세요",
    description: "기준가만 보면 손해봅니다. 최종가격으로 비교하세요.",
    url: siteConfig.siteUrl,
    siteName: "금 거래 투명비교",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-gray-50 flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
