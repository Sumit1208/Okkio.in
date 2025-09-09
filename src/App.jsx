import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import { CartProvider } from './context/CartContext';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
// import Home from './components/Home';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<div className="block md:flex flex-1">
                <Sidebar />
                <MainContent />
              </div>
            } />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;