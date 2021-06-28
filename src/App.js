import React from 'react';
import Header from "./components/Header";
import TopBanner from './components/TopBanner';
import Service from './components/Service';
import HappyClient from './components/HappyClient';
import DailyCost from './components/DailyCost';
import BusinessValue from './components/BusinessValue';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <TopBanner />
      <Service />
      <HappyClient />
      <DailyCost />
      <BusinessValue />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
