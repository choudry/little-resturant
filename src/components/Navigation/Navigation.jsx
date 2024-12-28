import logo from "../../assets/logo.svg";
import { Image } from "@chakra-ui/react";
import React from 'react';
import styles from './navigation.module.css'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <nav className={styles.container}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <ul className={styles.nav_links}>
          <li>
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navigation;