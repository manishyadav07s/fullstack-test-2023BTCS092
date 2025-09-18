import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-300 text-black-100 font-bold p-4 shadow-lg flex justify-center text-2xl rounded-full m-5 text-center ">
        <nav className="space-x-6">
            <Link to="/" >Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            
        </nav>
    </div>
  )
};

export default Navbar;

















//     <nav className="bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#6A0572]
//  text-white p-4 shadow-lg flex justify-between">
//       <h1 className="font-bold text-xl">MyApp</h1>
//       <div className="space-x-6">
//         <Link to="/" className="hover:text-gray-200">Home</Link>
//         <Link to="/about" className="hover:text-gray-200">About Us</Link>
//         <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
//       </div>
//     </nav>
