import React from "react";

class Academy extends React.Component{
    
    render(){

        const { academy } = this.props;
        return(

        <div>
            <h3>{academy.name}</h3>
            <p>{academy.description}</p>
        </div>
        )
    }
}

export default Academy;