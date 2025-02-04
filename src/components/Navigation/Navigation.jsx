import logo from "../../assets/logo.svg";
import { Image } from "@chakra-ui/react";
import React from 'react';
import styles from './navigation.module.css'
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  
    return (
      <nav className={styles.container}>
        <Link to="/">
          <Image src={logo} alt="logo" className={styles.logo} />
        </Link>
        <ul className={styles.navigation}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.nav_links_active : styles.nav_links)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.nav_links_active : styles.nav_links)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes-category"
              className={({ isActive }) => (isActive ? styles.nav_links_active : styles.nav_links)}
            >
              Our Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservation"
              className={({ isActive }) => (isActive ? styles.nav_links_active : styles.nav_links)}
            >
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" className={({ isActive }) => (isActive ? styles.nav_links_active : styles.nav_links)}>
              Order Online
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.nav_links_active : styles.nav_links)}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Navigation;