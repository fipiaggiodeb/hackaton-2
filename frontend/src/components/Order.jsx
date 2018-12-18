import React from "react";
import { Link } from "react-router-dom";
import { Layout, List, Button } from 'antd';

const mockData = [];
for (let i = 0; i < 23; i++) {
    mockData.push({id: i, name: "Producto " + i});
};

export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    goToCategory(id){
        this.props.history.push(`/nuevo-pedido/${id}`);
    }


    componentDidmount(){
        // todo: request categories
        this.setState({products: mockData});
    }

    render(){
        return(
            <Layout className={"full-height d-flex centered"}>
                <h1>Realizar pedido</h1>
                <List
                    size="large"
                    bordered
                    className={"product-list"}
                    dataSource={mockData}
                    renderItem={item => (
                        <List.Item onClick={() => this.goToCategory(item.id)}>
                            <List.Item.Meta title={item.name} />
                        </List.Item>

                    )}
                />
                <Button type="primary" className={"primary-deb-button back"}>
                    <Link to="/">Volver</Link>
                </Button>
                <style jsx={"true"}>{`
                    .product-list{
                        width: 100%;
                        margin: 0 1em;
                    }
                    .back{
                        max-width: 200px;
                        margin: 1em;
                    }
                `}</style>
            </Layout>
        )
    }
}