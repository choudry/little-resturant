import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.css';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

export const RootLayout = () => {
  return (
    <Grid className={styles.root_layout}>
      <GridItem bg="gray.100" p="20px" maxHeight="fit-content">
        <Navigation />
      </GridItem>
      <GridItem bg="green.100" p="20px" className={styles.grid_item} minW="80%">
        <Outlet className={styles.outlet} />
      </GridItem>
      <GridItem bg="red.100" p="20px">
        <Footer />
      </GridItem>
    </Grid>
  );
}
