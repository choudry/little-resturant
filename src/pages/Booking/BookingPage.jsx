
import BookingForm from "../../components/BookingForm/BookingForm";
import styles from "./BookingPage.module.css";
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../../api/api";
import ConfirmationDialog from "../../components/ConfirmationDialog/ConfirmationDialog";

export const BookingPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const initializeTimes = () => { 
    const date = new Date();
    const availableTimes = fetchAPI(date);
    return { availableTimes };
  }
  

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "ADD_TIME":
        return {
          ...state,
          availableTimes: [...state.availableTimes, action.payload],
        };
      case "REMOVE_TIME":
        return {
          ...state,
          availableTimes: state.availableTimes.filter((time) => time !== action.payload),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());
  
  const submitForm = (data) => { 
    if (submitAPI(data)) {
     dispatch({ type: "REMOVE_TIME", payload: data.time });
     setShowConfirmation(true); 
    }
  }

  return (
    <div className={styles.booking_page}>
      <BookingForm availableTimes={state["availableTimes"]} onFormSubmit={submitForm} />
      {showConfirmation && (
        <ConfirmationDialog
          title="Booking Confirmed"
          description="Your table has been booked. We're looking forward to serve you!"
          showDialog={showConfirmation}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
}
