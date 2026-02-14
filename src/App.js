import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Preview from './pages/Preview';
import Proof from './pages/Proof';
import Navigation from './components/Navigation';

function AppContent() {
  const location = useLocation();
  const showNav = location.pathname !== '/';

  return (
    <>
      {showNav && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/proof" element={<Proof />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
