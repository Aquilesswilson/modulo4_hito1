import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

    const login = async (credenciales) => {
        const resp = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credenciales),
        })
        if (!resp.ok) throw new Error("Error en el login, usuario o contraseña incorrectos");
        const data = await resp.json();
        setToken(data.token);
        setEmail(data.email);

    }

    const register = async (credenciales) => {
        const resp = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credenciales),
        })
        if (!resp.ok) throw new Error("Error al registrar, intente nuevamente");
        const data = await resp.json();
        setToken(data.token);
        setEmail(data.email);

    }

    const getPerfil = async () => {
        const resp = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })        
        const data = await resp.json();        
        setEmail(data.email);

    }

    const logout = () => {
        setToken(null);
        setEmail(null);
    }

    return (
        <UserContext.Provider value={{ token, email, login, logout, register, getPerfil }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);