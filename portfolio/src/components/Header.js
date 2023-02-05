import React from 'react';
import '../styles/Header.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import me1 from '../assets/me1.png';
import CV from '../assets/CV.pdf';
import Col from 'react-bootstrap/Col';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

function Header() {
  const socialMeds = [
    {
      icon: <AiFillLinkedin />,
      url: 'https://www.linkedin.com/in/h%E1%BA%A3i-ph%E1%BA%A1m-6a2319233/',
    },
    { icon: <AiFillGithub />, url: 'https://github.com/PhamTrungHai/' },
    { icon: <AiFillFacebook />, url: 'https://www.facebook.com/qhai62' },
  ];
  return (
    <section id="header">
      <div className="container text-center">
        <Row>
          <h5 className="">Hello I'm</h5>
          <h1>Hải Phạm</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <div className="container social-med">
            {socialMeds.map((socialMed) => {
              return (
                <a key={socialMed.url} href={socialMed.url} target="_blank">
                  {socialMed.icon}
                </a>
              );
            })}
          </div>
          <div className="cta">
            <Button variant="primary" href={CV} download>
              Download CV
            </Button>
            <Button variant="secondary" href="#contact">
              Let's Talk
            </Button>
          </div>
          <div className="container pic-container">
            <div className="me">
              <img src={me1} alt="Me" />
            </div>
          </div>

          <div className="scrolldown">
            <a href="#contact">Scroll Down</a>
          </div>
        </Row>
      </div>
    </section>
  );
}

export default Header;
