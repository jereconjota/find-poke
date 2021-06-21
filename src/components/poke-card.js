import React from "react";
import "./poke-card.css";
import { Link } from "react-router-dom";


class PokeCard extends React.Component {
    state = {
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-3 d-flex justify-content-center">
                    {/* <Link to={"/pokemon?"+this.props.nombre}> */}
                    <Link to={"/pokemon?"+this.props.nombre}>
                        <div className="item text-center">
                            <img className="img-fluid pic" src={this.props.img} alt="" />
                            <p className="titulo mt-2">{this.props.nombre}</p>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default PokeCard;
