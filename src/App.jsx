import { animals, birds, fishes, insects } from "./animalsList";
import About from "./routes/About";
import Home from "./routes/Home";
import Root from "./routes/Root";
import SpeciesCategoryPage from "./routes/SpeciesCategoryPage";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/SinglePage";

function App() {
  const [wildlife, setWildlife] = useState({
    animals: animals,
    birds: birds,
    fishes: fishes,
    insects: insects,
  });
  const [search, setSearch] = useState("");
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      window.scrollY > 300 ? setShowScrollBtn(true) : setShowScrollBtn(false);
    };

    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuToggle = () => {
    setIsOpen((open) => !open);
  }

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
      element: (
        <Root
          isOpen={isOpen}
          handleMenuToggle={handleMenuToggle}
          clearSearchBar={clearSearchBar}
        />
      ),
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
              showScrollBtn={showScrollBtn}
              handleScrollToTop={handleScrollToTop}
            />
          ),
        },
        {
          path: ":species/:name",
          element: <SinglePage {...wildlife} />,
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
