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
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </h5>
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
