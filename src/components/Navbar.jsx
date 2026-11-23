import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-500 py-2 px-8 flex items-center justify-between text-white'>
            <Link to="/">
                <h1 className='font-bold text-lg'>SGS React Router</h1>
            </Link>
            <ul className='flex items-center justify-between space-x-5'>
                <li>
                    <Link to="/products" className='font-bold'>Products</Link>
                </li>
                <li>
                    <Link to="/about" className='font-bold'>About</Link>
                </li>
                <li>
                    <Link to="/contact" className='font-bold'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
