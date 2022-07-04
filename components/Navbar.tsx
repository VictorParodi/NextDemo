import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Navbar.module.css';

const menuItems = [
	{
		text: 'Home',
		path: '/'
	},
	{
		text: 'About',
		path: '/about'
	},
	{
		text: 'Contact',
		path: '/contact'
	},
	{
		text: 'Pricing',
		path: '/pricing'
	}
];

const Navbar = () => {
	const router = useRouter();
	console.log(router);

	return (
		<nav className={styles['menu-container']}>
			{
				menuItems.map(item => {
					return (
						<Link key={item.path} href={item.path}>{item.text}</Link>
					);
				})
			}
		</nav>
	);
}

export default Navbar;