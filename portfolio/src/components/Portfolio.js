import React from 'react';
import '../styles/Portfolio.css';
import Port1 from '../assets/portfo1.png';
import Button from 'react-bootstrap/Button';

function Portfolio() {
  const projects = [
    {
      img: Port1,
      title: 'Ecommerce website UX/UI Figma',
      url: 'https://www.behance.net/gallery/159458823/TKGDWEB_BANDIENTHOAI/modules/899730933',
    },
    {
      img: Port1,
      title: 'Ecommerce website UX/UI Figma 1',
      url: 'https://www.behance.net/gallery/159458823/TKGDWEB_BANDIENTHOAI/modules/899730933',
    },
    {
      img: Port1,
      title: 'Ecommerce website UX/UI Figma 2',
      url: 'https://www.behance.net/gallery/159458823/TKGDWEB_BANDIENTHOAI/modules/899730933',
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
                <Button
                  variant="secondary secondary-trans"
                  className="ma-right "
                >
                  Github
                </Button>
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
