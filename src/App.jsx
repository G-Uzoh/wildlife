import { animals, birds } from "./animalsList";
import About from "./routes/About";
import Home from "./routes/Home";
import Root from "./routes/Root";
import SpeciesCategoryPage from "./routes/SpeciesCategoryPage";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/SinglePage";

function App() {
  const [wildlife, setWildlife] = useState({
    animals: animals,
    birds: birds,
  });
  const [search, setSearch] = useState("");

  function handleDelete(name, species) {
    const newList = wildlife[species].filter((el) => el.name !== name);
    setWildlife({ ...wildlife, [species]: newList });
  }

  const clearSearchBar = () => {
    setSearch("");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLikes = (name, reaction, species) => {
    const newArray = wildlife[species].map((el) => {
      if (el.name === name) {
        if (reaction === "add") {
          return { ...el, likes: el.likes + 1 };
        } else {
          return { ...el, likes: el.likes - 1 };
        }
      } else {
        return el;
      }
    });
    setWildlife({ ...wildlife, [species]: newArray });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root clearSearchBar={clearSearchBar} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: ":species",
          element: (
            <SpeciesCategoryPage
              handleSearch={handleSearch}
              animals={wildlife}
              search={search}
              handleDelete={handleDelete}
              handleLikes={handleLikes}
            />
          ),
        },
        // { path: ":category", element: <CategoryPage {...wildlife} /> },
        {
          path: ":species/:name",
          element: (
            <SinglePage {...wildlife} />
          ),
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
