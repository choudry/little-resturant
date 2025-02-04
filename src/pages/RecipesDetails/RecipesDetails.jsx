import { Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.css";
import Iframe from "react-iframe";

export const RecipesDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipeById = async () => {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
        const response = await fetch(url);
        const jsonResp = await response.json();
        setRecipe(jsonResp.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    getRecipeById();
  }, [recipeId]);

  return (
    <div className={styles.container}>
      <Image src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.Image} />
      <Heading size="lg" className={styles.Heading}>
        {recipe.strMeal}
      </Heading>
      <p>{recipe.strInstructions}</p>
      <Heading size="md" className={styles.Heading}>
        How to make it
      </Heading>

      {console.log(`recipe: ${JSON.stringify(recipe)}`)}
      {recipe.strYoutube && (
        <Iframe
          url={recipe.strYoutube.replace("watch?v=", "embed/")}
          width="500"
          height="300"
          id={recipe.idMeal}
          position="relative"
          allowFullScreen
        />
      )}
    </div>
  );
};
