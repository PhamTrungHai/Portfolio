import React from 'react';
import '../styles/About.css';
import MeBack from '../assets/meback.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FaAward } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { ImFolderOpen } from 'react-icons/im';

function About() {
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
    <section id="about">
      <div className="text-center">
        <h5 className="">Get To Know</h5>
        <h2>About Me</h2>

        <Row className="about-row">
          <Col sm={4}>
            <div className="about-pic">
              <img src={MeBack} alt="meback" />
            </div>
          </Col>
          <Col sm={8}>
            <Stack gap={3}>
              <div className="bg-light border about-box-holder">
                {icons.map((icon) => {
                  return (
                    <div className="about-box" key={icon.text}>
                      <article>
                        {icon.icon}
                        <h3>{icon.title}</h3>
                        <h5>{icon.text}</h5>
                      </article>
                    </div>
                  );
                })}
              </div>
              <div className="bg-light border self-intro">
                <ul>
                  <li>
                    <h5>
                      <strong>Experience:</strong>
                      <ul>
                        <li>- Junior at HUFLIT Universities.</li>
                        <li>
                          - Have 1 year worth of experience in learning, using
                          MERN stack.
                        </li>
                        <li>
                          - Eager to learn more in network management and
                          cybersecurity.
                        </li>
                        <li>
                          - Know how to read documentation and search for
                          answers when reach a dead end.
                        </li>
                      </ul>{' '}
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <strong>Skills:</strong>
                      <ul>
                        <li>
                          - Experienced UI developer HTML5, CSS, Javascript,...
                        </li>
                        <li>- Know how to use Figma, AdobeXD,...</li>
                        <li>- Have experiences in using Git, GitHub,...</li>
                      </ul>{' '}
                      My portfolio :{' '}
                      <a href="https://haifam.me/">https://haifam.me/</a>
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="bg-light border btn-talk">
                <Button variant="primary" href="#contact">
                  Let's Talk
                </Button>
              </div>
            </Stack>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default About;
