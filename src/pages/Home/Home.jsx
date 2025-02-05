import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Heading } from '@chakra-ui/react';
import styles from './Home.module.css';
import { DishCard } from "../../components/Dish/DishCard";

const Home = () => {
  const [homeMenu, setHomeMenu] = React.useState([]);
  

  useEffect(() => { 
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((response) => response.json())
      .then((data) => {
        const menu = data["meals"];
        setHomeMenu(menu.map((item) => {
          return {
            ...item,
            price: Math.floor(Math.random() * 20) + 10,
          };
        }));
      });
    
  }, []);
  

    return (
      <main className={styles.home}>
        <Header />

        <section className={styles.heading}>
          <Heading as="h1" size="2xl">
            This week special!
          </Heading>
        </section>

        <section className={styles.dish_container}>
          {homeMenu.map((item) => (
            <DishCard
              title={item.strMeal}
              description={item.strInstructions}
              price={ item.price }
              image={item.strMealThumb}
            />
          ))}
        </section>
      </main>
    );
};



export default Home;