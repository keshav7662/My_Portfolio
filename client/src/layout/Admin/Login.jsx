import { Button } from '@/components/ui/button';
import { CiUser } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import React from 'react';
import { AdminLogin } from '@/assets/Svg';

const Login = () => {
    return (
        <div className="h-screen flex items-center justify-center gap-8 p-6  bg-gradient-to-br from-[#E8F0FE] to-[#C1D3FE]">
            {/* Left Side Image (Hidden on Small Screens) */}
            <div className="hidden md:flex flex-1 justify-center">
                <AdminLogin className="max-w-sm" />
            </div>

            {/* Login Card */}
            <div className="flex-1 max-w-md w-full bg-white shadow-lg rounded-lg text-center p-8 border border-gray-200">
                <h1 className="font-bold text-4xl text-gray-900 my-3">
                    My <span className="text-pink-600">Portfolio</span>
                </h1>
                <h3 className="font-semibold text-md text-gray-600">Admin Panel Login</h3>

                {/* Username Input */}
                <div className="flex items-center gap-3 bg-gray-100 border border-gray-300 my-5 rounded-md px-4 py-3">
                    <CiUser size={24} className="text-gray-500" />
                    <input
                        type="email"
                        placeholder="Admin Username"
                        className="w-full bg-transparent focus:outline-none text-gray-700"
                    />
                </div>

                {/* Password Input */}
                <div className="flex items-center gap-3 bg-gray-100 border border-gray-300 my-5 rounded-md px-4 py-3">
                    <RiLockPasswordLine size={24} className="text-gray-500" />
                    <input
                        type="password"
                        placeholder="Admin Password"
                        className="w-full bg-transparent focus:outline-none text-gray-700"
                    />
                    <IoEyeOutline size={24} className="cursor-pointer text-gray-500 hover:text-gray-700" />
                </div>

                {/* Login Button */}
                <Button className="my-5 w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 transition-transform hover:scale-105">
                    Login as Admin
                </Button>
            </div>
        </div>
    );
};

export default Login;
