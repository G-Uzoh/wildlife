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
      <div className="search-bar">
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <span className="material-symbols-outlined"> search </span>
      </div>
      <div className="cards">
        {speciesGroup
          .filter((el) =>
            el.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((el) => (
            <Card
              key={el.name}
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
