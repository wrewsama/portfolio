import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import { useEffect } from 'react';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import MainFooter from './components/footer';
import Home from './components/home';
import MainNavbar from './components/navbar';
import Projects from './components/projects';
import bg2 from './img/bg5.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import { Parallax } from 'react-parallax';

function App() {
	useEffect(() => {
		AOS.init({duration: 1000})
	}, [])

	return (
		<div className="custom-bg-dark">	
			<MainNavbar />
				<Parallax bgImage={bg2} strength={800}>
					<Home />
					<About />
				</Parallax>
				<Experience />
				<Projects />
				<Contact />
			<MainFooter />
		</div>
	);
}

export default App;
