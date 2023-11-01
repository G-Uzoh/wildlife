import Header from './Header';
import Footer from './Footer';
import Card from './Card';

function App() {

  return (
    <>
      <Header />
      <main>
        <input type='text' placeholder='Search' />
        <div className="cards">
          <Card />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
