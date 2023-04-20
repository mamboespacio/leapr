import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g8r5ktp', 'template_5essyz8', form.current, '5hX-fJvARmeEwejNU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contactForm d-flex ">
      <Collapse in={open} dimension="width">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3 text-start d-flex align-items-center">
            <label>name</label>
            <input
              type="text"
              placeholder="write your name"
              className="form-control rounded-0"
              name="user_name"
            />
          </div>
          <div className="mb-3 text-start d-flex align-items-center">
            <label>email</label>
            <input
              type="email"
              placeholder="write your email"
              className="form-control rounded-0"
              name="user_emaikl"
            />
          </div>
          <div className="mb-3 text-start d-flex align-items-center">
            <label>what's up</label>
            <input
            type="text"
              placeholder="write a message"
              className="form-control rounded-0"
              name="message"
            />
          </div>
          <div className="mb-0 text-end">
            <button type="submit" className="btn text-white rounded-0 px-3">send</button>
          </div>
        </form>
      </Collapse>
      <div className='contactBadge d-flex align-items-center justify-content-center'>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="text-dark"
        >
          Contact Us
        </Button>
      </div>
    </div>
  )
}
export default Contact