import { TextField, Grid, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Formik, Form, ErrorMessage, FieldArray } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { prevStep, nextStep } from "../features/stepper/stepperSlice";
import { saveEducation } from "../features/education/educationSlice";
import * as Yup from "yup";
import "../css/style.css";

// formik validation
const validationSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      institute: Yup.string().required("Required!"),
      degree: Yup.string().required("Required!"),
      study: Yup.string().required("Required!"),
      date: Yup.date()
        .nullable()
        .test("date", "Future Dates are not allowed", (value) => {
          const today = new Date();
          return value?.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
        })
        .transform((v) => (v instanceof Date && !isNaN(v) ? v : null))
        .required("Required!"),
    })
  ),
});

const EducationEmptyObj = {
  institute: "",
  degree: "",
  study: "",
  date: "",
};

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector((store) => store.education);
  const initialValues = { education: education.education };

  return (
    <section style={{ margin: "40px 20px 0px 20px" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log("form values ", values);
          formikHelpers.setSubmitting(false);
          dispatch(nextStep());
          dispatch(saveEducation(values));
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <FieldArray name="education">
              {(arrayHelpers) => (
                <>
                  {formik.values.education.map((edu, index) => (
                    <Grid
                      key={index}
                      container
                      justifyContent="center"
                      columnGap={2}
                    >
                      <Grid
                        xs={8}
                        style={{ margin: "20px 0 " }}
                        item
                        justifyContent="flex-end"
                      >
                        {/* ////////////////Add More button/////////////////  */}
                        <Button
                          variant="outlined"
                          onClick={() => {
                            arrayHelpers.push(EducationEmptyObj);
                          }}
                          type="button"
                        >
                          Add More
                        </Button>
                        {/* ////////////////Remove button/////////////////  */}
                        {formik.values.education.length > 1 && (
                          <Button
                            size="small"
                            variant="outlined"
                            color="error"
                            onClick={() => {
                              arrayHelpers.remove(index);
                            }}
                            type="button"
                          >
                            Remove
                          </Button>
                        )}
                      </Grid>

                      {/* Institute fields  */}
                      <Grid item xs={4} className="item">
                        <label className="text-input" htmlFor="insititute">
                          Insititute Name
                        </label>
                        <TextField
                          id="insititute"
                          type="text"
                          fullWidth
                          size="small"
                          name={`education[${index}].institute`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={edu.institute}
                        />
                        <div className="error-text">
                          <ErrorMessage
                            name={`education[${index}].institute`}
                          />
                        </div>
                      </Grid>

                      {/* Degree  */}
                      <Grid item xs={4} className="item">
                        <label className="text-input" htmlFor="degree">
                          Degree
                        </label>
                        <TextField
                          id="degree"
                          type="text"
                          fullWidth
                          size="small"
                          name={`education[${index}].degree`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={edu.degree}
                        />
                        <div className="error-text">
                          <ErrorMessage name={`education[${index}].degree`} />
                        </div>
                      </Grid>

                      {/*  study   */}
                      <Grid item xs={4} className="item">
                        <label className="text-input" htmlFor="study">
                          Study Category
                        </label>
                        <TextField
                          id="study"
                          type="text"
                          fullWidth
                          size="small"
                          name={`education[${index}].study`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={edu.study}
                        />
                        <div className="error-text">
                          <ErrorMessage name={`education[${index}].study`} />
                        </div>
                      </Grid>

                      {/* date field  */}
                      <Grid item xs={4} className="item">
                        <label className="text-input" htmlFor="date">
                          Date
                        </label>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            id="date"
                            inputFormat="MM/DD/YYYY"
                            fullWidth
                            size="small"
                            name={`education[${index}].date`}
                            onChange={(value) =>
                              formik.setFieldValue(
                                `education[${index}].date`,
                                dayjs(value).toISOString(),
                                value,
                                true
                              )
                            }
                            onBlur={formik.handleBlur}
                            value={edu.date}
                          />
                        </LocalizationProvider>
                        <div className="error-text">
                          <ErrorMessage name={`education[${index}].date`} />
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                </>
              )}
            </FieldArray>
            {/* ////////////////Next button/////////////////  */}
            {/* not functional yet  */}
            <div className="btn-container">
              <div>
                <Button color="inherit" onClick={() => dispatch(prevStep())}>
                  Back
                </Button>
              </div>
              <div>
                {/* ////////////////Next button/////////////////  */}
                <Button
                  type="submit"
                  disabled={formik.isSubmitting}
                  variant="contained"
                >
                  {formik.isSubmitting ? "Submitting..." : "Next"}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Education;
