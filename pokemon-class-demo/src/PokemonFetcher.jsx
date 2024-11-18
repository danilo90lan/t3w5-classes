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
        for (let i = 0; i < 6; i++) {
            // generate a random pokemon ID
            const randomID = Math.ceil(Math.random() * 1025);
            // pass the random pokemon number to fetch
            let response = await fetch(`http://pokeapi.co/api/v2/pokemon/${randomID}`)
            let data = await response.json();
            // method 1 to fetch 6 pokemon with spread operator
            this.setState({ pokemonList: [...this.state.pokemonList, data.name] });
            //method 2 to fetch 6 pokemon
            // retreive the previous state and append the new state
            this.setState(previousState => {
                return { pokemonList: [...previousState.pokemonList, data.name] }
            });
        }

    }






    render() {
        return (
            <div>
                <h1>Pokemon Data</h1>
                {
                    this.state.pokemonList.map((pokemon, index) => {
                        return <PokemonCard name={pokemon} key={index} />
                    })
                }
                <button onClick={() => this.setState({ pokemonList: [] })}>
                    Empty the state</button>
            </div>

        )
    }
}