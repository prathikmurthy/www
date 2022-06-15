import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loader from './components/loader.js'
import Hero from './components/sections/hero.js'
import About from './components/sections/about.js'
import MainProject from './components/MainProject.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div >
    <Loader />
    <Hero />
    </div>
  </React.StrictMode>
);

