import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/logo.svg';
import { FiMessageCircle } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <FiMessageCircle />
              </a>
              <a href="#">
                <BsFacebook />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
