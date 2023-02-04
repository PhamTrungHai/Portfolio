import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import headerimg from '../assets/img/header-img.svg';
import { useState, useEffect } from 'react';
import 'animate.css';

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    'Fullstack Web Developer',
    'Web Designer',
    'UX/UI Designer',
  ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi i'm a `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              onClick={() => {
                console.log('s');
              }}
            >
              Let's connect <FaArrowAltCircleRight />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerimg} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
