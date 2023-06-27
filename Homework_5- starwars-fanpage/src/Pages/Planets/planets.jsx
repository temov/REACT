
import { useState,useEffect} from "react";

export const Planets = ()=>{

    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        const fetchPlanets = async () => {
          const response = await fetch('https://swapi.dev/api/planets');
          const result = await response.json();
          setPlanets(result.results);
        };
    
        fetchPlanets();
      }, []);

    return (

        <div>
        <h1>Star Wars Planets</h1>
        {planets.map((planet) => (
          <div key={planet.url}>
            <h2>{planet.name}</h2>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
          </div>
        ))}
      </div>
    )
}