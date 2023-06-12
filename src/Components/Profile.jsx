import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import { Button, TextField, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^[0-9()+-]{9,14}$/i,
      "Phone number should be 9-14 digits and contain only numbers, +, - or ()"
    ),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  summary: Yup.string().required("Address is required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  city: "",
  country: "",
  summary: "",
};

// formik onSubmit method
const onSubmit = (values) => {
  console.log("Form submitted with values: ", values);
};

// Profile Component
const Profile = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      {/* ----------------------------Form Start here -------------------------------- */}
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* first name field  */}
          <Grid item xs={6} className="item">
            <label htmlFor="firstName">First Name</label>
            <TextField
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              variant="outlined"
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <small>{formik.errors.firstName}</small>
            )}
          </Grid>

          {/* last name field  */}
          <Grid item xs={6} className="item">
            <label htmlFor="lastName">Last Name</label>
            <TextField
              type="text"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              variant="outlined"
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <small>{formik.errors.lastName}</small>
            )}
          </Grid>

          {/* phone field  */}
          <Grid item xs={6} className="item">
            <label htmlFor="phone"> Phone Number</label>
            <TextField
              type="text"
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              variant="outlined"
            />
            {formik.errors.phone && formik.touched.phone && (
              <small>{formik.errors.phone}</small>
            )}
          </Grid>

          {/* email field  */}
          <Grid item xs={6} className="item">
            <label htmlFor="email"> Email</label>
            <TextField
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              variant="outlined"
            />
            {formik.errors.email && formik.touched.email && (
              <small>{formik.errors.email}</small>
            )}
          </Grid>

          {/* city field  */}
          <Grid item xs={6} className="item">
            <label htmlFor="city"> City</label>
            <TextField
              type="text"
              id="city"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              variant="outlined"
            />
            {formik.errors.city && formik.touched.city && (
              <small>{formik.errors.city}</small>
            )}
          </Grid>

          {/* country field  */}
          <Grid item xs={6} className="item">
            <label htmlFor="country"> Country</label>
            <TextField
              type="text"
              id="country"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
              variant="outlined"
            />
            {formik.errors.country && formik.touched.country && (
              <small>{formik.errors.country}</small>
            )}
          </Grid>

          {/* summary field  */}
          <Grid item xs={6} className="item">
            <label htmlFor="summary"> Summary</label>
            <TextField
              type="text"
              id="summary"
              name="summary"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.summary}
              variant="outlined"
            />
            {formik.errors.summary && formik.touched.summary && (
              <small>{formik.errors.summary}</small>
            )}
          </Grid>
        </Grid>

        {/* submit button  */}
        <button style={{ marginTop: "2rem" }} type="submit">
          Submit
        </button>
      </form>
      {/* ----------------------------Form end here -------------------------------- */}
      {/* next button  */}
      <Button
        sx={{ mt: 4 }}
        color="primary"
        onClick={() => dispatch(prevStep())}
      >
        Back
      </Button>
      {/* previous button  */}
      <Button
        sx={{ mt: 4 }}
        variant="contained"
        onClick={() => dispatch(nextStep())}
      >
        Next
      </Button>
    </>
  );
};

export default Profile;
