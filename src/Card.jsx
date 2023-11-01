const Card = () => {
    return (
        <div className="card">
            <img src="https://cdn.pixabay.com/photo/2016/11/29/09/24/swan-1868697_1280.jpg" alt="" />
            <h4 className="title">Name</h4>
            <div className="reaction">
                <div className="reaction-btn">
                    <button>-</button>
                </div>
                <div className="rating">
                    <i className="fa-solid fa-heart-crack"></i>
                    <i className="fa-solid fa-heart"></i>
                    <span className="count">0</span>
                </div>
                <div className="reaction-btn">
                    <button>+</button>
                </div>
            </div>
            <div className="close-btn">
                <button>x</button>
            </div>
        </div>
    );
}

export default Card;