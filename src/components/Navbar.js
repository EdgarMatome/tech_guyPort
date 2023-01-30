import React from "react"
import mainImg from "../img/Edgar2.jpg";
import logo from "../img/Edgar_logo.png"
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="NavBar">
            
            <nav className="nav">
            <div className="profile">
                <img src={mainImg}  alt="profile"/>
            </div>
            <div className="brand-logo">
                <img src={logo}  alt="profile"/>
            </div>
                <ul className="nav-items">
                    <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                            About Me
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active">
                            Contact me
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                <p>
                &copy;2023 Edgar Morudu
                </p>
            </footer>
            </nav>
            
        </div>
    )
}
