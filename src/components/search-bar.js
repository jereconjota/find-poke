import React from "react";
import "./search-bar.css";
import logo from "../find-poke.png";
import { Link } from "react-router-dom";
class SearchBar extends React.Component {
    state={
        busqueda: ""
    }
    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
                busqueda : e.target.value
        })
    };
    handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.name, " me dieron click");
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name, " enviaste el form");
    };
    render() {
        return (
            <React.Fragment>
                {/*** FORM CON BOOTSTRAP ***/}
                {/* <div className="container-fluid">
                    <div className="row mt-1">
                        <div className="col-md-2">Logo</div>
                        <div className="col-md-4">
                            <form className="form-inline" onSubmit={this.handleSubmit} name="form">
                                <div className="form-group mx-sm-3 mb-2">
                                    <label htmlFor="password" className="sr-only">Text</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="password"
                                        placeholder="Buscar Pokemon"
                                        onChange={this.handleChange}
                                        name="inputForm"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primmary mb-2" name="boton"
                                // onClick={this.handleClick}
                                >
                                    Buscar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr/> */}

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Link to="/">
                            <img src={logo} alt="" className="logo-barra" />
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <form className="form-inline" onSubmit={this.handleSubmit} name="form">
                                <div className="busqueda">
                                    <input
                                        name="busqueda"
                                        type="text"
                                        id="buscar"
                                        value={this.props.busqueda}
                                        placeholder="Busca una banda"
                                        onChange={this.props.onChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr className="mt-2"/>
            </React.Fragment>
        );
    }
}

export default SearchBar;
