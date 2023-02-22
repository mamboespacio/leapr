import React, { useState } from 'react';
import { Modal } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [showContact, setShowContact] = useState(false);
  const contactModal = (props) => {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-black text-center"
      >
        <div className="container h-100 d-flex align-items-center">
          <div className="row px-5 px-md-0 align-items-center align-items-md-start">
            <div className="col-12 col-md-3 offset-md-4 pt-5 pt-md-0">
              <h4>
                Contact
              </h4>
              <p className="mt-1 text-muted">
                Send us a message
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control rounded-0 border-0 border-bottom border-white"
                    aria-describedby="emailHelp"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-0 border-0 border-bottom border-white"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    placeholder="Message"
                    className="form-control rounded-0 border-0 border-bottom border-white"
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-lg btn-outline-light rounded-pill">Send</button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
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
      <button className='contactBadge' onClick={() => setShowContact(true)}>
        <p>Contact Us :)</p>
      </button>
      <contactModal show={showContact} onHide={() => setShowContact(false)} />
    </>
  );
};
export default Contact