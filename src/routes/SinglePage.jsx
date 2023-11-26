import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { animals, birds } from '../animalsList';

const SinglePage = () => {
  const [wildlife, setWildlife] = useState({
    animals: animals,
    birds: birds,
  });
  const [ likes, setLikes ] = useState(0);
  const { name, category } = useParams();
  
  const handleLikes = (name, reaction, category) => {
    const newArray = wildlife[category].map((el) => {
      if (el.name === name) {
        if (reaction === "add") {
          setLikes(el.likes + 1);
          return { ...el, likes: el.likes + 1 };
        } else {
          setLikes(el.likes - 1);
          return { ...el, likes: el.likes - 1 };
        }
      } else {
        return el;
      }
    });
    setWildlife({ ...wildlife, [category]: newArray });
  };
  // const speciesName = params.name // name in params.name corresponds to the dynamic segment specified in the route config (':category/:name'). The destructured format would be const { name } = useParams();
  return (
    <>
      <h2>Details about {name}</h2>
      <Card 
        key={name}
        name={name}
        likes={likes}
        addLike={() => handleLikes(name, 'add', category)}
        removeLike={() => handleLikes(name, 'remove', category)}
      />
    </>
  );
};

export default SinglePage;
