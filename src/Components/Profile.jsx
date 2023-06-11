import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import Button from "@mui/material/Button";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <>
      {/* next button  */}
      <Button
        sx={{ mt: 4 }}
        color="primary"
        onClick={() => dispatch(prevStep())}
      >
        Back
      </Button>

      {/* previous button  */}
      <Button
        sx={{ mt: 4 }}
        variant="contained"
        onClick={() => dispatch(nextStep())}
      >
        Next
      </Button>
    </>
  );
};

export default Profile;
