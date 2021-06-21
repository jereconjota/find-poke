import React from "react";
import PokeCard from "./poke-card.js";

class SimilarPoke extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h5>Similar Pokemons</h5>
                <hr/>
                <div className="row mb-5">
                    {/* {this.props.data.map((pokemon, i) => {
                        let url = `https://pokeres.bastionbot.org/images/pokemon/25.png`;
                        return <PokeCard img={url} nombre={pokemon.name} key={i} />;
                    })} */}
                    {this.props.data?.pokemon &&
                    this.props.data.pokemon
                        .slice(0, 4)
                        .filter((pokemon, i) => {
                            if (pokemon.pokemon.name === this.props.namePokemon) {
                                return false;
                            }
                            return true;
                        })
                        .slice(0, 4)
                        .map((pokemon, i) => {
                            let urlImg = pokemon.pokemon.url.slice(0, -1);
                            let id = urlImg.slice(urlImg.lastIndexOf('/') + 1);
                            // let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                            let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
                            return <PokeCard img={url} nombre={pokemon.pokemon.name} id={pokemon.id} key={i} />;
                        })}
                </div>
            </React.Fragment>
        );
    }
}

export default SimilarPoke;
