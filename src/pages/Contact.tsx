import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="container">
          <h1>Contact Me</h1>
          <img src="https://via.placeholder.com/200" alt="Contact" className="rounded-full shadow-md" style={{ width: '200px' }} />
          <img src="https://via.placeholder.com/300x100" alt="Contact Form" />
          <p className="mb-4 text-lg">I am always open to discussing new opportunities, collaborations, or just to connect!</p>
          <div className="contact-form animate-slide-up">
            <form>
              <input type="text" placeholder="Name" className="shadow-sm" />
              <input type="email" placeholder="Email" className="shadow-sm" />
              <textarea placeholder="Message" className="shadow-sm"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="mt-8">
            <p className="text-lg">You can also reach me at:</p>
            <p className="text-lg"><a href="mailto:test@example.com">test@example.com</a></p>
            <p className="text-lg">Or call me at: 123-456-7890</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
