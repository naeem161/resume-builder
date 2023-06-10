import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

const MultiStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    if (activeStep < 5) {
      setActiveStep((currentStep) => currentStep + 1);
    }
  };

  const preStep = () => {
    if (activeStep > 0) {
      setActiveStep((currentStep) => currentStep - 1);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: "5rem",
      }}
    >
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Profile</StepLabel>
        </Step>
        <Step>
          <StepLabel>Work</StepLabel>
        </Step>
        <Step>
          <StepLabel>Education</StepLabel>
        </Step>
        <Step>
          <StepLabel>Skills</StepLabel>
        </Step>
        <Step>
          <StepLabel>Interests</StepLabel>
        </Step>
        <Step>
          <StepLabel>Preview</StepLabel>
        </Step>
      </Stepper>

      <Button sx={{ mt: 4 }} color="primary" onClick={preStep}>
        Back
      </Button>
      <Button sx={{ mt: 4 }} variant="contained" onClick={nextStep}>
        Next
      </Button>
    </Box>
  );
};

export default MultiStepper;
