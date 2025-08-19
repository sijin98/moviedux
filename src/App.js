import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';

function App() {
  return (
    <div className="App">
      <header className="header">
       <h1 style={{color:"red"}}> Welcome to Moviedux</h1>
      </header>
      <div className="container">
      <Header/>
      <MoviesGrid/>
      </div>

      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
