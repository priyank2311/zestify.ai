import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ChooseUs from './components/ChooseUs';
import Expertise from './components/Expertise';
import Products from './components/Products';
import Market from './components/Market';
import Blog from './components/Blog';
import Refer from './components/Refer';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <ChooseUs />
      <Expertise />
      <Products />
      <Market />
      <Blog />
      <Refer />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
