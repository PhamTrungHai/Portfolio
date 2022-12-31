import './styles/App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import NavBar from './components/NavBar.js';
import Experience from './components/Experience.js';
import Service from './components/Service.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Testimonial from './components/Testimonial.js';
import Footer from './components/Footer.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="App">
      <NavBar />
      <Row className="justify-content-md-center">
        <Header />

        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testimonial />

        <Contact />
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
