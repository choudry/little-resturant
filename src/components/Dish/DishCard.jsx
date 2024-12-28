import React from 'react'
import styles from "./DishCard.module.css";
import { Button, Card, HStack, Image, Spacer, Text } from "@chakra-ui/react";

export const DishCard = ({ id, title, description, image, price}) => {
  return (
    <div className={styles.dish_card}>
      <Card.Root maxW="xs" overflow="hidden">
        <Image src={image} alt={title} h="220px" />
        <Card.Body gap="2">
          <Card.Title>
            <HStack>
              {title}
              <Spacer />
              {price}
            </HStack>
          </Card.Title>
          <Card.Description>{description}</Card.Description>
          <Text textStyle="medium" fontWeight="medium" letterSpacing="tight" mt="2">
            Order a delivery
          </Text>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid">Buy now</Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
