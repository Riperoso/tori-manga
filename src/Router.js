import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MangaDetails from './pages/MangaDetails';

function Router() {
  return (
    <Routes>
      <Route element={ <MangaDetails /> } path="/manga/:mangaId" />
      <Route element={ <Home /> } path="/" exact />
    </Routes>
  );
}

export default Router;
