import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Reading from "./pages/Reading";
import Deck from "./pages/Deck"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/deck" element = {<Deck/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/* import { useState } from "react";
import { arcanos } from "./data/arcanos";
import type { Arcano } from "./types/Arcano";
import TarotBoard from "./components/TarotBoard";import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Reading from "./pages/Reading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<Reading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import "./App.css";

function App() {
  const [carta, setCarta] = useState<Arcano | null>(null);

  const lanzarCarta = () => {
    const randomIndex = Math.floor(Math.random() * arcanos.length);
    setCarta(arcanos[randomIndex]);
  };

  return (
    <div className="tablero">
      <h1>Cyber Tarot</h1>

      <TarotBoard
        carta={carta}
        lanzarCarta={lanzarCarta}
      />
    </div>
  );
}

export default App; */