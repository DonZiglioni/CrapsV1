import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </>
  )
}

export default App
