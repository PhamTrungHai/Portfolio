import React from 'react';
import '../styles/Portfolio.css';
import Port1 from '../assets/portfo1.png';
import Port2 from '../assets/portfo2.jpeg';
import Port3 from '../assets/portfo3.jpeg';
import Button from 'react-bootstrap/Button';

function Portfolio() {
  const projects = [
    {
      img: Port1,
      title: 'Ecommerce website UX/UI Figma',
      url: 'https://www.behance.net/gallery/159458823/TKGDWEB_BANDIENTHOAI/modules/899730933',
    },
    {
      img: Port2,
      title: 'Ecommercce Laptop Store',
      url: 'https://shoplap.onrender.com/',
    },
    {
      img: Port3,
      title: 'Ecommerce Beershop',
      url: 'https://lobster-app-sqnty.ondigitalocean.app/',
    },
  ];
  return (
    <section id="portfolio">
      <h5 className="">My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="port-grid container">
        {projects.map((project) => {
          return (
            <div className="port-col" key={project.title}>
              <div className="port-pic">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="port-detail">
                <h4>{project.title}</h4>
              </div>
              <div className="port-link">
                <a href="https://github.com/PhamTrungHai/" target="_blank">
                  <Button
                    variant="secondary secondary-trans"
                    className="ma-right "
                  >
                    Github
                  </Button>
                </a>
                <a href={project.url} target={'_blank'} rel="noreferrer">
                  <Button variant="primary">Live Demo</Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
