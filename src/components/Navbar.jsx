import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='list'>
                    <Link to = "/home"><li>Home</li></Link>
                    <Link to ="/about"><li>About</li></Link>
                    <Link to ="/contact"><li>Contact us</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
