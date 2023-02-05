import React from 'react';
import '../styles/Service.css';
import { GiCheckMark } from 'react-icons/gi';
import Hammer from 'hammerjs';

function Service() {
  window.addEventListener('load', () => {
    // Get a reference to an element
    var square = document.querySelector('.service-grid');

    // Create a manager to manager the element
    var manager = new Hammer.Manager(square);

    // Create a recognizer
    var Swipe = new Hammer.Swipe();

    // Add the recognizer to the manager
    manager.add(Swipe);

    // Declare global variables to swiped correct distance
    var deltaX = -500;

    // Subscribe to a desired event
    manager.on('swipe', function (e) {
      var direction = e.offsetDirection;
      var translate3d = 'translate3d(' + deltaX + 'px, 0, 0)';

      if (direction === 4 || direction === 2) {
        console.log(e.target);
        console.log(
          e.target.parentElement.parentElement.parentElement.firstElementChild
        );

        // e.target.parentElement.parentElement.style.transform = translate3d;
        e.target.parentElement.parentElement.id = 'none';
        if (e.target.parentElement.parentElement.nextElementSibling) {
          e.target.parentElement.parentElement.nextElementSibling.id = 'active';
        } else {
          e.target.parentElement.parentElement.parentElement.firstElementChild.id =
            'active';
        }
      }
    });
  });

  const services = [
    {
      title: 'UX/UI Design',
      style: 'active',
      details: [
        'Conducting user research to understand the needs and goals of the target audience',
        'Creating wireframes, prototypes, and high-fidelity designs to communicate the design solution',
        'Collaborating with cross-functional teams, including developers and product managers, to ensure the product meets user and business requirements',
      ],
    },
    {
      title: 'Web Development',
      style: 'none',
      details: [
        'Building and maintaining the front-end and back-end of websites and web applications',
        'Integrating web applications with databases and APIs to ensure seamless data flow',
        'Debugging and fixing any technical issues that arise',
        'Staying up-to-date with new technologies and industry trends to continuously improve their skills and knowledge',
      ],
    },
    {
      title: 'Mobile Development',
      style: 'none',
      details: [
        'Analyzing user requirements and determining the most appropriate software solutions to meet those needs',
        'Designing, coding, testing, and debugging mobile applications',
        'Writing clean, efficient, and well-documented code',
        'Maintaining and updating existing mobile applications',
      ],
    },
  ];
  return (
    <section id="service">
      <h5 className="">What I Offer</h5>
      <h2>Services</h2>
      <div className="service-grid">
        {services.map((service) => {
          return (
            <div
              className={' service-col '}
              id={service.style}
              key={service.title}
            >
              <div className="text-center service-title">
                <h4 className="txt-black">{service.title}</h4>
              </div>
              <div className="scroll">
                {service.details.map((detail) => {
                  return (
                    <div className="service-detail" key={detail}>
                      <GiCheckMark />
                      <p>{detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
