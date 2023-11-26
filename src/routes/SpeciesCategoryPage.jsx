import Card from "../components/Card";
import { useParams } from 'react-router-dom';

const SpeciesCategoryPage = ({
  handleSearch,
  animals,
  search,
  handleDelete,
  handleLikes,
}) => {

  const { species } = useParams();
  const speciesGroup = animals[species];

  return (
    <>
      <div className="info">
        <h2 className="name">{species}</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search" onChange={handleSearch} />
          <span className="material-symbols-outlined"> search </span>
        </div>
      </div>
      <div className="cards">
        {speciesGroup
          .filter((el) =>
            el.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((el, index) => (
            <Card
              key={index}
              {...el}
              onButtonClick={() => handleDelete(el.name, species)}
              addLike={() => handleLikes(el.name, "add", species)}
              removeLike={() => handleLikes(el.name, "remove", species)}
            />
          ))}
      </div>
    </>
  );
};

export default SpeciesCategoryPage;
