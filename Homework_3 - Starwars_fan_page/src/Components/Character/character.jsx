import { Component } from "react";
import "./character.css"

export class Character extends Component{

    render() {
        const { name, height, gender, birth_year } = this.props.character;
    
        return (
          <div>
            <h2>Name:{name}</h2>
            <p>Height: {height}</p>
            <p>Gender: {gender}</p>
            <p>Birth Year: {birth_year}</p>
          </div>
        );
      }
}