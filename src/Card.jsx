const Card = ({ name, likes, onButtonClick, onLikeChange }) => {
    return (
        <div className="card">
            <img src={`https://source.unsplash.com/400x400/?${name}`} alt="" />
            <h4 className="title">{name}</h4>
            <div className="reaction">
                <div className="reaction-btn">
                    <button onClick={onLikeChange}>-</button>
                </div>
                <div className="rating">
                    <i className="fa-solid fa-heart-crack"></i>
                    <i className="fa-solid fa-heart"></i>
                    <span className="count">{likes}</span>
                </div>
                <div className="reaction-btn">
                    <button onClick={onLikeChange}>+</button>
                </div>
            </div>
            <div className="close-btn">
                <button onClick={onButtonClick}>x</button>
            </div>
        </div>
    );
}

export default Card;