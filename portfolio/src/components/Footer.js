import React from 'react';
import '../styles/Footer.css';
import { FiMessageCircle } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hải Phạm
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experiences</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/phamtrunghai256/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FiMessageCircle />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Hi Fam. All rights reserve</small>
      </div>
    </footer>
  );
}

export default Footer;
