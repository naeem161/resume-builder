import MultiStepper from "./Components/MultiStepper";
import Profile from "./Components/Profile";
import Work from "./Components/Work";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Interests from "./Components/Interests";
import Preview from "./Components/Preview";
import { useSelector } from "react-redux";

function App() {
  const { activeStep } = useSelector((store) => store.stepper);

  // function for render all the froms according to the 'Active Step'
  const renderForm = (currentActiveStep) => {
    switch (currentActiveStep) {
      case 0:
        return <Profile />;
      case 1:
        return <Work />;
      case 2:
        return <Education />;
      case 3:
        return <Skills />;
      case 4:
        return <Interests />;
      case 5:
        return <Preview />;

      default:
        break;
    }
  };

  return (
    <>
      <MultiStepper />
      {renderForm(activeStep)}
    </>
  );
}

export default App;
