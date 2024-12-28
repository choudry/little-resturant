import React from 'react';
import styles from './header.module.css'
import { Button, Heading, Image } from '@chakra-ui/react';
import restaurant_image from '../../assets/restaurantfood.jpg';

const Header = () => {
    return (
      <header className={styles.container}>
        <div className={styles.left}>
          <div className="top">
            <Heading as="h1" size="xl" className={styles.title}>
              Little Resturant
            </Heading>
            <Heading as="h2" size="md">
              The best food in town
            </Heading>
          </div>
          <div className="bottom">
            <p>
              We are a family owned Meciterranean resturant, focusd on tradiotional recipes served with a modern twist.
            </p>
            <button>
              Reserve a Table
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <Image src={restaurant_image} className={styles.restaurant_image} />
        </div>
      </header>
    );
};

export default Header;