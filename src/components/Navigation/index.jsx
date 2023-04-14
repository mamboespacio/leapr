import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { List } from 'react-bootstrap-icons';
import { Iso } from '../Icons';
import { Square } from '../Icons';

const Navigation = (navStyle, setNavStyle) => {
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
          href="#dna"
          className="btn btn-link text-white"
          >
          OUR DNA
        </a>
        <a
          href="#work"
          className="btn btn-link text-white"
          >
          OUR WORK
        </a>
        <a
          href="#process"
          className="btn btn-link text-white"
          >
          OUR PROCESS
        </a>
        <a
          href="#team"
          className="btn btn-link text-white"
          >
          OUR TEAM
        </a>
      </Modal>
    );
  };
  const sections = ['OUR DNA', 'OUR WORK', 'OUR PROCESS', 'OUR TEAM']
  return (
    <>
      <div id="navigation" className={`w-100 row gx-0 fixed-top ${navStyle.navStyle}`}>
        <div className="col-6 col-md-3 logo">
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
        {/* <div className="col-3 col-md-9 d-flex justify-content-end align-items-center">
          <button
            className="btn btn-link text-white"
            onClick={() => setShowNav(true)}>
              <img style={{width: '30px'}} alt="Leapr logo" src="/images/menu_hamburguesa.svg"/>
          </button>
        </div> */}
      </div>
      <NavModal show={showNav} onHide={() => setShowNav(false)} />
    </>
  );
};
export default Navigation;
