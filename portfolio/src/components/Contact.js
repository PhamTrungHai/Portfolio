import React from 'react';
import '../styles/Contact.css';
import { FaAward } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { ImFolderOpen } from 'react-icons/im';
import Button from 'react-bootstrap/Button';

function Contact() {
  const icons = [
    { icon: <FaAward />, title: 'Experience', text: '20+ Years Working' },
    { icon: <FaUserFriends />, title: 'Clients', text: 'Over 100 Worldwide' },
    {
      icon: <ImFolderOpen />,
      title: 'Projects',
      text: '100 Completed Projects',
    },
  ];
  return (
    <section id="contact">
      <h5 className="">Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact-container container">
        <div className="contact-med">
          {icons.map((icon) => {
            return (
              <div className="contact-box" key={icon.text}>
                <article>
                  {icon.icon}
                  <h3>{icon.title}</h3>
                  <h5>{icon.text}</h5>
                </article>
              </div>
            );
          })}
        </div>
        <div className="mailing-form">
          <form>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="What's your name?"
                required
              />
              <label>What's your name?</label>
            </div>

            <input
              className="input"
              type="email"
              placeholder="What's your email?"
              required
            />
            <input
              className="input message"
              type="text"
              placeholder="What's your email?"
            />
            <div className="bg-light border btn-send">
              <Button variant="primary">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
