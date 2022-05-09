import React from 'react';

import './App.css';

import Banner from './banner/Banner';
import Header from './header/Header';
import MainSection from './main-section/MainSection';
import ShoppingCart from './shop/ShoppingCart';
import Nosotros from './nosotros/Nosotros';
import ProductSection from './product-section/ProductSection';
import ContactSection from './contact-section/ContactSection';
import Footer from './footer/Footer';
import Information from './Information-section/Information';


function App() {
  return (
    <>
    <div className="App">
      <Banner/>
      <Header/>
      <MainSection />
      <section className="menu" id="menu">
        <h1 className="heading"><span>Menu</span></h1>
          <ShoppingCart/>
      </section> 
      <Nosotros />
      <ProductSection/> 
      <ContactSection/> 
      <Footer />
      <Information/>
    </div>
    </>
  );
}

export default App;
