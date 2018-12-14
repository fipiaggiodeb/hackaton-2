import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Order, Orders } from './components';
import "antd/dist/antd.css";

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const App = () => (
    <Router>
        <main className="main-wrapper">
            <Route path="/" exact component={Home} />
            <Route path="/nuevo-pedido" component={Order} />
            <Route path="/pedidos" component={Orders} />
        </main>
    </Router>
);

export default App;