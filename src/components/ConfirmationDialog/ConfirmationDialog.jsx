import { Heading } from "@chakra-ui/react";
import styles from "./index.module.css";

const ConfirmationDialog = ({ title, description, showDialog, onClose }) => {
  return (
    showDialog && (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <Heading as="h1" fontWeight={800}>
            {title}
          </Heading>
          <p>{description}</p>
          <button onClick={onClose}>
            Thanks
          </button>
        </div>
      </div>
    )
  );
};

export default ConfirmationDialog;
