import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.css';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

export const RootLayout = () => {
  return (
    <Grid className={styles.root_layout}>
      <GridItem p="20px" gridRow="1" className={styles.navigation}>
        <Navigation />
      </GridItem>
      <GridItem p="20px" gridRow="2" backgroundColor={"green.500"}>
        <Outlet className={styles.outlet} />
      </GridItem>
      <GridItem p="20px" gridRow="3" backgroundColor={"red.500"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}
