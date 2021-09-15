import React from "react";
import '../styles/App.css';
import { Link } from "react-router-dom";

function Gatos() {
    return (
        <React.Fragment>
            <ul className="nav">
                <li><Link to="/">Home <span>🏠</span></Link></li>
                <li><Link to="/Gatos">Gatos <span>🐱</span></Link></li>
                <li><Link to="/Perros">Perros <span>🐶</span></Link></li>
            </ul>
            <h1>Tenemos</h1>
            <h2>Muchos miaumiaus</h2>
            <p className="emojis" >🐱🐱🐱🐱🐱🐱🐱🐱🐱</p>
        </React.Fragment>
    )
}

export default Gatos;