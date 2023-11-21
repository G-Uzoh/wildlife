import { animals } from "./animalsList";
import About from './routes/About';
import Home from './routes/Home';
import Root from "./routes/Root";
import Animals from "./routes/Animals";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [wildlife, setWildlife] = useState(animals);
  const [search, setSearch] = useState('');

  function handleDelete(name) {
    const newList = wildlife.filter((wildAnimal) => wildAnimal.name !== name);
    setWildlife(newList);
  }

  const handleSearch = e => {
    setSearch(e.target.value);
  }

  const handleLikes = (name, reaction) => {
    const newArray = wildlife.map((animal) => {
      if (animal.name === name) {
        if (reaction === 'add') {
          return {...animal, likes: animal.likes + 1};
        } else {
          return {...animal, likes: animal.likes - 1};
        }
      } else {
        return animal;
      }
    });
    setWildlife(newArray);
  }

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
    { path: '/', element: <Root />, 
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: '/animals',
        element: (
          <Animals 
            handleSearch={handleSearch}
            animals={wildlife}
            search={search}
            handleDelete={handleDelete}
            handleLikes={handleLikes}
          />
        )
      },
      { path: '/about', element: <About /> }
    ]}
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
