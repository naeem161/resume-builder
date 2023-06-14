import { Formik, Form, ErrorMessage, FieldArray } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { saveWork } from "../features/work/workSlice";
import { TextField, Grid, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import * as Yup from "yup";
import "../css/style.css";

const experienceEmpty = {
  title: "",
  organization: "",
  city: "",
  country: "",
  startDate: "",
  endDate: "",
  description: "",
};

const validationSchema = Yup.object().shape({
  work: Yup.array().of(
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

const Work = () => {
  const dispath = useDispatch();
  const work = useSelector((store) => store.work);

  const onSubmit = (values, formikHelpers) => {
    // saving experience Array in workSlice
    dispath(saveWork(values));

    formikHelpers.setSubmitting(false);
  };

  const initialValues = { work: work.experience };

  return (
    <section style={{ margin: "40px 20px 0px 20px" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FieldArray name="work">
              {(arrayHelpers) => (
                <>
                  {formik.values.work.map((experience, index) => (
                    <Grid
                      key={index}
                      container
                      justifyContent="center"
                      columnGap={2}
                    >
                      <Grid
                        xs={8}
                        style={{ margin: "20px 0 " }}
                        container
                        justifyContent="space-between"
                      >
                        {/* ////////////////Add More button/////////////////  */}
                        <Button
                          variant="outlined"
                          onClick={() => {
                            arrayHelpers.push(experienceEmpty);
                          }}
                          type="button"
                        >
                          Add More
                        </Button>
                        {/* ////////////////Remove button/////////////////  */}
                        {formik.values.work.length > 1 && (
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

                      <Grid item xs={4} className="item">
                        {/* title field  */}
                        <label className="text-input" htmlFor="title">
                          Title
                        </label>
                        <TextField
                          id="title"
                          type="text"
                          fullWidth
                          size="small"
                          name={`work[${index}].title`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={experience.title}
                        />
                        <div className="error-text">
                          <ErrorMessage name={`work[${index}].title`} />
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
                          name={`work[${index}].organization`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={experience.organization}
                        />
                        <div className="error-text">
                          <ErrorMessage name={`work[${index}].organization`} />
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
                          name={`work[${index}].city`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={experience.city}
                        />
                        <div className="error-text">
                          <ErrorMessage name={`work[${index}].city`} />
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
                          name={`work[${index}].country`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={experience.country}
                        />
                        <div className="error-text">
                          <ErrorMessage name={`work[${index}].country`} />
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
                            name={`work[${index}].startDate`}
                            onChange={(value) =>
                              formik.setFieldValue(
                                `work[${index}].startDate`,
                                dayjs(value).toISOString(),
                                value,
                                true
                              )
                            }
                            onBlur={formik.handleBlur}
                            value={experience.startDate}
                          />
                        </LocalizationProvider>
                        <div className="error-text">
                          <ErrorMessage name={`work[${index}].startDate`} />
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
                            name={`work[${index}].endDate`}
                            onChange={(value) =>
                              formik.setFieldValue(
                                `work[${index}].endDate`,
                                dayjs(value).toISOString(),
                                value,
                                true
                              )
                            }
                            onBlur={formik.handleBlur}
                            value={experience.endDate}
                            fullWidth
                            size="small"
                          />
                        </LocalizationProvider>
                        <div className="error-text">
                          <ErrorMessage name={`work[${index}].endDate`} />
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
                          name={`work[${index}].description`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          multiline
                          rows={3}
                          fullWidth
                          size="small"
                          value={experience.description}
                        />
                        <div className="error-text">
                          <ErrorMessage name={`work[${index}].description`} />
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
                <Button color="inherit">Back</Button>
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

export default Work;
