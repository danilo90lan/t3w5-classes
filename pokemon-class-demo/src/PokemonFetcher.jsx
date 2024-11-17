import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

//const pokemonList = ['pikachu', 'ditto', 'mew', 'charmander'];

export default class PokemonFetcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: []
        }
    }
    // override the method for updating the component's state
    async componentDidMount() {
        // generate a random pokemon ID
        const randomID = Math.ceil(Math.random() * 1025);
        // pass the random pokemon number to fetch
        let response = await fetch(`http://pokeapi.co/api/v2/pokemon/${randomID}`);
        let data = await response.json();
        // set fetch response data to the state in array data
        this.setState({pokemonList: [data.name]});
    }
    
    
    
    render() {
        return (
            <div>
                <h1>Pokemon Data</h1>
                {
                    this.state.pokemonList.map((pokemon, index) => {
                        return <PokemonCard name={pokemon} key = {index}/>
                    })
                }
                <button onClick={() => this.setState({pokemonList: []})}>
                    Empty the state</button>
            </div>

        )
    }
}