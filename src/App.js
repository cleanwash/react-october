import Header from './components/common/header/Header';
import Visual from './components/main/visual/Visual';
import Department from './components/sub/department/Department';
import Contact from './components/sub/contact/Contact';
import Gallery from './components/sub/gallery/Gallery';
import Youtube from './components/sub/youtube/Youtube';
import Members from './components/sub/members/Members';
import Footer from './components/common/footer/Footer';
import './styles/Global.scss';
import { Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />

			<Route exact path='/'>
				<Visual />
			</Route>

			<Route path='/department'>
				<Department />
			</Route>

			<Route path='/gallery'>
				<Gallery />
			</Route>

			<Route path='/youtube'>
				<Youtube />
			</Route>

			<Route path='/members'>
				<Members />
			</Route>

			<Route path='/contact'>
				<Contact />
			</Route>

			<Footer />
		</>
	);
}

export default App;
