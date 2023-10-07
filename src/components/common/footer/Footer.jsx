import { Link } from 'react-router-dom';
import { FaYoutube, FaTwitter } from 'react-icons/fa6';
import './Footer.scss';

export default function Footer() {
	return (
		<footer>
			<h1>KickBack</h1>
			<p>2023 KickBack &copy; All Rights Rserved.</p>

			<ul>
				<li>
					<Link to=''>
						<FaYoutube size={20} color='red' />
					</Link>
				</li>
				<li>
					<Link to=''>
						<FaTwitter size={20} />
					</Link>
				</li>
			</ul>
		</footer>
	);
}
