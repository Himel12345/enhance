
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            
                <div className='logo'><Link to="/">Logo</Link></div>
                <ul>
                    <li><Link to="/" className='navlinks'>Home</Link></li>
                    <li><Link to="/profile">Sign Up</Link></li>
                    <li><Link to="/settings">All Products</Link></li>
                    <li><Link to="/">Our Story</Link></li>
                    <li><Link to="/profile">Contact Us</Link></li>
                    <li><Link to="/settings">Offers</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <li><Link to="/profile">Policy</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                  
                </ul>
           


        </nav>
    );
};

export default Navbar;