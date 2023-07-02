import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";

export const SingleCharacter = ()=>{
    const[singleCharacter,setsingleCharacter] = useState(null);
    const [homeWorld, setHomeworld] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    console.log("PARAMS:", params);

    const id = params.id;

    const fetchSingleCharacter = async () => {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        const result = await response.json();
        console.log("Result of single character", result);
       
        setsingleCharacter(result);
       
      };

     const fetchCharacterHomeworld = async () =>{

    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const result = await response.json();
    const homeworldResponse = result.homeworld;
    const fetchHomeworld = await fetch(homeworldResponse);
    const resultHomeworld = await fetchHomeworld.json()
    console.log("Result of a homeworld", result.homeworld);
    setHomeworld(resultHomeworld);
        
    };
    
      useEffect(() => {
        fetchSingleCharacter();
        fetchCharacterHomeworld()
        
        
      }, []);

           

      return(
        <div>
            <h3>Single character component</h3>
            
            {
                singleCharacter?(
                    <div>

                        <p>{singleCharacter.name}</p>
                        <p>{singleCharacter.height}</p>
                        <p>{singleCharacter.gender}</p>
                        <p>{singleCharacter.birth_year}</p>
                       
                    </div>
                     
                ):(<h2>Loading...</h2>)
            }
            {
                homeWorld ? (
                    <div>
                        <h3>Homeworld property</h3>
                        <p>Name: {homeWorld.name}</p>
                        <p>Diameter: {homeWorld.diameter}</p>
                        <p>Climate: {homeWorld.climate}</p>
                        <p>Gravity: {homeWorld.gravity}</p>
                        <p>Terrain: {homeWorld.terrain}</p>
                        <p>Population: {homeWorld.population}</p>
                    </div>
                ):(<h2>Loading...</h2>)
            }
            <div  style={{
                cursor: "pointer",
                backgroundColor: "aliceblue",
                padding: "10px",
                width: "fit-content",
                border: "1px solid grey",
                borderRadius: "5px",
                }}
                onClick={() => navigate(-1)}>
                Back
            </div>
        </div>
      );

};