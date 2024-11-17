import React from "react";
// You can safely remove the constructor, as React automatically handles props for you:
// Don't need to call the super constructor
export default class PokemonCard extends React.Component{ 
    render()  {
        return <h1>{this.props.name}</h1>
    }
}