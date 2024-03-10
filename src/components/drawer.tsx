import React, { useState } from "react";
import "./drawer.scss"; // Assurez-vous que le chemin d'importation est correct
import testImage from "../assets/images/1666795350149.png";

interface IDrawerMenu {
  text: string;
  routerLink: string;
}

export default function PersistentDrawerLeft({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems: IDrawerMenu[] = [
    { text: "home mo", routerLink: "/" },
    { text: "dashboard", routerLink: "/dashboard/1/tasks/2" },
    { text: "Mon statut", routerLink: "/statut" },
    { text: "Mes sessions", routerLink: "/sessions" },
    { text: "Mes missions", routerLink: "/missions" },
    { text: "Ma mission", routerLink: "/mission" },
    { text: "Mon compte", routerLink: "/parametres/informations-personnelles" },
  ];

  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <div
        className={`container-button ${isMenuVisible ? "visible" : "hidden"}`}
      >
        <button className="menuButton" onClick={toggleMenuVisibility}>
          {isMenuVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <div className={`drawer-fixed ${isMenuVisible ? "visible" : "hidden"}`}>
        <div className="container-avatar">
          <img
            className="avatar"
            src={testImage}
            alt="Description de l'image"
          />
        </div>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.routerLink} className="link">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`content ${isMenuVisible ? "menuVisible" : ""}`}>
        <div className="container">{children}</div>
      </div>
    </div>
  );
}
