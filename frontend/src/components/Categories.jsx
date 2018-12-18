import React from "react";
import { Link } from "react-router-dom";
import { Layout, List, Button, Icon } from 'antd';

export default class Categories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [
                {
                    id: 1,
                    name: "Categoría 1",
                    description: "Una categoría de prueba"
                },
                {
                    id: 2,
                    name: "Categoría 2",
                    description: "Otra categoría de prueba"
                }
            ]
        }
    }

    goToCategory(id){
        this.props.history.push(`/nuevo-pedido/${id}`);
    }


    componentDidmount(){
        // todo: request categories
    }

    render(){
        return(
            <Layout className={"full-height d-flex centered"}>
                <h1>Seleccionar categoría</h1>
                <List
                    size="large"
                    bordered
                    dataSource={this.state.categories}
                    renderItem={item => (
                        <List.Item onClick={() => this.goToCategory(item.id)}>
                            <List.Item.Meta title={item.name} description={item.description} />
                            <Button> Ver Productos <Icon type="right" /> </Button>
                        </List.Item>

                    )}
                />
                <Button type="primary" className={"primary-deb-button back"}>
                    <Link to="/">Volver</Link>
                </Button>
                <style jsx={"true"}>{`
                    .back{
                        max-width: 200px;
                        margin: 1em;
                    }
                `}</style>
            </Layout>
        )
    }
}