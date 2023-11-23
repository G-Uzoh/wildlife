import { animals, birds } from "./animalsList";
import About from "./routes/About";
import Home from "./routes/Home";
import Root from "./routes/Root";
import SpeciesCategoryPage from "./routes/SpeciesCategoryPage";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/SinglePage";
import CategoryPage from "./routes/CategoryPage";

function App() {
  const [wildlife, setWildlife] = useState({
    animals: animals,
    birds: birds
  });
  const [search, setSearch] = useState("");

  function handleDelete(name, species) {
    const newList = wildlife[species].filter((el) => el.name !== name);
    setWildlife({...wildlife, [species]: newList});
  }

  const clearSearchBar = () => {
    setSearch('');
  }

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
    setWildlife({...wildlife, [species]: newArray});
  };

  // One way to implement search function
  // function handleSearch(e) {
  //   const searchText = e.target.value.toLowerCase();
  //   const filteredList = wildlife?.filter((word) =>
  //     word.name.toLowerCase().includes(searchText)
  //   );
  //   setWildlife(filteredList);
  // }

  // Function to handle backspace key event in the search function
  // function handleBackspace(e) {
  //   if (e.key === "Backspace") {
  //     const searchText = e.target.value.toLowerCase().split('').slice(0, -1).join('');
  //     const filteredList = animals?.filter((word) =>
  //       word.name.toLowerCase().includes(searchText)
  //     );
  //     setWildlife(filteredList);
  //   }
  // }

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
        { path: ":category/:name", element: <SinglePage /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* 
      <main>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
          <span className="material-symbols-outlined"> search </span>
        </div>
        <div className="cards">
          {wildlife?.filter(animal => animal.name.toLowerCase().includes(search.toLowerCase()))?.map((animal) => (
            <Card
              key={animal.name}
              {...animal}
              onButtonClick={() => handleDelete(animal.name)}
              addLike={() => handleLikes(animal.name, 'add')}
              removeLike={() => handleLikes(animal.name, 'remove')}
            />
          ))}
        </div>
      {/* </main> */}
    </>
  );
}

export default App;
