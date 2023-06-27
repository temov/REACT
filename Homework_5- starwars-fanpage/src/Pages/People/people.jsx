import { useState, useEffect } from "react";
import { Charactercard } from "../../Components/Character_Card/Charactercard";

export const People = ()=>{

    

    const[people,setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");
    const URL = `https://swapi.dev/api/people/?page=${page}`;

    const fetchPeople = async ()=>{

        try {
            const response = await fetch(URL);
            const result = await response.json()
            console.log("RESULT:", result);
            setPeople(result.results);
            
        } catch (error) {
            setErrorMessage(error.message);
            throw new Error(error);
        }
    };
    useEffect(() => {
       
        if (people.length > 0) return;
        fetchPeople();
      }, [page]);

      const handleNextPage = () => {
        setPage(page + 1);
      };
    
      const handlePreviousPage = () => {
        if (page > 1) {
          setPage(page - 1);
        }
      };

    return (

        <div>
            <h1>Star Wars Characters</h1>
            {people.map((character) => (
            <Charactercard key={character.name} character={character} />
            ))}
            <div>
                <button onClick={handlePreviousPage}>Previous</button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>

    );
}