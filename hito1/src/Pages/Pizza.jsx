
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../Context/ContextCart'
// import Header from '../Components/Header'
// import CardPizza from '../Components/CardPizza'
// import { pizzas } from '../assets/js/pizzas'

export default function Pizza() {
    const { id } = useParams();
    const { agregarAlCarrito } = useCart();

    const [pizza, setPizza] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const traePizzaAsync = async () => {
            try {
                setCargando(true)
                const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);                
                if (!res.ok) throw new Error('No se pudo cargar la pizza');
                const data = await res.json()
                setPizza(data)
            } catch (e) {
                setError(e.message)
            } finally {
                setCargando(false)
            }
        }
        traePizzaAsync()
    }, [id])

    if (cargando) return <div className="container m-4">Cargando...</div>;
    if (error) return <div className="container m-4">Error: {error}</div>
    if (!pizza) return null;

    return (
        <div className='container m-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={pizza.img} alt={pizza.name} className='img-fluid rounded' />
                </div>
                <div className='col-md-6'>
                    <h2 className='text-capitalize'>{pizza.name}</h2>
                    {pizza.desc && <p className='text-muted'>{pizza.desc}</p>}
                    <h4>Ingredientes</h4>
                    <ul>
                        {(pizza.ingredients ?? []).map((ing, i) => (
                            <li key={i} className='text-capitalize'>{ing}</li>
                        ))}
                    </ul>

                    <h3 className='mt-3'>${pizza.price?.toLocaleString('es-CL')}</h3>
                    <button className='btn btn-dark' onClick={() => agregarAlCarrito(pizza)}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    )


}

// const Pizza = () => {
//     const [pizza, setPizza] = useState();

//     useEffect(() => {
//         fetch('http://localhost:5000/api/pizzas/p001')
//             .then((res) => res.json()) // Convertir fetch response a json
//             .then((data) => setPizza(data))
//             .catch((error) => console.error('Ha ocurrido un error', error));
//     }, []);
//     if (!pizza) return <p className="text-center mt-4">Cargando pizza...</p>;
//     return (
//         <div className='container'>
//             <h2 className='text-capitalize'>{pizza.name}</h2>
//             <img className='img-fluid my-3' src={pizza.img} alt={pizza.name} />
//             <p><strong>Precio: </strong> $ {pizza.price}</p>
//             <p><strong>Descripción: {pizza.desc}</strong></p>
//             <p><strong>Ingredientes: </strong></p>
//             <ul>
//                 {pizza.ingredients.map((ingrediente, index) =>
//                     <li key={index}>{ingrediente}</li>
//                 )}
//             </ul>
//             <button className='btn btn-success' >Añadir al carrito</button>
//         </div>
//     );
// }

