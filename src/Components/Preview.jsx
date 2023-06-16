import React from "react";
import styles from "./Preview.module.css";
import { useSelector, useDispatch } from "react-redux";
import PhoneIcon from "../icons/phone.svg";
import EmailIcon from "../icons/sign.svg";
import LocationIcon from "../icons/location.svg";
import { Input, Button, InputLabel } from "@mui/material";
import { prevStep } from "../features/stepper/stepperSlice";
import jsPDF from "jspdf";

const Preview = () => {
  const resumeRef = React.useRef(null);
  const [sidebarBGColor, setSidebarBGColor] = React.useState("#959595");
  const [sidebarColor, setSidebarColor] = React.useState("#FFFFFF");
  const { profile, skills, interests, work, education } = useSelector(
    (store) => store
  );
  const dispatch = useDispatch();

  // format date function
  function formatDate(utcDate) {
    const date = new Date(utcDate);
    const month = date.getMonth() + 1;

    return `${month}/${date.getDate()}/${date.getFullYear()}`;
  }

  // Experience Function
  const populateExperience = (experience) => {
    return (
      <>
        <h3 style={{ color: "#204d8b" }}>{experience.title}</h3>
        <div>
          <p style={{ color: "#808080", margin: "0px" }}>
            {experience.organization}, {experience.country}
          </p>
          <p style={{ margin: "0px" }}>
            {formatDate(experience.startDate)} –{" "}
            {formatDate(experience.endDate)}
          </p>
        </div>
        <p>{experience.description}</p>
      </>
    );
  };

  // Education Function
  const populateEducation = (education) => {
    return (
      <li>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "600",
          }}
        >
          <p>{education.institute}</p>

          <p>{formatDate(education.date)}</p>
        </div>
        <p style={{ margin: "0" }}>
          <em>{education.degree} </em> in {education.study}
        </p>
      </li>
    );
  };

  const handleGeneratePdf = () => {
    const doc = new jsPDF("p", "px", [796.8, 1123.2]);

    doc.html(resumeRef.current, {
      async callback(doc) {
        doc.save(`${profile.firstName} Resume`);
      },
    });
  };

  return (
    <>
      <div
        className={styles.container}
        style={{ margin: "40px auto", border: "2px solid red" }}
        ref={resumeRef}
      >
        <div className={styles.resumeRow}>
          {/* ---------------------------sidebar area------------------------------- */}
          <div
            className={styles.sidebar}
            style={{
              backgroundColor: `${sidebarBGColor}`,
              color: `${sidebarColor}`,
            }}
          >
            <h1
              style={{ textAlign: "center" }}
            >{`${profile.firstName} ${profile.lastName}`}</h1>
            <div className={styles.contactSection}>
              <img src={EmailIcon} className={styles.icon} />
              {profile.phone}
            </div>
            <div className={styles.contactSection}>
              <img src={PhoneIcon} className={styles.icon} />
              {profile.email}
            </div>
            <div className={styles.contactSection}>
              <img src={LocationIcon} className={styles.icon} />
              {`${profile.city}, ${profile.country}`}
            </div>

            {/* showing skill */}

            <h2>Skills</h2>
            <ul>
              {skills.skills.map((skill, index) => (
                <li key={index}> {skill} </li>
              ))}
            </ul>

            {/* showing Interests */}

            <h2>Interest</h2>
            <ul>
              {interests.interests.map((interest, index) => (
                <li key={index}> {interest} </li>
              ))}
            </ul>
          </div>
          {/* ---------------------------main area------------------------------- */}
          <div className={styles.main}>
            <h1 className={styles.catagory}> Summary </h1>
            <p>{profile.summary}</p>
            {/* experiences section */}
            <div>
              <h1 className={styles.catagory}>Experience</h1>
              {work.experience &&
                work.experience.map((exp) => populateExperience(exp))}
            </div>
            {/* education section */}
            <div>
              <h1 className={styles.catagory}>Education</h1>
              <ul>
                {education.education.map((edu) => populateEducation(edu))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* back btn to go to previous step  */}
      <div>
        <Button color="inherit" onClick={() => dispatch(prevStep())}>
          Back
        </Button>
      </div>
      {/* download btn for downloading resume  */}
      <Button variant="contained" color="error" onClick={handleGeneratePdf}>
        Download
      </Button>
      {/* buttons for changing sidebar Backgroung & Text color */}
      <div style={{ display: "flex", gap: 10 }}>
        {/* change sidebar background btn  */}
        <div>
          <Button variant="contained">
            <InputLabel
              htmlFor="bg-color"
              sx={{
                color: "white",
              }}
            >
              Sidebar BG Color
            </InputLabel>
            <Input
              type="color"
              id="bg-color"
              value={sidebarBGColor}
              onChange={(e) => setSidebarBGColor(e.target.value)}
            />
          </Button>
        </div>
        {/* change sidebar text color  */}
        <div>
          <Button variant="contained">
            <InputLabel
              htmlFor="text-color"
              sx={{
                color: "white",
              }}
            >
              Sidebar Text Color
            </InputLabel>
            <Input
              type="color"
              id="text-color"
              value={sidebarColor}
              onChange={(e) => setSidebarColor(e.target.value)}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Preview;
