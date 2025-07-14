import { Link } from "react-router-dom";

import "../styles/navbar.css";
import logo from "../assets/logo.png"; // Adjust the path as necessary

export default function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            <nav className="linkbar">
                <Link to="/">Map</Link>
                <Link to="/forum">Forum</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}