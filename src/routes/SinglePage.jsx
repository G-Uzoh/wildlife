import { useNavigate, useParams } from "react-router-dom";

const SinglePage = (props) => {
    let urlParams = useParams();
    const navigate = useNavigate();
    const array = props[urlParams.species];
    
    const data = array.find(el => el.name === urlParams.name);
    
    return (
        <div className="singlecard">
          <div className="card single">
            <img src={`https://source.unsplash.com/400x400/?${data.name}`} alt={`${data.name}`} />
            <h2 className="title">{data.name}</h2>
            <p className="likes">Likes: {data.likes}</p>
            <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
    );
}

export default SinglePage;