import React from "react";
import "./page-home.css";
import logo from "./find-poke.png";
import ReactDOM from "react-dom";
import Modal from "./components/modal"

class PageHome extends React.Component {
    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.history.push("/busqueda?"+ this.state.busqueda)
    }
    onChange = (e)=> {
        this.setState({
            busqueda: e.target.value
        })
    }
    state = {
        busqueda: "",
        modal: false
    }
    handleClick = (e)=>{
        e.preventDefault()
        this.setState({
            modal: true
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row centrado">
                    <div className="col-md-6 centrar">
                        <img src={logo} alt="" className="logo-barra" id="logo" />
                        <form className="form-inline" onSubmit={this.handleSubmit} name="form">
                            <div className="busqueda">
                                <input
                                    name="busqueda"
                                    type="text"
                                    id="buscar"
                                    value={this.props.busqueda}
                                    placeholder="Busca un pokemon"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="actions">
                                <button className="btng" type="submit">Search Similar Pokemon</button>
                                <button className="btng" onClick={this.handleClick}>Pokemon</button>
                            </div>
                        </form>
                    </div>
                </div>
                {ReactDOM.createPortal(
                    <Modal estado = {this.state.modal}>
                        <h3>Aguante BOCA</h3>
                    </Modal>,
                    document.getElementById('teleport')
                )}
            </div>
        );
    }
}
export default PageHome;
