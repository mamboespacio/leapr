import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [showContact, setShowContact] = useState(false);
  const handleToggle = () => {
    setShowContact(!showContact);
  };

  const ContactModal = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_xi8cdqb', 'template_kwac0mt', form.current, '7y_8-yW8e9VWnBjKv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
      <div className="contactForm">
          <div className="row g-0">
            <div className="col-12 col-md-4">
              <div className='row g-0'>
                <div className="col-11" style={{'width': showContact ? '91.66666667%' : '0%'}}>
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
  return (
    <>  
      <ContactModal show={showContact} onHide={() => setShowContact(false)} />
    </>
  );
};
export default Contact