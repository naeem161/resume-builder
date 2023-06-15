import { TagsInput } from "react-tag-input-component";
import { InputLabel, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import "../css/style.css";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import { saveSkills } from "../features/skills/skillsSlice";

const validationSchema = Yup.object({
  skills: Yup.array().of(Yup.string()).min(3).required("Required!"),
});

const Skills = () => {
  const dispatch = useDispatch();
  const { skills } = useSelector((store) => store.skills);

  const formik = useFormik({
    initialValues: {
      skills: skills,
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      // saving skills in slice
      if (formik.isValid) {
        dispatch(saveSkills(values));
        dispatch(nextStep());
      }
    },
  });

  return (
    <section style={{ margin: "40px 20px 0px 20px" }}>
      <Grid container justifyContent="center" columnGap={2}>
        <Grid item xs={8} className="item">
          <InputLabel htmlFor="skills" className="text-input">
            Skills
          </InputLabel>
          <TagsInput
            name="skills"
            id="skills"
            placeHolder="enter skills and press Enter"
            onChange={(value) => {
              formik.setFieldValue("skills", value);
            }}
            formik={formik}
            onBlur={formik.handleBlur}
            value={formik.values.skills}
          />
          <div>
            {formik.errors.skills && formik.touched.skills && (
              <small className="error-text">{formik.errors.skills}</small>
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

export default Skills;
