import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '손민환의 포트폴리오',
  description: '정보보호학 전공의 손민환 포트폴리오 사이트입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        {/* 헤더 */}
        <header className="bg-gray-900 text-white py-4 text-center">
          <h1 className="text-2xl font-bold">손민환의 포트폴리오</h1>
          <p className="text-sm text-gray-400">정보보호학 | React & Next.js</p>
        </header>

        {/* 페이지 컨텐츠 */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* 푸터 */}
        <footer className="bg-gray-900 text-white py-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} 손민환. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}