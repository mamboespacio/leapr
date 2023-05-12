import React, { useState, useReducer, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from "react-hook-form";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ title: 'send', paragraph: '' });
  const [sent, setSent] = useState(false);

  let recaptchaInstance;
  const executeCaptcha = (e) => {
    e.preventDefault();
    recaptchaInstance.execute();
  };

  function resetForm(){
    recaptchaInstance.reset()
    reset();
  }
  function onChange(captchaValue) {
    const values = getValues();
    const data = {
      ...values,
      'g-recaptcha-response': captchaValue,
    }
    handleSubmit(onSubmit(data))
  }

  const { register, getValues, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    setFormStatus({ title: 'Sending...'});
    emailjs.send(
      'service_xi8cdqb', //serviceID
      'template_kwac0mt', //templateID
      data,
      '7y_8-yW8e9VWnBjKv' //publicKey,
    )
      .then(({ status }) => {
        setSent(true)
        if (status === 200) {
          setFormStatus({ title: 'Message has been sent' });
        } else {
          setFormStatus({ title: 'Error from emailjs' });
        }
      }, (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setFormStatus({ title: 'Error sending message, try again later' });
      });
  };

  return (
    <div className="contactForm d-flex ">
      <Collapse in={open} dimension="width">
        <form>
          <div className="mb-3 text-start d-flex align-items-center">
            <label>name</label>
            <input
              {...register("from_name", { required: true })}
              placeholder="write your name"
              className="form-control rounded-0"
            />
            {errors.from_name?.type === 'required' && <p role="alert">name is required</p>}
          </div>
          <div className="mb-3 text-start d-flex align-items-center">
            <label>email</label>
            <input
              {...register("email", { required: true })}
              placeholder="write your email"
              className="form-control rounded-0"
            />
            {errors.mail && <p role="alert">mail is required</p>}
          </div>
          <div className="mb-3 text-start d-flex align-items-center">
            <label>what's up</label>
            <input
              {...register("message", { required: true })}
              placeholder="write a message"
              className="form-control rounded-0"
            />
            {errors.message && <p role="alert">message is required</p>}
          </div>
          <div className="mb-0 text-end">
            <button type="submit" onClick={executeCaptcha} className="btn text-white rounded-0 px-3">{formStatus.title}</button>
          </div>
          <ReCAPTCHA
            ref={(e) => (recaptchaInstance = e)}
            sitekey="6LcX9gQmAAAAABUIfULsK2hRKUtiJYgA48BL0trD"
            onChange={onChange}
            size="invisible"
          />
        </form>
      </Collapse>
      <div className="contactBadge d-flex align-items-center justify-content-center">
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
  );
};
export default Contact;
