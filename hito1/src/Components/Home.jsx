import React, { Component } from 'react'
import Header from './header'
import CardPizza from './CardPizza'
import { pizzas } from '../assets/js/pizzas'

export default class Home extends Component {
    render() {
        return (

            <div>
                <Header />
                <div className='row justify-content-center gap-4 mt-5 mb-5'>
                    {pizzas.map(pizza =>
                        <CardPizza
                            key={pizza.id}
                            desc={pizza.desc}
                            img={pizza.img}
                            ingredients={pizza.ingredients}
                            name={pizza.name}
                            price={pizza.price}

                        />
                    )}
                </div>
            </div>
        )
    }
}
