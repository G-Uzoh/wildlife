// import { Routes, Route, Link } from "react-router-dom";
import { animals } from "./animalsList";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
// import Home from './Home';
import { useState } from "react";

function App() {
  const [wildlife, setWildlife] = useState(animals);

  function deleteItem(name) {
    const newList = wildlife.filter((wildAminal) => wildAminal.name != name);
    setWildlife(newList);
  }

  return (
    <>
      <Header />
      <main>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            // value={searchText}
          />
          <span className="material-symbols-outlined"> search </span>
        </div>
        <div className="cards">
          {wildlife.map((animal) => (
            <Card
              key={animal.name}
              {...animal}
              onButtonClick={() => deleteItem(animal.name)}
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
