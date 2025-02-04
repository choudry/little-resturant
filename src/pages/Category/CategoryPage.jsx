import styles from './index.module.css';
import { useEffect, useState } from "react";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { useNavigate } from 'react-router-dom';

export const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate  = useNavigate();

  const selectedCategory = (category) => { 
    navigate(`/recipes-category/${category}`);
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const jsonResp = await response.json();
        setCategories(jsonResp.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <ItemCard
            id={category.strCategory}
            imgSrc={category.strCategoryThumb}
            item={category.strCategory}
            onItemSelect={selectedCategory}
          />
        ))}
      </div>
    </div>
  );
}
