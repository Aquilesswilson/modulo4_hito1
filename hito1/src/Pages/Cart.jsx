import React, { useState } from 'react'
import { pizzaCart } from '../assets/js/pizzas'
import { useCart } from '../Context/ContextCart'
import { useUser } from '../Context/UserContext';

export default function Cart() {
    const { cart, aumentar, disminuir, eliminarDelCarrito, limpiarCarrito, total } = useCart();
    const { token } = useUser();
    const [completado, setCompletado] = useState(false)

    const manejoCheckout = async () => {
        const resp = await fetch("http://localhost:5000/api/checkouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ cart }),
        })
        if (resp.ok) {
            setCompletado(true);
        }
    }

    if (cart.length === 0) {
        return (
            <div className="container">
                <h2>Carrito</h2>
                <p>Tu carrito está vacío</p>
            </div>
        )
    }

    return (
        <div className='container m-4'>
            <div className="row">
                <h2>Detalles del pedido:</h2>
                <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="text-capitalize">
                                        <div className="d-flex align-items-center">
                                            {item.img ? (
                                                <img src={item.img} alt={item.name} width={80} />
                                            ) : null}
                                            <span className="ms-2">{item.name}</span>
                                        </div>
                                    </td>
                                    <td>$ {item.price.toLocaleString('es-CL')}</td>
                                    <td>
                                        <div className="row align-items-center">
                                            <button onClick={() => disminuir(item.id)} className='col-auto btn btn-danger btn-sm'>-</button>
                                            <span className="col-auto m-1">{item.count}</span>
                                            <button onClick={() => aumentar(item.id)} className='col-auto btn btn-primary btn-sm'>+</button>
                                        </div>
                                    </td>
                                    <td>$ {(item.price * item.count).toLocaleString('es-CL')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Total: $ {total.toLocaleString('es-CL')}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">

                    <button onClick={manejoCheckout} className='btn btn-dark' disabled={!token}>Pagar</button>
                    {completado && <p className='text-success'>Compra exitosa</p>}

                </div>
            </div>
        </div>
        // <div className='container m-4'>
        //     <div className="row">
        //         <h2>Detalles del pedido:</h2>
        //         <div className="col-8">
        //             {cart.map(item =>
        //                 <div key={item.id} className="row align-items-center m-2">
        //                     <div className="col-auto">
        //                         <img src={item.img} alt={item.name} width={80} />
        //                     </div>
        //                     <div className="col ps-2">
        //                         <h4 className='text-capitalize'>{item.name}</h4>
        //                     </div>
        //                     <div className="col-auto fw-bold">$ <span>{(item.price * item.count).toLocaleString('es-CL')}</span></div>
        //                     <div className="col-auto">
        //                         <div className="row align-items-center">
        //                             <button onClick={() => disminuir(item.id)} className='col-auto btn btn-danger btn-sm'>-</button>
        //                             <span className="col-auto m-1">{item.count}</span>
        //                             <button onClick={() => aumentar(item.id)} className='col-auto btn btn-primary btn-sm'>+</button>

        //                         </div>
        //                     </div>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-12">
        //             <h2>Total: $ {total.toLocaleString('es-CL')}</h2>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-12">
        //             <button className='btn btn-dark'>Pagar</button>
        //         </div>
        //     </div>
        // </div>

    )
}

