import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const MultiStepper = () => {
  // getting 'step' state from stepperSlice
  const { steps } = useSelector((store) => store.stepper);
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
        {/* using "steps" from stepperSlice */}
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
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
