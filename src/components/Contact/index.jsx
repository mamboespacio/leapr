import React, { useState } from 'react';
import { Modal } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [showContact, setShowContact] = useState(false);
  const ContactModal = (props) => {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-black text-center"
      >
        <div className="container">
          <div className="row px-5 py-3 px-md-0">
            <div className="col-12 pt-5 pt-md-0">
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
                <button type="submit" className="btn bg-color rounded-pill">Send</button>
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
        <p className='text-black'>Contact Us</p>
      </button>
      <ContactModal show={showContact} onHide={() => setShowContact(false)} />
    </>
  );
};
export default Contact