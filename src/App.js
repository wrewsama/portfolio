import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import MainFooter from './components/footer';
import Home from './components/home';
import MainNavbar from './components/navbar';
import Projects from './components/projects';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css'

function App() {
	return (
		<div className="custom-bg-dark">
			<MainNavbar />
			<Parallax className="custom-bg-dark" pages={5}>
				<ParallaxLayer>
					<Home />
				</ParallaxLayer>

				<ParallaxLayer offset={1}>
					<About />
				</ParallaxLayer>

				<ParallaxLayer offset={2}>
					<Experience />
				</ParallaxLayer>

				<ParallaxLayer offset={3}>
					<Projects />
				</ParallaxLayer>

				<ParallaxLayer offset={4}>
					<Contact />
				</ParallaxLayer>
			</Parallax>
			<MainFooter />
		</div>
	);
}

export default App;
