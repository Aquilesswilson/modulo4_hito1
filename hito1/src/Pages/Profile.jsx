import React, { useEffect } from 'react'
import { useUser } from '../Context/UserContext';

export default function Profile() {

    const { email, getPerfil, logout } = useUser();

    useEffect(() => {
        getPerfil();
    }, [])


    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2>Mi Perfil</h2>
                    <div className="mb-3">
                        <h4>Email: {email}</h4>
                        <br />
                        <button className='btn btn-primary' onClick={logout}>Cerrar sesión</button>


                    </div>


                </div>
            </div>
        </div>
    )
}

