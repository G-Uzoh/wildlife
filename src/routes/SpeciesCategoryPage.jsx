import Card from "../components/Card";
import { useParams } from 'react-router-dom';

const SpeciesCategoryPage = ({
  handleSearch,
  animals,
  search,
  handleDelete,
  handleLikes,
  showScrollBtn,
  handleScrollToTop,
}) => {

  const { species } = useParams();
  const speciesGroup = animals[species];

  return (
    <>
      <div className="info">
        <h2 className="name">{species}</h2>
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      <div className="cards">
        {speciesGroup
          ?.filter((el) =>
            el.name.toLowerCase().includes(search.toLowerCase())
          )
          ?.map((el, index) => (
            <Card
              key={index}
              {...el}
              onButtonClick={() => handleDelete(el.name, species)}
              addLike={() => handleLikes(el.name, "add", species)}
              removeLike={() => handleLikes(el.name, "remove", species)}
            />
          ))}
      </div>
      {showScrollBtn && (
        <div className="scroll-to-top">
          <button onClick={handleScrollToTop}>
            <i className="fa-regular fa-circle-up"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default SpeciesCategoryPage;
