import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <nav>
                <p>Home</p>
                <Link to="/nuevo-pedido/">Nuevo pedido</Link>
                <Link to="/pedidos/">Pedidos</Link>
            </nav>
        )
    }
}