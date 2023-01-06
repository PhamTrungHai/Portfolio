import React, { useRef } from 'react';
import '../styles/Contact.css';
import { FiMessageCircle } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5sguktu',
        'template_100ugrj',
        form.current,
        'eyBSlfuCqJEXgrE5e'
      )
      .then(
        (result) => {
          console.log(result.name);
          var element = document.getElementById('mail-form');
          element.reset();
        },
        (error) => {
          console.log(error.name);
        }
      );
  };
  const icons = [
    {
      icon: <MdOutlineEmail />,
      platform: 'Gmail',
      name: 'haiphamtrung62@gmail.com',
      link: 'mailto:haiphamtrung62@gmail.com',
    },
    {
      icon: <RiMessengerLine />,
      platform: 'Messenger',
      name: 'Phạm Trung Hải',
      link: 'https://m.me/qhai62',
    },
    {
      icon: <FiMessageCircle />,
      platform: 'Zalo',
      name: '0903349317',
      link: 'https://zalo.me/84903349317',
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
              <div className="contact-box" key={icon.name}>
                <article>
                  {icon.icon}
                  <h3>{icon.platform}</h3>
                  <h5>{icon.name}</h5>
                  <a href={icon.link} target="_blank">
                    Send a message
                  </a>
                </article>
              </div>
            );
          })}
        </div>
        <div className="mailing-form">
          <form ref={form} onSubmit={sendEmail} id="mail-form">
            <div className="input-container">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="What's your name?"
                required
              />
            </div>

            <input
              className="input"
              type="email"
              name="email"
              placeholder="What's your email?"
              required
            />
            <input
              className="input message"
              type="text"
              name="message"
              placeholder="What's your email?"
            />
            <div className="bg-light border btn-send">
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
