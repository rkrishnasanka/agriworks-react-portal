"use client";
import React, { useState } from 'react';

export default function LandingPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Add your login logic here
        console.log('Logging in...');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to AgriWorks</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} className="input input-bordered w-full max-w-xs" />
                </div>
                <button type="button" onClick={handleLogin} className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

