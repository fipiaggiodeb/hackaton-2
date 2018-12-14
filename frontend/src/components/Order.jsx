import React from "react";
import { Link } from "react-router-dom";

export default class Order extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <nav>
                <p>Nuevo pedido</p>
                <Link to="/">Volver</Link>
            </nav>
        )
    }
}