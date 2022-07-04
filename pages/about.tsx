import MainLayout from '../components/layouts/MainLayout';
import styles from '../styles/Home.module.css';

const About = () => {
	return (
		<MainLayout>
			<h1 className={styles.title}>
				About page
			</h1>

			<p className={styles.description}>
				Get started by editing{' '}
				<code className={styles.code}>pages/index.js</code>
			</p>
		</MainLayout>
	);
}

export default About;