import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='text-center'>
            
            <h1 className='text-3xl font-bold text-center my-5'>Coffee House</h1>
            <NavLink to="/addCoffee" >Add Coffee</NavLink>
        </div>
    );
};

export default Header;