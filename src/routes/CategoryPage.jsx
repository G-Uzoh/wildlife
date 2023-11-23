import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryPage = (props) => {
  const params = useParams();
  let category = params.category;
  console.log(props);
  console.log(params);
  console.log(category);
  return (
    <>
      <h2>{category.category}</h2>
      <div>
        {props[category]
          .filter((el) =>
            el.name.toLowerCase().includes(props.search.toLowerCase())
          )
          .map((el) => (
            <Card key={el.name} onButtonClick={() => handleDelete(el.name)} />
          ))}
      </div>
    </>
  );
};

export default CategoryPage;
