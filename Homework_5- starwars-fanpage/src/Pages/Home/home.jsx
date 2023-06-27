
import { useState, useEffect } from "react";
import  "./home.css";

export const Home = ()=>{

    

        const URL = "https://swapi.dev/api/films/";

        const[films,setFilms] = useState([]);
        const [errorMessage, setErrorMessage] = useState("");

        const fetchMovies = async ()=>{

            try {
                const response = await fetch(URL);
                const result = await response.json()
                console.log("RESULT:", result);
                setFilms(result.results);
                
            } catch (error) {
                setErrorMessage(error.message);
                throw new Error(error);
            }
        };
        useEffect(() => {
           
            if (films.length > 0) return;
            fetchMovies();
          }, []);

        return (

            <div>
                <h1>Star Wars Films</h1>
                {films.map((film) => (
                <div key={film.episode_id}>
                    <h2>{film.title}</h2>
                    <p>{film.opening_crawl}</p>
                    <p>Director: {film.director}</p>
                    <p>Producer: {film.producer}</p>
                    <p>Release Date: {film.release_date}</p>
                </div>
                ))}
            </div>

        );
    
}