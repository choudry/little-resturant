import { Heading, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./BookingForm.module.css";

const BookingForm = ({ availableTimes, onFormSubmit }) => {
  const validationSchema = Yup.object({
    customerName: Yup.string().required("Name is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .required("Number of guests is required")
      .min(1, "At least 1 guest")
      .max(10, "Maximum 10 guests"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form data", values);
    onFormSubmit(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      customerName: "",
      date: "",
      time: "",
      guests: "",
      occasion: "casual",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  const validInput = () =>
    formik.values["customerName"] &&
    !formik.errors["customerName"] &&
    formik.values["date"] &&
    !formik.errors["date"] &&
    formik.values["time"] &&
    !formik.errors["time"] &&
    formik.values["guests"] &&
    !formik.errors["guests"];

  return (
    <div className={styles.booking_form}>
      <Heading as="h1" size="2xl">
        Reserve your table
      </Heading>
      <form onSubmit={formik.handleSubmit} data-testid="booking-form">
        <label htmlFor="name">
          Name:
          <div className={styles.input_row}>
            <input
              id="name"
              type="name"
              minLength="4"
              placeholder="Customer name"
              {...formik.getFieldProps("customerName")}
            />
            {formik.touched.customerName && formik.errors.customerName ? (
              <div className={styles.error_message}>{formik.errors.customerName}</div>
            ) : null}
          </div>
        </label>

        <label htmlFor="guests">
          Number of guests:
          <div className={styles.input_row}>
            <input id="guests" {...formik.getFieldProps("guests")} type="number" placeholder="4" />
            {formik.touched.guests && formik.errors.guests ? (
              <div className={styles.error_message}>{formik.errors.guests}</div>
            ) : null}
          </div>
        </label>
        <label htmlFor="date">
          Date:
          <div className={styles.input_row}>
            <Input id="date" {...formik.getFieldProps("date")} type="date" />
            {formik.touched.date && formik.errors.date ? (
              <div className={styles.error_message}>{formik.errors.date}</div>
            ) : null}
          </div>
        </label>
        <label htmlFor="time">
          Time:
          <div className={styles.input_row}>
            <select id="time" {...formik.getFieldProps("time")}>
              <option value="" label="Select time" />
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {formik.touched.time && formik.errors.time ? (
              <div className={styles.error_message}>{formik.errors.time}</div>
            ) : null}
          </div>
        </label>
        <label htmlFor="occasion">
          Occasion:
          <div className={styles.input_row}>
            <select
              id="occassion"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occasion}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business</option>
              <option value="casual">Casual</option>
            </select>
            {formik.touched.occasion && formik.errors.occasion ? (
              <div className={styles.error_message}>{formik.errors.occasion}</div>
            ) : null}
          </div>
        </label>
        <button type="submit" disabled={!validInput()} style={{ alignSelf: "center" }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
