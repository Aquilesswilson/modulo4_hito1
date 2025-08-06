import { useEffect, useState } from 'react'
import Header from '../Components/header'
import CardPizza from '../Components/CardPizza'
// import { pizzas } from '../assets/js/pizzas'

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/pizzas')
            .then((resPizza) => resPizza.json()) // Convertir fetch response a json
            .then((dataPizza) => setPizzas(dataPizza))
            .catch((error) => console.error('Ha ocurrido un error', error));
    }, []);

    return (
        <div>
            <Header />
            <div className='row justify-content-center gap-4 mt-5 mb-5'>
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        // desc={pizza.desc}
                        img={pizza.img}
                        ingredients={pizza.ingredients}
                        name={pizza.name}
                        price={pizza.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home