import { Component } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/ContextCart'


export default function CardPizza({ desc, name, price, ingredients, img, id }) {
    const { agregarAlCarrito } = useCart();
    const handleAdd = () => {
        const item = {
            id: id ?? name,
            price: Number(price) || 0,
            name: name,
            img: img || '',
        }
        agregarAlCarrito(item)
    }


    return (
        <div className='card' >
            <img src={img} className='card-img-top' alt={name}></img>
            <div className='card-body'>
                <h4 className='card-title'>{name}</h4>
                <p>{desc}</p>

            </div>
            <ul className='list-group list-group-flush'>
                <h5 className='text-center'>Ingredientes: </h5>
                <ul className='d-flex flex-column align-items-center'>
                    {ingredients.map((ingrediente, index) =>
                        <li key={index}>{ingrediente}</li>
                    )}
                </ul>
            </ul>
            <div className='card-body'>
                <h3 className='text-center'>Precio: ${price.toLocaleString('es-CL')}</h3>
                <div className='row justify-content-around'>
                    <Link to={`/pizza/${id}`} className='col-auto d-flex btn btn-outline-secondary'><span className='col-auto material-symbols-outlined'>eyeglasses_2</span>Ver más</Link>                    
                    <button className='col-auto add' onClick={handleAdd}><span className='material-symbols-outlined'>add_shopping_cart</span>Añadir</button>
                </div>
            </div>
        </div>
    )
}



