import "./Charactercard.css";
import { useNavigate } from "react-router";

export const Charactercard = (props)=>{

    const { character} = props;

    const navigate = useNavigate();

    return(
        <div className="card">
            <h3>{character.name}</h3>
            <div>
                <button onClick={() => navigate('/character/'+ character.id)}>
                View Details
                </button>
                <button>Add to cart</button>
            </div>


        </div>
    );

};

