import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { name } = useParams();
  console.log(name);
  return <h2>Single page will be here</h2>;
};

export default SinglePage;
