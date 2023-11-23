import { Link } from "react-router-dom";

const Card = ({ name, likes, onButtonClick, addLike, removeLike }) => {
  return (
    <div className="card">
      <img
        src={`https://source.unsplash.com/400x400/?${name}`}
        alt={`${name}`}
      />
      <h4 className="title">{name}</h4>
      <div className="reaction">
        <div onClick={removeLike} className="reaction-btn">
          <button>-</button>
        </div>
        <div className="rating">
          {likes < 0 ? (
            <i className="fa-solid fa-heart-crack"></i>
          ) : (
            <i className="fa-solid fa-heart"></i>
          )}
          <span className="count">{likes}</span>
        </div>
        <div onClick={addLike} className="reaction-btn">
          <button>+</button>
        </div>
      </div>
      <div className="close-btn">
        <button onClick={onButtonClick}>x</button>
      </div>
      <Link>View more</Link>
    </div>
  );
};

export default Card;
