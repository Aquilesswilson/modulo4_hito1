import { Component } from 'react'

export default class Navbar extends Component {
    render() {

        const total = 25000;
        const token = false;

        return (
            <nav className='row no-gutters align-items-center' >
                <div className='col'>
                    <div className='row align-items-center'>
                        <h5 className='col-auto'>Pizzería Mamma Mia!</h5>
                        <button className='col-auto'><span className='material-symbols-outlined'>local_pizza</span>Home</button>
                        {!token ? (
                            <>
                                <button className='col-auto'><span className='material-symbols-outlined'>key</span>Login</button>
                                <button className='col-auto'><span className='material-symbols-outlined'>vpn_key_alert</span>Register</button>
                            </>
                        ) : (
                            <>

                                <button className='col-auto'><span className='material-symbols-outlined'>lock</span>Profile</button>
                                <button className='col-auto'><span className='material-symbols-outlined'>lock_open_right</span>Logout</button>
                            </>
                        )
                        }
                    </div>

                </div>
                <div className='col-auto'>
                    <button id='valorTotal'><span className='material-symbols-outlined'>shopping_cart</span>Total: $ {total.toLocaleString('es-CL')}</button>
                </div>
            </nav>
        )
    }
}
