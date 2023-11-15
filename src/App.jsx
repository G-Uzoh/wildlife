// import { Routes, Route, Link } from "react-router-dom";
import { animals } from "./animalsList";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
// import Home from './Home';
import { useState } from "react";

function App() {
  const [wildlife, setWildlife] = useState(animals);
  const [search, setSearch] = useState('');

  function handleDelete(name) {
    const newList = wildlife.filter((wildAminal) => wildAminal.name !== name);
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

  return (
    <>
      <Header />
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
        {/* <Home />
        <Routes>
          <Route path='/' element={<Card />} />
        </Routes> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
