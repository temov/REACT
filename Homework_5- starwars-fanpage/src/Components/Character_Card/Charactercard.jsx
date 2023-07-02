import "./Charactercard.css";
import { useNavigate } from "react-router";

export const Charactercard = (props)=>{

    const { character} = props;

    const navigate = useNavigate();

    return(
        <div className="card" key={character.name}>
            <h3>{character.name}</h3>
            <div>
                <button onClick={() => navigate(`/character/${character.url.split('/')[5]}`)}>
                View Details
                </button>
                <button>Add to cart</button>
            </div>


        </div>
    );

};

