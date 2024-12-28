import { use } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import styles from "./BookingPage.module.css";
import { useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from "../../api/api";
import { useNavigate } from "react-router";

export const BookingPage = () => {

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
  const navigate = useNavigate();

  
  const submitForm = (data) => { 
    if (submitAPI(data)) {
     dispatch({ type: "REMOVE_TIME", payload: data.time });
      navigate("/confirmation");
    }
  }

  return (
    <div className={styles.booking_page}>
      <BookingForm availableTimes={state["availableTimes"]} onFormSubmit={ submitForm}  />
    </div>
  );
}
