import React from 'react';
import Header from './components/Header';
import ProductsList from './features/Products/ProductsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsList />
    </div>
  );
}

export default App;