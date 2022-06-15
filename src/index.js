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
    {/* <h1 class="text-black text-3xl font-bold">Hello World</h1> */}
    <div class="pl-36">
    <Loader />
    <Hero />
    </div>
  </React.StrictMode>
);

