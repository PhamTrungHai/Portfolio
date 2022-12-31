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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      ],
    },
    {
      title: 'Web Development',
      style: 'none',
      details: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      ],
    },
    {
      title: 'Content Design',
      style: 'none',
      details: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
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
