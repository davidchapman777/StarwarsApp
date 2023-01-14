import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CharacterProvider } from './context/charactersContext';
import { ShipsProvider } from './context/shipsContext';
import { PlanetsProvider } from './context/planetsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlanetsProvider>
      <ShipsProvider>
        <CharacterProvider>
         <App />
        </CharacterProvider>
      </ShipsProvider>
    </PlanetsProvider>
  </React.StrictMode>
);


