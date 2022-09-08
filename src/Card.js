import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ username, avatar_url }) => {
  return (
    <div className="Card">
      <div className="Card-container-img">
        <img className="Card-img" src={avatar_url} alt="avatar" />
      </div>
      <div className="Card-text">
        <Link className="Card-link" to={"/detail/"+ username}>
          <img
            className="Card-arrow"
            src="https://img.icons8.com/stickers/100/000000/forward.png"
            alt="an-arrow"
          />
          {username}
        </Link>
      </div>
    </div>
  );
};

export default Card;
