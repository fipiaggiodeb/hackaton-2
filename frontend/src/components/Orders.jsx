import React from "react";
import { Link } from "react-router-dom";

export default class Orders extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <nav>
                <p>Todos los pedidos</p>
                <Link to="/">Volver</Link>
            </nav>
        )
    }
}