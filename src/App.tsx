import { useState } from "react";
import { arcanos } from "./data/arcanos";
import type { Arcano } from "./types/Arcano";
import './App.css'

function App() {
  const [carta, setCarta] = useState<Arcano | null>(null);

  const lanzarCarta = () => {
    const randomIndex = Math.floor(Math.random() * arcanos.length);
    setCarta(arcanos[randomIndex]);
  };

  return (
    <div className="tablero">
      <h1>Tarot</h1>
      
      <div className="container">
        <div className="board">
        {carta ?
          <div>
            <img 
              src={carta.imagen} 
              alt={carta.nombre}
              className="carta"
            />
          </div>
        :
          <img src="/images/reverso.png" alt="" className="carta" />
        }
      </div>
      <div  className="info">
        {carta ?
          <div>
            <h2>{carta.nombre}</h2>
            <p>{carta.significado}</p>
          </div>
        :
          <p>Silencio la señal y abro el canal, que caiga el velo y hable lo oculto, sin miedo y sin filtro, solo verdad.</p>  
        }
        <button onClick={lanzarCarta}>
        Suerte
        </button>
      </div>
    </div>  
  </div>
  );
}

export default App;
