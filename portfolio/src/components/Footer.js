import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <a href="#" className="foot__logo">
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
          Facebook
        </a>
        <a href="https://facebook.com" target="_blank">
          Instagram
        </a>
        <a href="https://facebook.com" target="_blank">
          Zalo
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Hi Fam. All rights reserve</small>
      </div>
    </footer>
  );
}

export default Footer;
