import React from 'react';
import './ContactMe.module.css';

function submitContact() {
  alert('Contact Sumbitted');
}

function ContactMe() {
  return (
    <section className="Contact" id="contact" onSubmit={submitContact}>
      <h2>Contact Me</h2>
      <form action="#" onSubmit={submitContact}>
        <label for="name">
          Name:
          <input id="name" placeholder="Thabo Dlamini" required />
        </label>

        <label for="email">
          Email Address:
          <input
            type="email"
            id="email"
            placeholder="thabo.dlamini@example.com"
            required
          />
        </label>

        <label for="message">
          Message:
          <textarea
            id="message"
            placeholder="I would like to enquire about..."
            rows={5}
            cols={50}
          ></textarea>
        </label>

        <input type="submit" value="Submit" className="SubmitButton" />
      </form>
    </section>
  );
}

export default ContactMe;
