
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent'

function App() {

  // return (
  //   <div className="flex flex-col min-h-screen">
  //     <Navbar />
  //     <div className="flex flex-1">
  //       {/* Sidebar - Hidden on small screens, visible with toggle
  //       <aside className="hidden md:block w-1/6 p-4 bg-white shadow-md">
  //         <Sidebar />
  //       </aside> */}
  //       <Sidebar/>
  //       <main className="flex-1 p-2 sm:p-4">
  //         <MainContent />
  //       </main>
  //     </div>
  //     <footer className="mt-auto p-2 sm:p-4 bg-white shadow-inner">
  //       <Footer />
  //     </footer>
  //   </div>
  // );

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

