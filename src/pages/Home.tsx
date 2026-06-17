import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
        <h1>Tarot</h1>

        <Link to="/reading">
            Comenzar lectura
        </Link>
        </div>
    );
}