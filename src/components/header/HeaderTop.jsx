import { FaPhone, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderTop = ({ setToggle, toggle }) => {
  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {toggle ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
      </div>
      <div className="header-top-phone">
        <FaPhone/>+234-7039-360-187
      </div>
      <div className="header-top-text">Welcome To Online Book Store</div>
      <Link to="/login" className="header-top-link">
       <FaUser/> Login
      </Link>
    </div>
  );
};

export default HeaderTop;
