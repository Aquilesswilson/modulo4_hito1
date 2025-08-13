import { createContext, useContext, useEffect, useState, useMemo } from 'react'
const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // Estado inicial
    const [cart, setCart] = useState(() => {
        try {
            const guardado = localStorage.getItem('cart')
            return guardado ? JSON.parse(guardado) : []
        } catch {
            return []
        }
    })


    // Persistir, se actualiza si hay cambios
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    // Acciones carrito
    const agregarAlCarrito = (pizza) => {
        setCart((prev) => {
            const idx = prev.findIndex((p) => p.id === pizza.id);
            if (idx !== -1) {
                const copy = [...prev];
                copy[idx] = { ...copy[idx], count: copy[idx].count + 1 }
                return copy
            }
            return [...prev, { ...pizza, count: 1 }]
        })
    }

    // Elimina del carrito
    const eliminarDelCarrito = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id))
    }

    const aumentar = (id) => {
        setCart((prev) =>
            prev.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p))
        )
    }

    const disminuir = (id) => {
        setCart((prev) =>
            prev
                .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
                .filter((p) => p.count > 0)
        )
    }

    const limpiarCarrito = () => setCart([])

    // Total y contar
    const { total, itemsCount } = useMemo(() => {
        const itemsCount = cart.reduce((acc, it) => acc + it.count, 0)
        const total = cart.reduce((acc, it) => acc + it.price * it.count, 0)
        return { itemsCount, total }
    }, [cart])

    const value = {
        cart,
        agregarAlCarrito,
        aumentar,
        disminuir,
        eliminarDelCarrito,
        limpiarCarrito,
        total,
        itemsCount
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}

export const useCart = () => useContext(CartContext)