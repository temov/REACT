import { useState, useEffect } from "react";
import { Charactercard } from "../../Components/Character_Card/Charactercard";

export const People = ()=>{

    

    const[people,setPeople] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');

    const fetchPeople = async (url)=>{

     

        try {
            const response = await fetch(url || 'https://swapi.dev/api/people/');
            const result = await response.json()
            console.log("RESULT:", result);
            setPeople(result.results);
            setNextPage(result.next);
            setPreviousPage(result.previous);
            
        } catch (error) {
            throw new Error(error);
        }
    };
    useEffect(() => {
       
        if (people.length > 0) return;
        fetchPeople();
      }, []);

      const handleNextPage = () => {
        if (nextPage) {
          fetchPeople(nextPage);
        }
      };
    
      const handlePreviousPage = () => {
        if (previousPage) {
          fetchPeople(previousPage);
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