import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import MainFooter from './components/footer';
import Home from './components/home';
import MainNavbar from './components/navbar';
import Projects from './components/projects';
import './App.css'

function App() {
	return (
		<div>
			<MainNavbar />
			<Home />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<MainFooter />
		</div>
	);
}

export default App;
