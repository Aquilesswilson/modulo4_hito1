import React, { useState } from 'react'
import { pizzaCart } from '../assets/js/pizzas'

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);
    const aumentar = (id) => {
        const nuevoCarrito = cart.map((pizza) => {
            if (pizza.id === id) {


                return {
                    id: pizza.id,
                    img: pizza.img,
                    name: pizza.name,
                    price: pizza.price,
                    count: pizza.count + 1
                }
            } else {
                return pizza;
            }


        })
        setCart(nuevoCarrito)
    }

    const disminuir = (id) => {
        const carritoModificado = cart.map((pizza) => {
            if ((pizza.id === id) && (pizza.count !== 0)) {


                return {
                    id: pizza.id,
                    img: pizza.img,
                    name: pizza.name,
                    price: pizza.price,
                    count: pizza.count - 1
                }
            } else {
                return pizza;
            }


        })
        const nuevoCarrito = carritoModificado.filter(pizza => pizza.count > 0);
        setCart(nuevoCarrito)
    }

    const total = cart.reduce((acumulador, pizza) => acumulador + (pizza.price * pizza.count), 0)

    return (
        <div className='container m-4'>
            <div className="row">
                <h2>Detalles del pedido:</h2>
                <div className="col-8">
                    {cart.map(pizza =>
                        <div key={pizza.id} className="row align-items-center m-2">
                            <div className="col-auto">
                                <img src={pizza.img} alt={pizza.name} width={80} />
                            </div>
                            <div className="col ps-2">
                                <h4 className='text-capitalize'>{pizza.name}</h4>
                            </div>
                            <div className="col-auto fw-bold">$ <span>{(pizza.price * pizza.count).toLocaleString('es-CL')}</span></div>
                            <div className="col-auto">
                                <div className="row align-items-center">
                                    <button onClick={() => disminuir(pizza.id)} className='col-auto btn btn-danger btn-sm'>-</button>
                                    <span className="col-auto m-1">{pizza.count}</span>
                                    <button onClick={() => aumentar(pizza.id)} className='col-auto btn btn-primary btn-sm'>+</button>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Total: $ {total.toLocaleString('es-CL')}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className='btn btn-dark'>Pagar</button>
                </div>
            </div>
        </div>

    )
}

export default Cart