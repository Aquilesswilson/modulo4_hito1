// rafce  < snippet
import React, { Component, useState } from 'react'

import { useUser } from '../Context/UserContext';

export default function LoginPage() {

    // Formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Mensajes para el usuario
    const [mensaje, setMensaje] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');

    // Cargando
    const [cargando, setCargando] = useState(false);

    // Contexto Usuario
    const { login } = useUser();

    const enviarFormularioLogin = async (e) => {
        e.preventDefault()


        setMensaje('');
        setMensajeExito('');

        if (!email || !password) {
            setMensaje('Todos los campos son obligatorios');
            return
        }

        // if (password.length < 6) {
        //     setMensaje('La contraseña debe tener más de 6 caracteres');
        //     return
        // }

        try {
            setCargando(true);
            await login({ email, password });
            setMensajeExito('Login exitoso');
            setMensaje('');

        } catch (error) {
            setMensaje(error?.message || 'Usuario o contraseña incorrecto');
            setMensajeExito('');
        } finally {
            setCargando(false);
        }

    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2>Login Page</h2>
                        <form id="form-login" onSubmit={enviarFormularioLogin}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            {mensaje && (
                                <div className="alert alert-danger" role="alert">
                                    {mensaje}
                                </div>

                            )}
                            {mensajeExito && (
                                <div className="alert alert-success" role="alert">
                                    {mensajeExito}
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary">Ingresar</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

