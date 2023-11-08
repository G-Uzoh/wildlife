import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Home from './Home';

function App() {

  return (
    <>
      <Header />
      <main>
        {/* <div className='search-bar'>
          <input type='text' placeholder='Search' />
          <span className="material-symbols-outlined"> search </span>
        </div>
        <div className="cards">
          <Card />
        </div> */}
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
