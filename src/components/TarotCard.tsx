import type { Arcano } from "../types/Arcano";

type TarotCardProps = {
    carta: Arcano | null;
};

function TarotCard({carta}:TarotCardProps){
    return(
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
    )
    
}

export default TarotCard