import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import Marquee from 'react-fast-marquee';

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
        <div className="container p-0">
          <div className="row px-5 py-0 px-md-0">
            <div className="col-12 pt-5 pt-md-0">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label>name</label>
                  <input
                    type="text"
                    placeholder="write your name"
                    className="form-control rounded-0"
                    aria-describedby="emailHelp"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label>email</label>
                  <input
                    type="email"
                    placeholder="write your email"
                    className="form-control rounded-0"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label>what's up</label>
                  <textarea
                    placeholder="write a message"
                    className="form-control rounded-0"
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>
                <div className="mb-0 text-end">
                  <button type="submit" className="btn bg-color-2 rounded-0 px-5">send</button>
                </div>
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
      <div className='contactBadge'>
      <Marquee gradient={false} speed={5}>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        <button className='btn-link w-100' onClick={() => setShowContact(true)}>
          <p className='text-black font-audimat'>Contact Us</p>
        </button>
        
        
      </Marquee>
      </div>
      <ContactModal show={showContact} onHide={() => setShowContact(false)} />
    </>
  );
};
export default Contact