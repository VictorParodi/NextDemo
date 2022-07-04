import styles from '../styles/Home.module.css';
import MainLayout from '../components/layouts/MainLayout';

const Contact = () => {
	return (
		<MainLayout>
			<h1 className={styles.title}>
				Contact page
			</h1>

			<p className={styles.description}>
				Get started by editing{' '}
				<code className={styles.code}>pages/index.js</code>
			</p>
		</MainLayout>
	);
}

export default Contact;