import Navbar from './components/NavbarComp';
import NewsPage from './components/NewsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import LoaderComp from './components/LoaderComp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<NewsPage category='general' />} />
          <Route path='/business' element={<NewsPage category='business' />} />
          <Route path='/entertainment' element={<NewsPage category='entertainment' />} />
          <Route path='/health' element={<NewsPage category='health' />} />
          <Route path='/science' element={<NewsPage category='science' />} />
          <Route path='/sports' element={<NewsPage category='sports' />} />
          <Route path='/technology' element={<NewsPage category='technology' />} />


          <Route path='/loader' element={<LoaderComp />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
