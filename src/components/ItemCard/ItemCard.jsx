import styles from './index.module.css'
import { Heading, Box } from '@chakra-ui/react'

export const ItemCard = ({id, imgSrc, item, onItemSelect}) => {
  return (
    <Box className={styles.recipe} onClick={() => onItemSelect(id)} key={id}>
      <img src={imgSrc} alt={item} />
      <Heading size="lg" className={ styles.footer }>{item}</Heading>
    </Box>
  );
}