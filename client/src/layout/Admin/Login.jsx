import { Button } from '@/components/ui/button';
import { CiUser } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import React, { useState } from 'react';
import { AdminLogin } from '@/assets/Svg';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { loginAdmin } = useAuth();
    const handleInputChange = (e) => {
        setError('')
        const { type, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [type]: value
        }))
    }
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            return setError('please enter valid credentials!')
        }
        setIsLoading(true);
        setError('')
        try {
            if (!formData.email || !formData.password) {
                return toast.error('Please enter valid credentials!');
            }

            const { success, message } = await loginAdmin(formData);

            if (success) {
                setTimeout(() => {
                    toast.success(message);
                    setIsLoading(false);
                    navigate('/admin/dashboard')
                }, 2000)
            } else {
                setIsLoading(false);
                toast.error(message || 'Login failed');
            }
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    }

    return (
        <div className="h-screen flex items-center justify-center gap-8 p-6  bg-gradient-to-br from-[#E8F0FE] to-[#C1D3FE]">
            <div className="hidden md:flex flex-1 justify-center">
                <AdminLogin className="max-w-sm" />
            </div>
            <form className="flex-1 max-w-md w-full bg-white shadow-lg rounded-lg text-center p-8 border border-gray-200"
                onSubmit={handleLogin}
            >
                <h1 className="font-bold text-4xl text-gray-900 my-3">
                    My <span className="text-pink-600">Portfolio</span>
                </h1>
                <h3 className="font-semibold text-md text-gray-600">Admin Panel Login</h3>
                <p className='my-3 text-sm font-semibold text-red-600 animate-bounce'>{error}</p>

                {/* Username Input */}
                <div className="flex items-center gap-3 bg-gray-100 border border-gray-300 my-5 rounded-md px-4 py-3">
                    <CiUser size={24} className="text-gray-500" />
                    <input
                        type="email"
                        placeholder="Admin Username"
                        className="w-full bg-transparent focus:outline-none text-gray-700"
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                </div>

                {/* Password Input */}
                <div className="flex items-center gap-3 bg-gray-100 border border-gray-300 my-5 rounded-md px-4 py-3">
                    <RiLockPasswordLine size={24} className="text-gray-500" />
                    <input
                        type="password"
                        placeholder="Admin Password"
                        className="w-full bg-transparent focus:outline-none text-gray-700"
                        onChange={handleInputChange}
                        value={formData.password}
                    />
                    <IoEyeOutline size={24} className="cursor-pointer text-gray-500 hover:text-gray-700" />
                </div>

                {/* Login Button */}
                <Button className="my-5 w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 transition-transform hover:scale-105">
                    {isLoading ? 'please wait..' : 'Login as Admin'}
                </Button>
            </form>
        </div>
    );
};

export default Login;
