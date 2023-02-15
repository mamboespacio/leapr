import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { List } from 'react-bootstrap-icons';

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
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
    <>
      <div id="navigation" className={`row gx-0 fixed-top ` + navbar }>
        <div className="col-3">
          <img className="" src="/images/leapr-logo.svg"/>
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
        <div className="col-9 d-flex justify-content-end align-items-center">
          <button
            className="btn btn-link text-white"
            onClick={() => setShowNav(true)}>
              <List/>
          </button>
        </div>
      </div>
      <NavModal show={showNav} onHide={() => setShowNav(false)} />
    </>
  );
};
export default Navigation;
