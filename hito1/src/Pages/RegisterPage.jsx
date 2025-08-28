import { Component, useState } from 'react'
import { useUser } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');

    const [mensaje, setMensaje] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');
    const [cargando, setCargando] = useState(false);

    const { register } = useUser();
    const navigate = useNavigate();

    const alEnviarFormulario = async (e) => {

        setMensaje('');
        setMensajeExito('');

        e.preventDefault();

        if (!email || !password || !repetirPassword) {
            console.log
            setMensaje('Todos los campos son obligatorios');
            setMensajeExito('');
        } else if (password.length < 6) {
            setMensaje('Su contraseña debe tener mínimo 6 carácteres');
            setMensajeExito('');

        } else if (password !== repetirPassword) {
            setMensaje('Sus contraseñas no coinciden');
            setMensajeExito('');
        } else {
            setMensajeExito('Se ha registrado correctamente');
            setMensaje('');
        }

        try {
            setCargando(true);
            await register({ email, password });
            setMensajeExito('Se ha registrado correctamente');
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password);
            setMensaje('');
            navigate('/');

        } catch (error) {
            setMensaje(error?.message || 'Error al registrar, intente nuevamente');
            setMensajeExito('');

        } finally {
            setCargando(false)
        }

    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2>Register Page</h2>
                        <form id="form-register" onSubmit={alEnviarFormulario}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="repetirPassword" className="form-label">Repetir Password</label>
                                <input type="password" className="form-control" id="repetirPassword" value={repetirPassword} onChange={(e) => setRepetirPassword(e.target.value)}></input>
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
                            <button type="submit" className="btn btn-primary" disabled={cargando}>{cargando ? 'Registrando...' : 'Registrar'}</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}


