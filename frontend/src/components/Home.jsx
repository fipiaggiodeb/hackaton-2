import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Button } from 'antd';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <Layout>
                <Row type="flex" align="middle" justify="center" className={"full-height"}>
                    <Col span={12} className={"text-center"}>
                        <img src="https://www.fillmurray.com/200/300" alt="market" className="img-responsive"/>
                        <h1>debMarket</h1>
                        <Button type="primary" className={"primary-deb-button"}>
                            <Link to="/nuevo-pedido/">Nuevo pedido</Link>
                        </Button>
                        <Link to="/pedidos/" className={"list-link"}>Pedidos</Link>
                    </Col>
                </Row>
                <style jsx={"true"}>{`
                  h1{
                    margin: .4em 0;
                  }
                  .list-link {
                    display: inline-block;
                    margin: 1em 0;
                  }
                `}</style>
            </Layout>
        )
    }
}