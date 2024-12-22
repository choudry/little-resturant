import { Image } from '@chakra-ui/react';
import React from 'react';
import logo from"../assets/logo.svg"

const Header = () => {
    return (
        <header>
            <Image src={logo} alt="logo" />
        </header>
    );
};

export default Header;