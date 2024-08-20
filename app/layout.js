import Link from 'next/link';
import './globals.css'; // Optional: Global styling

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">홈</Link></li>
              <li><Link href="/dog">강아지 페이지</Link></li>
              <li><Link href="/cat">고양이 페이지</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}