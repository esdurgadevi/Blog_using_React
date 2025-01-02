import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar()
{
    return(
        <nav className="navbar">
            <h1>Insightful Blog Haven</h1>
            <div className="links">
                <Link to="/" className="unique">Home</Link>
                <Link to='/create' style={{ color: 'white', backgroundColor: '#f1356d',borderRadius: '10px', padding:'10px'}}>New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;