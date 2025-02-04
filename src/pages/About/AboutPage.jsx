import { useEffect, useState } from 'react'
import { Heading, Image } from '@chakra-ui/react';
import styles from './about.module.css';

export const AboutPage = () => {
  const [randomDish, setRandomDish] = useState({});
  
  useEffect(() => { 
    const loadRandomDish = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const jsonResp = await response.json();
        console.log(jsonResp);
        setRandomDish(jsonResp.meals[0].strMealThumb);
      } catch (error) {
        console.error('Error fetching random dish:', error);
      }
    };

    loadRandomDish();
  }, []);

  return (
    <div className={styles.container}>
      <Heading as={"h1"}>Who We Are?</Heading>
      <img src={randomDish} style={{width: "300", maxWidth: "400px", height: "auto", float: "right", borderRadius: "1rem", margin: "1rem"}} alt="placeholder" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A libero veritatis, repudiandae, animi accusamus
        deleniti nemo, quae recusandae perspiciatis molestias nesciunt aliquid velit optio voluptate officiis inventore
        eligendi minus natus incidunt dolorum unde provident sunt quasi amet. Recusandae minima, accusantium
        perspiciatis est vero cum doloribus assumenda asperiores pariatur quo molestiae quia. Provident consequatur
        delectus, possimus. <br />
        quia vero cupiditate minus cum itaque, neque eos quidem sed? Quas hic consequatur iure iusto consectetur
        assumenda dignissimos, accusantium aliquam, sapiente deserunt, fuga id aliquid deleniti minus doloremque dolores
        veritatis animi. Tempore reiciendis suscipit tenetur expedita minima id ex soluta molestias iusto temporibus
        culpa doloribus aspernatur aperiam amet quam placeat quasi quisquam quas, est rerum ducimus, necessitatibus
        ipsam eligendi! Odio quis harum vel molestiae dicta repellendus odit cupiditate, illum ex, ad laborum, adipisci
        repudiandae quas esse veniam reiciendis aliquid! Dolor, nesciunt officia maiores debitis expedita omnis. Esse ut
        culpa totam. Quasi praesentium quis eaque non illum dolorem adipisci aperiam asperiores, at iure est atque nobis
        ipsa officiis blanditiis qui? Aspernatur magnam unde debitis nostrum blanditiis odit rerum error voluptatum hic
        atque doloremque iusto nulla, amet explicabo qui quae officiis veritatis molestiae! Ad illum sint quo dicta,
        reiciendis quisquam, earum nobis corporis ratione fugit nisi. Tempora.
      </p>
    </div>
  );
}
