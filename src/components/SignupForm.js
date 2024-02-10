// SignupForm.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.css';

const SignupForm = () => {
  const [btnValue, setBtnValue] = useState('Send Email');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const btn = document.getElementById('button');
    setBtnValue('Sending...');

    const serviceID = 'service_b7j6qc2';
    const templateID = 'template_t3pday4';
    const publicKey = 'j76MTUzhU2tlJZ6Vv';

    emailjs.sendForm(serviceID, templateID, event.target, publicKey, 'jonathan.fausset@me.com')
      .then(() => {
        setBtnValue('Send Email');
        alert('Sent!');
        form.reset();
      })
      .catch((err) => {
        setBtnValue('Send Email');
        alert(JSON.stringify(err));
      });
  };

  return (
    <>
        <form id="form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="name">Name </label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="field">
                <label htmlFor="email">Email </label>
                <input type="text" name="email" id="email" />
            </div>
            <div className="field">
                <label htmlFor="message">Message </label>
                <input type="text" name="message" id="message" />
            </div>
            <div className="transition hover:scale-[105%] hover:shadow-sm ">
                <input type="submit" id="button" value={btnValue} className="cursor-pointer" />
            </div>
        </form>
        <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js"
        ></script>
    </>
  );
};

export default SignupForm;

