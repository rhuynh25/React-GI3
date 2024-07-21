import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieSearch from './MovieSearch';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
