import { FaStar, FaStarHalf,  } from "react-icons/fa";

const Rating = ({rating, reviews}) => {
    return ( <div className="rating">
        {rating >= 1 ? (
            <FaStar/>
        ) : rating >= 0.5 ? (
            <FaStarHalf/>
        ) : (
            <FaStar/>
        )}
        {rating >= 2 ? (
            <FaStar/>
        ) : rating >= 1.5 ? (
            <FaStarHalf/>
        ) : (
            <FaStar/>
        )}
        {rating >= 3 ? (
            <FaStar/>
        ) : rating >= 2.5 ? (
            <FaStarHalf/>
        ) : (
            <FaStar/>
        )}
        {rating >= 4 ? (
            <FaStar/>
        ) : rating >= 3.5 ? (
            <FaStarHalf/>
        ) : (
            <FaStar/>
        )}
        {rating >= 5 ? (
            <FaStar/>
        ) : rating >= 4.5 ? (
            <FaStarHalf/>
        ) : (
            <FaStar/>
        )}
        <span>{rating}</span>
        <span>({reviews} reviews)</span>
    </div> );
}
 
export default Rating;