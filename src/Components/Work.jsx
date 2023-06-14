import { Formik, Form, ErrorMessage, FieldArray } from "formik";
import { TextField, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import * as Yup from "yup";
import "../css/style.css";

const experience = {
  title: "",
  organization: "",
  city: "",
  country: "",
  startDate: "",
  endDate: "",
  description: "",
};
const initialValues = {
  experienceArray: [experience],
};

const validationSchema = Yup.object().shape({
  experienceArray: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Required!"),
      organization: Yup.string().required("Required!"),
      city: Yup.string().required("Required!"),
      country: Yup.string().required("Required!"),
      description: Yup.string(),
      startDate: Yup.date()
        .nullable()
        .required("Required!")
        .test("startDate", "Future Dates are not allowed", (value) => {
          const today = new Date();
          return value?.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
        })
        .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),

      endDate: Yup.date()
        .nullable()
        .min(Yup.ref("startDate"), "End date can't be before Start date")
        .nullable()
        .required("Required!")
        .test("endDate", "Future Dates are not allowed", (value) => {
          const today = new Date();
          return value?.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
        })
        .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),
    })
  ),
});

const onSubmit = (values, formikHelpers) => {
  console.log("Form submitted with values: ", values);
  formikHelpers.setSubmitting(false);
};

const Work = () => {
  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FieldArray name="experienceArray">
              {(arrayHelpers) => (
                <>
                  {formik.values.experienceArray.map((experience, index) => (
                    <Grid
                      key={index}
                      container
                      justifyContent="center"
                      columnGap={2}
                    >
                      {/* title fields  */}
                      <Grid item xs={4} className="item">
                        {formik.values.experienceArray.length > 1 && (
                          <button
                            onClick={() => {
                              arrayHelpers.remove(index);
                            }}
                            type="button"
                          >
                            Remove
                          </button>
                        )}
                        {/* title field  */}
                        <label className="text-input" htmlFor="title">
                          Title
                        </label>
                        <TextField
                          id="title"
                          type="text"
                          fullWidth
                          size="small"
                          name={`experienceArray[${index}].title`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // value={formik.values.experienceArray[index].title}
                          value={experience.title}
                        />
                        <div className="error-text">
                          <ErrorMessage
                            name={`experienceArray[${index}].title`}
                          />
                        </div>
                      </Grid>

                      {/* organisation field  */}
                      <Grid item xs={4} className="item">
                        <label className="text-input" htmlFor="org">
                          Organisation
                        </label>
                        <TextField
                          id="org"
                          type="text"
                          fullWidth
                          size="small"
                          name={`experienceArray[${index}].organization`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={
                            formik.values.experienceArray[index].organization
                          }
                        />
                        <div className="error-text">
                          <ErrorMessage
                            name={`experienceArray[${index}].organization`}
                          />
                        </div>
                      </Grid>
                      {/* city field  */}
                      <Grid item xs={4} className="item">
                        <label className="text-input" htmlFor="city">
                          City
                        </label>
                        <TextField
                          id="city"
                          type="text"
                          fullWidth
                          size="small"
                          name={`experienceArray[${index}].city`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.experienceArray[index].city}
                        />
                        <div className="error-text">
                          <ErrorMessage
                            name={`experienceArray[${index}].city`}
                          />
                        </div>
                      </Grid>
                      {/* country field  */}
                      <Grid item xs={4} className="item">
                        <label className="text-input" htmlFor="country">
                          Country
                        </label>
                        <TextField
                          id="country"
                          fullWidth
                          size="small"
                          type="text"
                          name={`experienceArray[${index}].country`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.experienceArray[index].country}
                        />
                        <div className="error-text">
                          <ErrorMessage
                            name={`experienceArray[${index}].country`}
                          />
                        </div>
                      </Grid>
                      {/* StartDate field  */}
                      <Grid item xs={4} className="item">
                        <label className="text-input" htmlFor="startDate">
                          Start date
                        </label>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            id="startDate"
                            inputFormat="MM/DD/YYYY"
                            fullWidth
                            size="small"
                            name={`experienceArray[${index}].startDate`}
                            onChange={(value) =>
                              formik.setFieldValue(
                                `experienceArray[${index}].startDate`,
                                dayjs(value).toISOString(),
                                value,
                                true
                              )
                            }
                            onBlur={formik.handleBlur}
                            value={
                              formik.values.experienceArray[index].startDate
                            }
                          />
                        </LocalizationProvider>
                        <div className="error-text">
                          <ErrorMessage
                            name={`experienceArray[${index}].startDate`}
                          />
                        </div>
                      </Grid>
                      {/* EndDate field  */}
                      <Grid item xs={4} className="item">
                        <label className="text-input" htmlFor="startDate">
                          End date
                        </label>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            id="startDate"
                            inputFormat="MM/DD/YYYY"
                            name={`experienceArray[${index}].endDate`}
                            onChange={(value) =>
                              formik.setFieldValue(
                                `experienceArray[${index}].endDate`,
                                dayjs(value).toISOString(),
                                value,
                                true
                              )
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.experienceArray[index].endDate}
                            fullWidth
                            size="small"
                          />
                        </LocalizationProvider>
                        <div className="error-text">
                          <ErrorMessage
                            name={`experienceArray[${index}].endDate`}
                          />
                        </div>
                      </Grid>
                      {/* Description field  */}
                      <Grid item xs={8} className="item">
                        <label className="text-input" htmlFor="description">
                          Description
                        </label>
                        <TextField
                          id="description"
                          type="text"
                          name={`experienceArray[${index}].description`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          multiline
                          rows={3}
                          fullWidth
                          size="small"
                          value={
                            formik.values.experienceArray[index].description
                          }
                        />
                        <div className="error-text">
                          <ErrorMessage
                            name={`experienceArray[${index}].description`}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  ))}
                  <button
                    className="btn-outline"
                    onClick={() => {
                      arrayHelpers.push(experience);
                    }}
                    type="button"
                  >
                    Add new friend
                  </button>
                </>
              )}
            </FieldArray>
            {/* <button type="submit">Next</button> */}
            <button type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Submitting..." : "Submit list"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Work;
