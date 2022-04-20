import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import TrendingMovies from './components/TrendingMovies';
import Pagination from './components/Pagination';
import Favourites from './components/Favourites';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<>
        <Banner/>
        <TrendingMovies/>
        <Pagination/>
      </>} />
      <Route path="/favourite" element={<Favourites />} />
    </Routes>
    </BrowserRouter>
    </>
    
    // <---navbar--->
    //<---Banner--->
    //<---Trending Movies--->
    //<---Pagination--->
  );
}

export default App;
