import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Order, Orders, Categories } from './components';
import "antd/dist/antd.css";
import './App.css';

const App = () => (
    <Router>
        <main className="main-wrapper">
            <Route path="/" exact component={Home} />
            <Route path="/nuevo-pedido" component={Order} />
            <Route path="/categorias" component={Categories} />
            <Route path="/pedidos" component={Orders} />
        </main>
    </Router>
);

export default App;