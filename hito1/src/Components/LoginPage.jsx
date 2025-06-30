// rafce  < snippet
import React, { Component, useState } from 'react'
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');
    const emailLogin = 'aquilespintomon@gmail.com';
    const passwordCorrecta = 'qweqwe';

    const enviarFormularioLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMensaje('Todos los campos son obligatorios (no pueden estar vacíos).');
            setMensajeExito('');
        } else if ((email !== emailLogin) || (password !== passwordCorrecta)) {
            setMensaje('Usuario o contraseña incorrectos');
            setMensajeExito('');
        } else if (password.length < 6) {
            setMensaje('Su contraseña debe tener mínimo 6 carácteres');
            setMensajeExito('');
        } else if ((email === emailLogin) && (password === passwordCorrecta)) {
            setMensajeExito('Sus credenciales son correctas');
            setMensaje('');
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

export default LoginPage