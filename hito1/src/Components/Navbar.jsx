import { Component } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../Context/ContextCart';
import { useUser } from '../Context/UserContext';
const Navbar = () => {
    const { itemsCount, total } = useCart();
    const { token, logout} = useUser();

    return (
        <nav className='row no-gutters align-items-center' >
            <div className='col'>
                <div className='row align-items-center'>
                    <h5 className='col-auto'>Pizzería Mamma Mia!</h5>

                    {/*Botones siempre visibles*/}
                    <Link to="/" className='btn btn-outline-primary d-flex m-1 col-auto'><span className=' pe-1 material-symbols-outlined'>local_pizza</span>Home</Link>
                    <Link to="/404" className='btn btn-outline-primary d-flex m-1 col-auto'><span className=' pe-1 material-symbols-outlined'>local_pizza</span>404</Link>

                    {/* Según inicio de sesión */}
                    {!token ? (
                        <>
                            <Link to="/login" className='btn btn-outline-primary d-flex m-1 col-auto'><span className='material-symbols-outlined'>key</span>Login</Link>
                            <Link to="/register" className='btn btn-outline-primary d-flex m-1 col-auto'><span className='material-symbols-outlined'>vpn_key_alert</span>Register</Link>
                        </>) : (
                        <>

                            <Link to="/profile" className='btn btn-outline-primary d-flex m-1 col-auto'><span className='material-symbols-outlined'>lock</span>Profile</Link>
                            <button onClick={logout} className='btn btn-outline-primary d-flex m-1 col-auto'><span className='material-symbols-outlined'>lock_open_right</span>Logout</button>                            
                        </>
                    )}
                </div>

            </div>
            <div className='col-auto'>
                <Link to="/cart" id='valorTotal' className='btn btn-outline-success d-flex m-1'><span className='material-symbols-outlined'>shopping_cart</span>{` (${itemsCount}) Total $: ${total.toLocaleString('es-CL')}`}
                </Link>
            </div>
        </nav>
    )
}

export default Navbar