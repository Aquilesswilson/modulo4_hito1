import React, { Component } from 'react'
import Header from './header'
import CardPizza from './CardPizza'

export default class Home extends Component {
    render() {
        return (

            <div>
                <Header />
                <div className='row justify-content-center gap-4 mt-5 mb-5'>
                    <CardPizza
                        name="Napolitana"
                        price={5950}
                        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                    />
                    <CardPizza
                        name="Española"
                        price={6950}
                        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                    />
                    <CardPizza
                        name="Pepperoni"
                        price={6950}
                        ingredients={["mozzarella", "pepperoni", "orégano"]}
                        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                    />
                </div>
            </div>
        )
    }
}
