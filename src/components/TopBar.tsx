import React, { useState } from 'react';

interface TopBarProps {
  onSignIn: (signedIn: boolean) => void,
}

export default function TopBar({ onSignIn }: TopBarProps) {
  const [signedIn, setSignedIn] = useState(true);
  
  const mockSignIn = () => {
    onSignIn(signedIn);
  }

  return (
    <header className="flex items-center justify-between py-2 px-4 bg-white">
      <img className="mr-3" src={require('../assets/mini_logo.png')} height="40"/>
      <div>
        <button 
          className="text-gray-800 hover:text-black px-2 py-1 m-1 border-none"
          onClick={mockSignIn}
        >
          Sign Up
        </button>
        <button 
          className="text-gray-800 bg-green-400 hover:bg-green-500 px-2 py-1 m-1 border-none" 
          onClick={mockSignIn}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}
