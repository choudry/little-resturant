import { Heading } from '@chakra-ui/react';
import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginRight: '20px' }}><a href="#home">Home</a></li>
                <li style={{ marginRight: '20px' }}><a href="#about">About</a></li>
                <li style={{ marginRight: '20px' }}><a href="#menu">Menu</a></li>
                <li style={{ marginRight: '20px' }}><a href="#reservation">Reservations</a></li>
                <li style={{ marginRight: '20px' }}><a href="#online-order">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;