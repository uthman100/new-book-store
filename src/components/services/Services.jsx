import { FaGift, FaTelegramPlane, FaTruck } from "react-icons/fa";
import "./services.css";
import { FaArrowRotateRight } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="services">
      <div className="service-item"><div className="service-item-icon"><FaTruck/></div>
        <b>Free Shipping</b>
      </div>
      <div className="service-item"><div className="service-item-icon"><FaGift/></div>
        <b>Gift Card</b>
      </div>
      <div className="service-item"><div className="service-item-icon"><FaArrowRotateRight/></div>
        <b>7 Days Return</b>
      </div>
      <div className="service-item"><div className="service-item-icon"><FaTelegramPlane/></div>
        <b>Contact Us</b>
      </div>
    </div>
  );
};

export default Services;
