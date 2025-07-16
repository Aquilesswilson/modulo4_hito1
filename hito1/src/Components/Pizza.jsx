
import { useEffect, useState } from 'react'
import Header from './header'
import CardPizza from './CardPizza'
// import { pizzas } from '../assets/js/pizzas'

const Pizza = () => {
    const [pizza, setPizza] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/api/pizzas/p001')
            .then((res) => res.json()) // Convertir fetch response a json
            .then((data) => setPizza(data))
            .catch((error) => console.error('Ha ocurrido un error', error));
    }, []);
    if (!pizza) return <p className="text-center mt-4">Cargando pizza...</p>;
    return (
        <div className='container'>
            <h2 className='text-capitalize'>{pizza.name}</h2>
            <img className='img-fluid my-3' src={pizza.img} alt={pizza.name} />
            <p><strong>Precio: </strong> $ {pizza.price}</p>
            <p><strong>Descripción: {pizza.desc}</strong></p>
            <p><strong>Ingredientes: </strong></p>
            <ul>
                {pizza.ingredients.map((ingrediente, index) =>
                    <li key={index}>{ingrediente}</li>
                )}
            </ul>
            <button className='btn btn-success' >Añadir al carrito</button>
        </div>
    );
}

export default Pizza