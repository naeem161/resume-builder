import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import { Button, TextField, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/style.css";

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

// Profile Component
const Profile = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    // formik onSubmit method
    onSubmit: (values) => {
      if (formik.isValid) {
        console.log("Form submitted with values: ", values);
        dispatch(nextStep());
      }
    },
  });

  return (
    <>
      {/* ----------------------------Form Start here -------------------------------- */}

      <form
        onSubmit={formik.handleSubmit}
        style={{ margin: "40px 20px 0px 20px" }}
      >
        <Grid container justifyContent="center" columnGap={2}>
          {/* first name field  */}
          <Grid item xs={4} className="item">
            <label className="text-input" htmlFor="firstName">
              First Name
            </label>
            <TextField
              size="small"
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              variant="outlined"
              fullWidth
            />
            <div>
              {formik.errors.firstName && formik.touched.firstName && (
                <small className="error-text">{formik.errors.firstName}</small>
              )}
            </div>
          </Grid>

          {/* last name field  */}
          <Grid item xs={4} className="item">
            <label className="text-input" htmlFor="lastName">
              Last Name
            </label>
            <TextField
              size="small"
              type="text"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              variant="outlined"
              fullWidth
            />
            <div>
              {formik.errors.lastName && formik.touched.lastName && (
                <small className="error-text">{formik.errors.lastName}</small>
              )}
            </div>
          </Grid>

          {/* phone field  */}
          <Grid item xs={4} className="item">
            <label className="text-input" htmlFor="phone">
              Phone Number
            </label>
            <TextField
              size="small"
              type="text"
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              variant="outlined"
              fullWidth
            />
            <div>
              {formik.errors.phone && formik.touched.phone && (
                <small className="error-text">{formik.errors.phone}</small>
              )}
            </div>
          </Grid>

          {/* email field  */}
          <Grid item xs={4} className="item">
            <label className="text-input" htmlFor="email">
              Email
            </label>
            <TextField
              size="small"
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              variant="outlined"
              fullWidth
            />
            <div>
              {formik.errors.email && formik.touched.email && (
                <small className="error-text">{formik.errors.email}</small>
              )}
            </div>
          </Grid>

          {/* city field  */}
          <Grid item xs={4} className="item">
            <label className="text-input" htmlFor="city">
              City
            </label>
            <TextField
              size="small"
              type="text"
              id="city"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              variant="outlined"
              fullWidth
            />
            <div>
              {formik.errors.city && formik.touched.city && (
                <small className="error-text">{formik.errors.city}</small>
              )}
            </div>
          </Grid>

          {/* country field  */}
          <Grid item xs={4} className="item">
            <label className="text-input" htmlFor="country">
              Country
            </label>
            <TextField
              size="small"
              type="text"
              id="country"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
              variant="outlined"
              fullWidth
            />
            <div>
              {formik.errors.country && formik.touched.country && (
                <small className="error-text">{formik.errors.country}</small>
              )}
            </div>
          </Grid>

          {/* summary field  */}
          <Grid item xs={8} className="item">
            <label className="text-input" htmlFor="summary">
              Summary
            </label>
            <TextField
              size="small"
              type="text"
              id="summary"
              name="summary"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.summary}
              variant="outlined"
              multiline
              rows={3}
              fullWidth
            />
            <div>
              {formik.errors.summary && formik.touched.summary && (
                <small className="error-text">{formik.errors.summary}</small>
              )}
            </div>
          </Grid>
        </Grid>

        {/* previous button  */}
        <div className="btn-container">
          <div>
            <Button color="inherit" onClick={() => dispatch(prevStep())}>
              Back
            </Button>
          </div>
          <div>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </div>
        </div>
      </form>
      {/* ----------------------------Form end here -------------------------------- */}
    </>
  );
};

export default Profile;
