import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import MainFooter from './components/footer';
import Home from './components/home';
import MainNavbar from './components/navbar';
import Projects from './components/projects';

function App() {
	return (
		<Container>
			<MainNavbar />
			<Home />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<MainFooter />
		</Container>
	);
}

export default App;
