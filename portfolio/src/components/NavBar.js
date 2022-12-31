import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { RiServiceLine } from 'react-icons/ri';
import { MdOutlineContactMail } from 'react-icons/md';

function NavBar() {
  const [active, setActive] = useState(true);

  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link
          href="#header"
          active={active}
          onClick={() => setActive(!active)}
        >
          <AiOutlineHome />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#about" onClick={() => setActive(false)}>
          <AiOutlineUser />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#experience" onClick={() => setActive(false)}>
          <HiOutlineDesktopComputer />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#service" onClick={() => setActive(false)}>
          <RiServiceLine />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact" onClick={() => setActive(false)}>
          <MdOutlineContactMail />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
