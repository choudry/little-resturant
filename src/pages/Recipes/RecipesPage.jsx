import { useEffect, useState } from "react";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const { category } = useParams();
  const navigate  = useNavigate();

  const openRecipeDetails = (recipeId) => {
    navigate(`/recipes-category/${category}/${recipeId}`);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const jsonResp = await response.json();
        console.log(jsonResp);
        setRecipes(jsonResp.meals);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className={styles.container}>
      {recipes.map((recipe) => (
        <ItemCard
          id={recipe.idMeal}
          imgSrc={recipe.strMealThumb}
          item={recipe.strMeal}
          onItemSelect={openRecipeDetails}
          key={recipe.idMeal}
        />
      ))}
    </div>
  );
};
