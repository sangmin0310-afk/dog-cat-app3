import Link from 'next/link';
import styles from './page.module.css'; // Optional: Custom styling

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>골라보세요</h1>
      <nav>
        <ul>
          <li><Link href="/dog">강아지 페이지</Link></li>
          <li><Link href="/cat">고양이 페이지</Link></li>
        </ul>
      </nav>
    </div>
  );
}