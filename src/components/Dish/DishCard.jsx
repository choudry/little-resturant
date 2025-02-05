import React from 'react'
import styles from "./DishCard.module.css";
import { Button, Card, HStack, Image, Spacer } from "@chakra-ui/react";

export const DishCard = ({ id, title, image, price}) => {
  return (
    <div className={styles.dish_card}>
      <Card.Root maxW="100%" overflow="auto">
        <Image src={image} alt={title} w="100%" h="auto" objectFit="contain" />
        <Card.Body>
          <Card.Title>
            <HStack>
              {title}
              <Spacer />
              ${price}
            </HStack>
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline" size="sm">Add</Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
