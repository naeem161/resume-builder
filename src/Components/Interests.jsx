import { TagsInput } from "react-tag-input-component";
import { InputLabel, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import "../css/style.css";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import { saveInterests } from "../features/interests/interestsSlice";

const validationSchema = Yup.object({
  interests: Yup.array().of(Yup.string()).min(3).required("Required!"),
});

const Interests = () => {
  const dispatch = useDispatch();
  const { interests } = useSelector((store) => store.interests);

  const formik = useFormik({
    initialValues: {
      interests: interests,
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        dispatch(saveInterests(values));
        dispatch(nextStep());
      }
    },
  });

  return (
    <section style={{ margin: "40px 20px 0px 20px" }}>
      <Grid container justifyContent="center" columnGap={2}>
        <Grid item xs={8} className="item">
          <InputLabel htmlFor="interests" className="text-input">
            Interests
          </InputLabel>
          <TagsInput
            name="interests"
            id="interests"
            placeHolder="enter interests and press Enter"
            onChange={(value) => {
              formik.setFieldValue("interests", value);
            }}
            formik={formik}
            onBlur={formik.handleBlur}
            value={formik.values.interests}
          />
          <div>
            {formik.errors.interests && formik.touched.interests && (
              <small className="error-text">{formik.errors.interests}</small>
            )}
          </div>
        </Grid>
      </Grid>

      {/* Next & previous button  */}
      <div className="btn-container">
        <div>
          <Button color="inherit" onClick={() => dispatch(prevStep())}>
            Back
          </Button>
        </div>
        <div>
          <Button
            onClick={() => formik.handleSubmit()}
            type="submit"
            variant="contained"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Interests;
