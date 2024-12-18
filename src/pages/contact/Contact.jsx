import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
          <FaHome/>
            Address
          </div>
          <p className="contact-item-text">Olosun, Apata, Ibadan, Oyo State, Nigeria.</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon"><FaPhone/>
            Phone
          </div>
          <p className="contact-item-text">+234-7039-360-187</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
          <FaEnvelope/>
            Email
          </div>
          <p className="contact-item-text">uthmanbnabdulazeez07@gmail.com</p>
        </div>
      </div>
      <form onSubmit={e => e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Subject *" />
          <input type="text" placeholder="Email *" />
        </div>
        <textarea
          placeholder="Your Message *"
          className="contact-textarea"
          rows="5"
        ></textarea>
        <button className="contact-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
