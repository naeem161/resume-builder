import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useSelector } from "react-redux";

const MultiStepper = () => {
  const { steps, activeStep } = useSelector((store) => store.stepper);

  return (
    <Box
      sx={{
        width: "100%",
        mt: "5rem",
      }}
    >
      {/* using "activeStep" from stepperSlice */}
      <Stepper activeStep={activeStep}>
        {/* using "steps" from stepperSlice */}
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default MultiStepper;
