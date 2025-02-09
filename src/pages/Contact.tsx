import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-form animate-slide-up">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;