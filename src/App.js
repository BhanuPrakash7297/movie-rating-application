
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter, Navigate } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/index';
import MovieDetail from './components/MovieDetails/MovieDetail'
import Footer from './components/Footer/index'
import PageNotFound from './components/PageNotFound/index'
import './App.scss'
function App() {

  return (
    <div className='app'>


      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Navigate to='/Home' replace />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/movie/:imdbId' element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
