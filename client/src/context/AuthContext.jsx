import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            setUser({ token })
        }
        setLoading(false);
    }, [])


    const loginAdmin = async (credentials) => {
        try {
            const response = await fetch(`${backendUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Login Failed!");
            }

            localStorage.setItem("token", data.token);
            setUser({ token: data.token });
            return { success: true, message: data.message };

        } catch (error) {
            return { success: false, message: error.message };
        }
    };


    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/admin/login')
    }

    return (
        <AuthContext.Provider value={{ user, loading, loginAdmin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);