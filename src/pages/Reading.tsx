import { useState } from "react";
import { arcanos } from "../data/arcanos";
import type { Arcano } from "../types/Arcano";
import TarotBoard from "../components/TarotBoard";
import "../App.css";

export default function Reading() {
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