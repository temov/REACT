import { Component } from "react";
import { Character } from "../Character/character.jsx";
import './characterspage.css'

export class CharactersPage extends Component {

    URL = "https://swapi.dev/api/people";

    constructor(props) {
        super(props)

        this.state = {
            characters: []
        }
    }

    handleFetchCharacters = async () => {
        const response = await fetch(this.URL);
        const result = await response.json();

        console.log(result);

        this.setState({

            characters: result.results,
        })

    }

    componentDidMount() {

        this.handleFetchCharacters();
    }

    render() {

        return (

            <>


                <h1>SW characters</h1>
                <div>


                    {this.state.characters.map((character) => {
                        

                        return <Character key={character.name} character={character} />

                    })}

                </div>

            </>
        );
    }
}