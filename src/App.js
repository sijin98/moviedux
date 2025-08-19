import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="header">
       <h1 style={{color:"red"}}> Welcome to Moviedux</h1>
      </header>
      <div className="container">
      <Header/>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/watchlist">Watch List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<MoviesGrid/>}></Route>
          <Route path='/watchlist' element={<WatchList/>}></Route>
        </Routes>
      </Router>
      </div>

      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
