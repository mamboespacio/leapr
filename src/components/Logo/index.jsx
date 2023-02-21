import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { List } from 'react-bootstrap-icons';
import { Html, Image, useScroll } from "@react-three/drei";

const Logo = () => {
  const [navbar, setNavbar] = useState('white');
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar('white');
    } else {
      setNavbar('black');
    }
    console.log('hola')
  };
  const [showNav, setShowNav] = useState(false);
  const NavModal = (props) => {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="navModal text-black text-center"
      >
        <a 
          href="#index"
          className="btn btn-link text-white"
          >
          Home
        </a>
        <a
          href="#work"
          className="btn btn-link text-white"
          >
          Work
        </a>
        <a
          href="#approach"
          className="btn btn-link text-white"
          >
          Approach
        </a>
        <a
          href="#team"
          className="btn btn-link text-white"
          >
          Team
        </a>
      </Modal>
    );
  };

  return (
    <Html wrapperClass="root">
      <div id="navigation" className="row gx-0 fixed-top">
        <div className="col-9 col-md-3">
          <img className={navbar} alt="Leapr logo" src="/images/leapr-logo-black.svg"/>
          {/* <Image
            src="/images/leapr-logo.svg"
            alt="logo"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
            }} /> */}
        </div>
        <div className="col-3 col-md-9 d-flex justify-content-end align-items-center">
          <button
            className="btn btn-link text-white"
            onClick={() => setShowNav(true)}>
              <List/>
          </button>
        </div>
      </div>
      <NavModal show={showNav} onHide={() => setShowNav(false)} />
    </Html>
  );
};
export default Logo;
