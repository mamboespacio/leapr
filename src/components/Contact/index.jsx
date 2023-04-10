import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import Marquee from 'react-fast-marquee';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [showContact, setShowContact] = useState("false");
  const handleToggle = () => {
    setShowContact(!showContact);
  };
  const ContactModal = (props) => {
    return (
      <div className="contactForm">
          <div className="row g-0">
            <div className="col-12 col-md-4">
              <div className='row g-0'>
                <div className={showContact ? 'col-11' : 'col-11 dont'}>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start d-flex align-items-center">
                      <label>name</label>
                      <input
                        type="text"
                        placeholder="write your name"
                        className="form-control rounded-0"
                        aria-describedby="emailHelp"
                        // onChange={e => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 text-start d-flex align-items-center">
                      <label>email</label>
                      <input
                        type="email"
                        placeholder="write your email"
                        className="form-control rounded-0"
                        // onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3 text-start d-flex align-items-center">
                      <label>what's up</label>
                      <input
                      type="text"
                        placeholder="write a message"
                        className="form-control rounded-0"
                        // onChange={e => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="mb-0 text-end">
                      <button type="submit" className="btn text-white rounded-0 px-3">send</button>
                    </div>
                  </form>
                </div>
                <div className='col-1 contactBadge d-flex align-items-center justify-content-center'>
                  <button onClick={handleToggle}>
                    <p className='text-black font-audimat  m-0'>Contact Us</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
    console.log(data);
  };
  return (
    <>
      
      <ContactModal show={showContact} onHide={() => setShowContact(false)} />
    </>
  );
};
export default Contact