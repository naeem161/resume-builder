import { TagsInput } from "react-tag-input-component";
import { InputLabel, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import "../css/style.css";

const Skills = () => {
  const formik = useFormik({
    initialValues: {
      skills: [],
    },

    onSubmit: (values) => {
      // saving skills in slice
      if (formik.isValid) {
        console.log(values);
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
            placeHolder="enter skills"
            onChange={(value) => {
              formik.setFieldValue("skills", value);
            }}
            formik={formik}
            onBlur={formik.handleBlur}
            value={formik.values.skills}
          />
        </Grid>
      </Grid>

      {/* Next & previous button  */}
      <div className="btn-container">
        <div>
          <Button color="inherit">Back</Button>
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
