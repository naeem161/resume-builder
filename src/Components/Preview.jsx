import styles from "./Preview.module.css";
import { useSelector } from "react-redux";
import PhoneIcon from "../icons/phone.svg";
import EmailIcon from "../icons/sign.svg";
import LocationIcon from "../icons/location.svg";

const Preview = () => {
  const { profile, skills, interests, work, education } = useSelector(
    (store) => store
  );

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

  return (
    <div
      className={styles.container}
      style={{ margin: "40px auto", border: "2px solid red" }}
    >
      <div className={styles.resumeRow}>
        {/* ---------------------------sidebar area------------------------------- */}
        <div className={styles.sidebar}>
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
          <h1> Summary </h1>
          <p>{profile.summary}</p>
          {/* experiences section */}
          <div>
            <h1>Experience</h1>
            {work.experience &&
              work.experience.map((exp) => populateExperience(exp))}
          </div>
          {/* education section */}
          <div>
            <h1>Education</h1>
            <ul>{education.education.map((edu) => populateEducation(edu))}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
