import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation () {
    return (
 <nav className="navbar">
 <span>
     <Link to="/">Proucts</Link>
     <Link to="/about">About</Link>
 </span>
 </ nav>
    );
};

