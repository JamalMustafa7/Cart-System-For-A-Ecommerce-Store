import { Link } from "react-router-dom";
import './navbar.css';
import {ShoppingCart} from "phosphor-react";
export function Navbar()
{
    return (
        <nav>
            <ul>
                <li>
                <Link to="/" className="nav-links">Home</Link>
                </li>
                <li>
                <Link to="/cart" className="nav-links"><ShoppingCart size="24px"/></Link>
                </li>
            </ul>
        </nav>
    );
}