
import './App.css';

// bootstrap import link
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navbar from "./components/Navbar.js";

// pages
import Banner from "./Pages/Banner.js";
import Banner_About from './Pages/Banner_About.js';
import Products from './Pages/Products.js';
import Collection from './Pages/Collection.js';
import Reviews from './Pages/Reviews.js';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route excat path="/" element={<Banner />} />
            <Route path='/banner_about' element={<Banner_About/>} />
            <Route path='/product_collection' element={<Products/>} />
            <Route path='/collection' element={<Collection/>} />
            <Route path='/review' element={<Reviews/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
