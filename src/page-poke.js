import React, { Component } from 'react';
import SearchBar from './components/search-bar.js';
import './page-poke.css';
import SimilarPoke from './components/similar-poke';
import Loading from './components/loading';
import Error from './components/error';

class PagePoke extends Component {
    state = {
        busqueda: '',
        loading: false,
        error: null,

        data: {
            name: '',
            id: '',
        },
        pokemonData: {
            results: [],
        }

    };
    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    componentWillUpdate(prevProvs) {
        // console.log(prevProvs)
    }
    componentDidMount() {
        let pokemonName = this.props.history.location.search.substr(1);
        console.log('url: ', pokemonName);
        this.fetchData('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
    }

    fetchData = async (url) => {
        this.setState({
            loading: true,
        });
        const response = await fetch(url);
        const data = await response.json();
        if (data.error) {
            this.setState({
                loading: false,
                error: true,
                errorMensaje: data.message,
            });
        } else {
            this.setState({
                loading: false,
                data: data,
                error: false,
            });
            const response2 = await fetch('https://pokeapi.co/api/v2/type/' + data.types[0].type.name);
            const data2 = await response2.json();
            if (data2.error) {
                this.setState({
                    error: true,
                    errorMensaje: data.message,
                });
            } else {
                this.setState({
                    loading: false,
                    pokemonData: data2,
                    error: false,
                });
            }
        }
    };

    render() {
        return (
            <React.Fragment>
                <SearchBar onChange={this.changeHandle} busqueda={this.state.busqueda} />
                {this.state.loading && <Loading></Loading>}
                {this.state.error && <Error errorMessage={this.state.errorMensaje}></Error>}
                <div className="container text-center">
                    <div className="row mb-5">
                        {console.log('pokemondata: ',this.state?.pokemonData)}
                        <div className="col-md-12 ">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.state.data.id ? this.state.data.id : 25}.png`}
                            alt="" className="pic-poke mt-5" />
                            {/* <h3 className="mt-4">{this.state.data.results[0].name}</h3> */}
                            <h3 className="mt-4">{this.state.data.name}</h3>
                            <p className="mt-3">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eligendi iste dolore
                                voluptates necessitatibus earum at, quam amet, obcaecati quisquam quod culpa veniam
                                autem quae blanditiis, dolorem ex perspiciatis accusamus! Molestiae incidunt debitis ab
                                quaerat nostrum voluptatum neque voluptate, illum veniam accusamus, odit voluptatibus
                                culpa numquam necessitatibus hic architecto quia. Necessitatibus itaque obcaecati
                                aspernatur dolorum nam tenetur repudiandae repellendus magni. Ipsum deserunt et minus ut
                                nesciunt, saepe autem labore commodi officia veniam, reprehenderit facilis ad quasi
                                doloribus nihil aspernatur accusantium accusamus. Quia facere repudiandae aut dolorem
                                corrupti culpa! Saepe, ad!
                            </p>
                        </div>
                    </div>
                    <SimilarPoke data={this.state.pokemonData} namePokemon={this.state.data.name}></SimilarPoke>
                </div>
            </React.Fragment>
        );
    }
}

export default PagePoke;
