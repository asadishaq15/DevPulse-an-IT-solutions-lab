import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1 className="heading">get in touch</h1>
      <div className="contact-in">
        <div className="contact-map">
          <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.7590106953745!2d73.04788291424057!3d33.68442008071063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df98fc69c2c73d%3A0x5d01e26769097e47!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin"            width="100%"
            height="auto"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="contact-form">
          <form action="./contactme.php" method="POST">
            <input type="text" name="name" placeholder="Name" className="contact-form-txt" required />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              required
              placeholder="Contact number"
              maxLength="10"
              className="contact-form-phone"
            />
            <input type="email" name="email" placeholder="Email" className="contact-form-email" required />
            <textarea placeholder="Your Message" name="message" className="contact-form-txtarea" required></textarea>
            <input type="submit" value="Submit" name="submit" className="contact-form-btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
