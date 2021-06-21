import React, { Component } from 'react';
import PokeCard from './poke-card.js';
import Loading from './loading';
import Error from './error';

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      results: [],
      id: 0,
      types: [
        {
          slot: 0,
          type: {
            name: '',
          },
        },
      ],
    },
    pokemonData: {
      id: 0,
      pokemon: [
        {
          pokemon: {
            name: '',
            url: '',
          },
        },
      ],
    },
  };
  // componentDidMount() {
  //     this.fetchData("https://pokeapi.co/api/v2/pokemon?limit=50&offset=100");
  // }
  componentWillReceiveProps(e) {
    // let termino = this.props.busqueda
    let termino = e.busqueda;
    this.otroFetchData('https://pokeapi.co/api/v2/pokemon/' + termino);
  }

  //hace el fetch en primera instancia para obtener los datos del pokemon de la busqueda
  //con el dato del tipo de ese pokemon vuelve a hacer otro fetch para obtener pokemones de ese tipo

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      console.log('error');
      this.setState({
        error: true,
        errorMensaje: data.message,
        loading: false,
      });
    } else {
      this.setState({
        data: data,
        error: false,
        loading: false,
      });
      const response2 = await fetch('https://pokeapi.co/api/v2/type/' + data.types[0].type.name);
      const data2 = await response2.json();
      if (data2.error) {
        this.setState({
          error: true,
          errorMensaje: data.message,
        });
      } else {
        const data3 = data2;
        data3.pokemon = data2.pokemon.filter((pokemon, i) => {
          let urlImg = pokemon.pokemon.url.slice(0, -1);
          let id = urlImg.slice(urlImg.lastIndexOf('/') + 1);
          return id <= 300;
        });
        // data3.pokemon = data3.pokemon.filter((pokemon, i) => data3.pokemon.indexOf(pokemon) === i)
        data3.pokemon = data3.pokemon.map((pokemon, i) => {
          return data3.pokemon[Math.floor(Math.random() * data3.pokemon.length)];
        });
        this.setState({
          loading: false,
          error: false,
          pokemonData: data3,
        });
      }
    }
  };

  otroFetchData = (url) => {
    this.setState({
      loading: true,
    });
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
          error: false,
          loading: false,
        });

        const response2 = fetch('https://pokeapi.co/api/v2/type/' + res.types[0].type.name);
        const data2 = response2.json();
        if (data2.error) {
          this.setState({
            error: true,
            errorMensaje: res.message,
          });
        } else {
          const data3 = data2;
          data3.pokemon = data2.pokemon.filter((pokemon, i) => {
            let urlImg = pokemon.pokemon.url.slice(0, -1);
            let id = urlImg.slice(urlImg.lastIndexOf('/') + 1);
            return id <= 300;
          });
          // data3.pokemon = data3.pokemon.filter((pokemon, i) => data3.pokemon.indexOf(pokemon) === i)
          data3.pokemon = data3.pokemon.map((pokemon, i) => {
            return data3.pokemon[Math.floor(Math.random() * data3.pokemon.length)];
          });
          this.setState({
            loading: false,
            error: false,
            pokemonData: data3,
          });
        }
      })
      .catch((error) => {
        console.log('DIO ERROR');
        this.setState({
          error: true,
          errorMensaje: error.message,
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading></Loading>}
        {this.state.error && <Error errorMessage={this.state.errorMensaje}></Error>}
        <div className="container">
          <div className="d-flex justify-content-center align-item-center mb-5">
            {this.state.data && (
              <PokeCard
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.state.data.id}.png`}
                nombre={this.state.data.name}
                id={this.state.data.id}
              />
            )}
          </div>
          <div className="text-center">
            <h3>Type: {this.state.data.types[0].type.name}</h3>
          </div>
          <div className="row mt-2 mb-5">
            {this.state.pokemonData?.pokemon &&
              this.state.pokemonData.pokemon
                .filter((pokemon, i) => {
                  if (pokemon.pokemon.name === this.state.data.name) {
                    return false;
                  }
                  return true;
                })
                .filter((pokemon, i) => this.state.pokemonData.pokemon.indexOf(pokemon) === i)
                .slice(0, 12)
                .map((pokemon, i) => {
                  let urlImg = pokemon.pokemon.url.slice(0, -1);
                  let id = urlImg.slice(urlImg.lastIndexOf('/') + 1);
                  // let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
                  return <PokeCard img={url} nombre={pokemon.pokemon.name} id={pokemon.id} key={i} />;
                })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
