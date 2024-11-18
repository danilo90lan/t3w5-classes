import React, {Component} from "react";
// You can safely remove the constructor, as React automatically handles props for you:
// Don't need to call the super constructor
export default class PokemonCard extends React.Component{ 
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name
        }
    }

    render()  {
        return <h1>{this.state.name}</h1>
    }

    componentWillUnmount() {
        console.log("Pokemon card removed " + this.state.name);
    }
}