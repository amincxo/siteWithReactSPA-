import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import { Route, Routes , Navigate } from 'react-router-dom';
import DetailPage from './components/DetailPage';
import Programer from './components/Programer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes >
            <Route path='/products'  element={<Products />} />
            <Route path='/products/:id'  element={<DetailPage />} />
            <Route path='/aboutus/*'  element={<AboutUs />} >
                <Route path= "programer" element={<Programer />}/>
                <Route path= "driver" element={<h1> driver </h1>}/>
            </Route>
            <Route path='/notfound'  element={<NotFound />} />
            <Route path='/*' element={<Navigate to='/notfound' />} />
            <Route path="/" element={<LandingPage />}  />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
