import TarotCard from "./TarotCard";
import CardInfo from "./CardInfo";
import type { Arcano } from "../types/Arcano";

type TarotBoardProps = {
    carta: Arcano | null;
    lanzarCarta: () => void;
};

export default function TarotBoard({carta,lanzarCarta,}: TarotBoardProps) {

    return (
        <div className="container">
        <div className="board">
            
            <TarotCard carta={carta} />
            
        </div>

        <div className="info">
            <CardInfo carta={carta} />

            <button onClick={lanzarCarta}>
            Suerte
            </button>
        </div>
        </div>
    );
}