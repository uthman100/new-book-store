import { FaX } from "react-icons/fa6";
import "./footer.css";
import { FaEnvelope, FaFacebook, FaHome, FaInstagram, FaPhone, FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-medai-text">Follow us on social media</div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
          <FaInstagram/>
          </div>
          <div className="footer-social-media-icon"><FaTelegram/>
          </div>
          <div className="footer-social-media-icon"><FaFacebook/>
          </div>
          <div className="footer-social-media-icon"><FaYoutube/>
          </div>
          <div className="footer-social-media-icon"><FaX/>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">Blog</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <FaHome/>
              Olosun, Apata, Ibadan, Oyo State, Nigeria.
            </div>
            <div className="footer-address-item">
              <FaPhone/>
              +234-7039-360-187
            </div>
            <div className="footer-address-item">
            <FaEnvelope />
              uthmanbnabdulazeez07@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis aperiam fugiat ullam distinctio iusto sunt, numquam,
            quis reiciendis pariatur error itaque? Voluptatem libero maiores
            eveniet fugiat provident architecto minima pariatur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquam perferendis
            nemo hic laborum aspernatur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
