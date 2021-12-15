import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Recipe from './pages/Recipe';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Categories />} />
        <Route path="/Meals/:category" caseSensitive={false} element={<Meals />} />
        <Route path="/Recipe/:id" caseSensitive={false} element={<Recipe />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
