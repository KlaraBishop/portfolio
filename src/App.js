import React from 'react'
import './styles/App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import TopNavbar from './components/TopNavbar/top-navbar';

const App = () => {
  return <div>
    <TopNavbar />
    <Navbar />
    <Content />    
  </div>
}

export default App;
