import { Link } from "react-router-dom";

export default function Deck() {
    return (
        <div>
            <h1>Deck</h1>

            <Link to="/reading">
                Comenzar lectura
            </Link> 
        </div>
    );
}