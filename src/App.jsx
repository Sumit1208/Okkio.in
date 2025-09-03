
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="block md:flex flex-1">
         <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;

