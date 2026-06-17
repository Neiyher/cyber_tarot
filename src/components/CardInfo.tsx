import type { Arcano } from "../types/Arcano";
type TarotCardProps = {
    carta: Arcano | null;
};

export default function CardInfo({carta}:TarotCardProps){


    return(
        <div  className="info">
        {carta ?
            <div>
                <h2>{carta.nombre}</h2>
                <p>{carta.significado}</p>
            </div>
            :
            <p>Silencio la señal y abro el canal, que caiga el velo y hable lo oculto, sin miedo y sin filtro, solo verdad.</p>  
            }
        </div>
    )
}