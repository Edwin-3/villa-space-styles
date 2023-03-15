import React, { useState, useEffect, useRef } from 'react';
import './contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    let error = false;

    if (!name) {
      setNameError(true);
      error = true;
    } else {
      setNameError(false);
    }

    if (!email) {
      setEmailError(true);
      error = true;
    } else {
      setEmailError(false);
    }

    if (!message) {
      setMessageError(true);
      error = true;
    } else {
      setMessageError(false);
    }

    if (!error) {
      // send form data to server
      setFormSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const socialContainerRef = useRef(null);
  const contactWrapperRef = useRef(null);

  useEffect(() => {
    const socialContainer = socialContainerRef.current;
    const contactWrapper = contactWrapperRef.current;

    socialContainer.addEventListener('click', () => {
      contactWrapper.classList.toggle('slide-out');
    });

    return () => {
      socialContainer.removeEventListener('click', () => {
        contactWrapper.classList.toggle('slide-out');
      });
    };
  }, []);



  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      {formSuccess && <p className="form-success-message">Thank you for your message!</p>}

      <div className='contact-wrapper' ref={contactWrapperRef}>
        <form onSubmit={handleSubmit}>
          <h4>We would love to hear about your project, please feel free to contact us</h4>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          {nameError && <p className="form-error-message">Please enter your name</p>}
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          {emailError && <p className="form-error-message">Please enter a valid email address</p>}
          <label>Message</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
          {messageError && <p className="form-error-message">Please enter a message</p>}
          <button type="submit">Send Message</button>

          <div className='socials'>
            <a href="https://www.instagram.com/interiordesign/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/InteriorDesignMagazine"><i className="fab fa-facebook"></i></a>
            <a href="https://www.pinterest.com/interiordesign/"><i className="fab fa-pinterest"></i></a>
            <a href="https://twitter.com/InteriorDesign"><i className="fab fa-twitter"></i></a>
          </div>
        </form>
        <div className="social-handles-container" ref={socialContainerRef} >
        </div>
      </div>
    </div>
  );
};

export default Contact;
