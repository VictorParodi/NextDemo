import Link from 'next/link';
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/MainLayout';

export default function Home() {
  return (
		<MainLayout>
			<h1 className={styles.title}>
				Go to <Link href="/about">About!</Link>
			</h1>

			<p className={styles.description}>
				Get started by editing{' '}
				<code className={styles.code}>pages/index.js</code>
			</p>
		</MainLayout>
  )
}
