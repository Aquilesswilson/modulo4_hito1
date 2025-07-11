import { Component } from 'react'

export default class CardPizza extends Component {
    render() {
        const { desc, name, price, ingredients, img } = this.props
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
                        <button className='col-auto'><span className='material-symbols-outlined'>eyeglasses_2</span>Ver más</button>
                        <button className='col-auto add'><span className='material-symbols-outlined'>add_shopping_cart</span>Añadir</button>
                    </div>
                </div>
            </div>
        )
    }
}
