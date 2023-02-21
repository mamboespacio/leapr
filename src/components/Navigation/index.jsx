import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { List } from 'react-bootstrap-icons';
import { Iso } from '../Icons';
import { Square } from '../Icons';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
  
  }, []);
  
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
  const sections = ['home', 'about', 'projects', 'our process', 'team', 'contact']
  return (
    <>
      <div id="navigation" className="w-100 row gx-0 fixed-top">
        <div className="col-9 col-md-3">
          <img className="w-100" alt="Leapr logo" src="/images/leapr-logo-black.svg"/>
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
              <img style={{width: '30px'}} alt="Leapr logo" src="/images/menu_hamburguesa.svg"/>
          </button>
        </div>
      </div>
      <NavModal show={showNav} onHide={() => setShowNav(false)} />
    </>
  );
};
export default Navigation;
