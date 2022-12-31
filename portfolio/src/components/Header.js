import React from 'react';
import '../styles/Header.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import me from '../assets/me.png';
import Col from 'react-bootstrap/Col';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

function Header() {
  const socialMeds = [
    { icon: <AiFillLinkedin />, url: 'abc.com' },
    { icon: <AiFillGithub />, url: 'a12.com' },
    { icon: <AiFillFacebook />, url: 'abc31.com' },
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
                <a key={socialMed.url} href={socialMed.url}>
                  {socialMed.icon}
                </a>
              );
            })}
          </div>
          <div className="cta">
            <Button variant="primary">Download CV</Button>
            <Button variant="secondary">Let's Talk</Button>
          </div>
          <div className="container pic-container">
            <div className="me">
              <img src={me} alt="Me" />
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
