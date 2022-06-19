import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loader from './components/loader.js'
import Hero from './components/sections/hero.js'
import About from './components/sections/about.js'
import MainProject from './components/MainProject.js'
import Footer from './components/sections/Footer.js'
import FadeInSection from './components/FadeInSection.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="2xl:pl-96 2xl:pt-64 md:pl-32 md:pt-40 pt-32 pr-8 pl-12">
    <Loader />
    <Hero />
    <About />
    <Footer />
    </div>
  </React.StrictMode>
);

