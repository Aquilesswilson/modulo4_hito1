import { Component } from 'react'

export default class CardPizza extends Component {
    render() {
        const { name, price, ingredients, img } = this.props
        return (
            <div className='card' >
                <img src={img} className='card-img-top' alt={name}></img>
                <div className='card-body'>
                    <h4 className='card-title'>{name}</h4>
                </div>
                <ul className='list-group list-group-flush'>
                    <h5 className='text-center'>Ingredientes: </h5>
                    <div className='row align-items-center justify-content-center'>
                        <span className='col-auto material-symbols-outlined'>local_pizza</span><span className='col-auto font-size-14'>{ingredients.join(", ")}</span>
                    </div>

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
