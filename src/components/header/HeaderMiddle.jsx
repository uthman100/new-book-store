import { useContext } from "react";
import { Link } from "react-router-dom";
import BookStoreContext from "../../context/bookStorContext";
import { FaBook, FaSearch,  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const HeaderMiddle = () => {
  const { cartInfoLength } = useContext(BookStoreContext);
  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book </b>
         <FaBook/>  
        <b> Store</b>
        
      </Link>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search in book store..."
        />
       
        <FaSearch/>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartInfoLength > 0 && (
          <b className="cart-notification">{cartInfoLength}</b>
        )}
         <div className="cart"><FaCartShopping/></div>
        
      </Link>
    </div>
  );
};

export default HeaderMiddle;
