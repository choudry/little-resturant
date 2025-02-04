import React from 'react';
import Header from '../../components/Header/Header';
import { Heading } from '@chakra-ui/react';
import styles from './Home.module.css';
import { DishCard } from "../../components/Dish/DishCard";
import greek_salad from "../../assets/greek_salad.jpg"
import lemon_dessert from "../../assets/lemon_dessert.jpg";
import bruchetta from "../../assets/bruchetta.svg";

const Home = () => {
    return (
      <main className={styles.home}>
        <Header />

        <section className={styles.heading}>
          <Heading as="h1" size="2xl">
            This week special!
          </Heading>
          <button>Online Menu</button>
        </section>

        <section className={styles.dish_container}>
          <DishCard
            title="Greek Salad"
            description="thlsdakjf klsjdf kalsji ewoiuo nmn iouoi cx oiu jskaldfj  lkjdflaksdj  lkjasdlkfj  lkjkjklj n kjj jkjk lkeww c x"
            price="$12"
            image={greek_salad}
          />

          <DishCard
            title="Lemon Dessert"
            description="Lemon dessert thlsdakjf klsjdf kalsji ewoiuo nmn iouoi cx oiu jskaldfj  lkjdflaksdj  lkjasdlkfj  lkjkjklj n kjj jkjk lkeww c x"
            price="$18"
            image={lemon_dessert}
          />

          <DishCard
            title="Bruchetta"
            description="Lemon dessert thlsdakjf klsjdf kalsji ewoiuo nmn iouoi cx oiu jskaldfj  lkjdflaksdj  lkjasdlkfj  lkjkjklj n kjj jkjk lkeww c x"
            price="$22"
            image={bruchetta}
          />
          <DishCard
            title="Lemon Dessert"
            description="Lemon dessert thlsdakjf klsjdf kalsji ewoiuo nmn iouoi cx oiu jskaldfj  lkjdflaksdj  lkjasdlkfj  lkjkjklj n kjj jkjk lkeww c x"
            price="$18"
            image={lemon_dessert}
          />

          <DishCard
            title="Bruchetta"
            description="Lemon dessert thlsdakjf klsjdf kalsji ewoiuo nmn iouoi cx oiu jskaldfj  lkjdflaksdj  lkjasdlkfj  lkjkjklj n kjj jkjk lkeww c x"
            price="$22"
            image={bruchetta}
          />
          <DishCard
            title="Greek Salad"
            description="thlsdakjf klsjdf kalsji ewoiuo nmn iouoi cx oiu jskaldfj  lkjdflaksdj  lkjasdlkfj  lkjkjklj n kjj jkjk lkeww c x"
            price="$12"
            image={greek_salad}
          />

          <DishCard
            title="Lemon Dessert"
            description="Lemon dessert thlsdakjf klsjdf kalsji ewoiuo nmn iouoi cx oiu jskaldfj  lkjdflaksdj  lkjasdlkfj  lkjkjklj n kjj jkjk lkeww c x"
            price="$18"
            image={lemon_dessert}
          />
        </section>
      </main>
    );
};



export default Home;