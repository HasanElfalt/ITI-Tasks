import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const objStyle={backgroundColor:"aqua" ,display:"flex", justifyContent:"space-evenly",padding:"10px"}
    return (
        <div style={objStyle}>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/movies/add'>AddMovie</Link>
        </div>
    );
};

export default NavBar;