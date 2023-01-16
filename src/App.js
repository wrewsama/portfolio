import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import MainFooter from './components/footer';
import Home from './components/home';
import MainNavbar from './components/navbar';
import Projects from './components/projects';
import bg from './img/bg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App() {
	useEffect(() => {
		AOS.init({duration: 1000})
	}, [])

	return (
		<div >
			<div style={{
			backgroundImage: `url(${bg})`,
			backgroundSize: 'cover',
		    }}>
				<MainNavbar />
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
				<MainFooter />
			</div>
		</div>
	);
}

export default App;
