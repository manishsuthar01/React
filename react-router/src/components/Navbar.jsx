import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Product">Product</Link>
    </nav>
  );
}
export default Navbar;
