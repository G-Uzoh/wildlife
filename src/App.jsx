// import { Routes, Route, Link } from "react-router-dom";
import { animals } from "./animalsList";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
// import Home from './Home';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [wildlife, setWildlife] = useState([...animals]);

  function deleteItem(name) {
    const newList = wildlife.filter((wildAminal) => wildAminal.name != name);
    setWildlife(newList);
  }

  function searchItem(e) {
    const searchText = e.target.value.toLowerCase();
    const filteredList = wildlife?.filter((word) =>
      word.name.toLowerCase().includes(searchText)
    );
    setWildlife(filteredList);
  }

  function handleBackspace(e) {
    if (e.key === "Backspace") {
      const searchText = e.target.value.toLowerCase().split('').slice(0, -1).join('');
      const filteredList = animals?.filter((word) =>
        word.name.toLowerCase().includes(searchText)
      );
      setWildlife(filteredList);
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={searchItem}
            onKeyDown={handleBackspace}
          />
          <span className="material-symbols-outlined"> search </span>
        </div>
        <div className="cards">
          {wildlife?.map((animal) => (
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
