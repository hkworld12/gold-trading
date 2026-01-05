import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: "금 시세 계산기 | 기준가 + 수수료 확인",
  description: "같은 시세여도 수수료가 다르면 최종가격이 3~7% 차이납니다. 계산기로 미리 확인하고 물어보세요. 개인 프로젝트 · 정보 비대칭 해소 도구",
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
