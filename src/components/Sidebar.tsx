import React, { useState } from 'react';

interface NavProps {
  isExpanded: boolean,
}

export default function Sidebar({ isExpanded }: NavProps) {

  const [items, setItems] = useState([
      {
        title: "Login",
        icon: "mdi-login-variant",
        link: "/login",
        displayOnLoggedIn: false
      },
      {
        title: "Registration",
        icon: "mdi-account-plus",
        link: "/registration",
        displayOnLoggedIn: false
      },
      {
        title: "Agribase",
        icon: "mdi-database",
        link: "/browse",
        displayOnLoggedIn: true,
        subItems: [
          {
            title: "Create",
            link: "/browse/upload",
            icon: "mdi-plus"
          },
          {
            title: "Manage",
            link: "/manage",
            icon:"mdi-clipboard"
          }
        ]
      },
      {
        title: "Agriwatch",
        icon: "mdi-chart-box",
        link: "/dashboard",
        displayOnLoggedIn: true,
        
      },
      {
        title: "Account",
        icon: "mdi-account",
        link: "/account",
        displayOnLoggedIn: true
      },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const mockSignOut = () => {
      // dispatch logout action here
  };

  const openDialog = () => {
    // open dialog action here
  };
  
  return (
      <nav className="bg-gray-900 text-white">
        <div className="p-2">
          { /* Insert Logo Image here, make use of isExpanded state */}
        </div>
        <ul>
          { items.filter(item => {
            if (isLoggedIn) {
              return item.displayOnLoggedIn && !item.subItems;
            } else {
              return !item.displayOnLoggedIn;
            }
          }).map((item, index) => (
            <div key={index} className="flex items-center p-4 hover:bg-gray-700">
              <img src={item.icon} alt={item.title} />
              <a href={item.link} className="ml-4">{item.title}</a>
            </div>
          ))}
          <div className="flex items-center p-4 hover:bg-gray-700 cursor-pointer" onClick={mockSignOut}>
            <img src="mdi-logout" alt="Logout" />
            <span className="ml-4">Logout</span>
          </div>
          <div className="text-center" onClick={openDialog}>
            <button className="p-2 m-2 bg-green-500 rounded">Settings</button>
          </div>
        </ul>
      </nav>
  );
}
