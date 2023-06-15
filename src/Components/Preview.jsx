import styles from "./Preview.module.css";
import { useSelector } from "react-redux";
import PhoneIcon from "../icons/phone.svg";
import EmailIcon from "../icons/sign.svg";
import LocationIcon from "../icons/location.svg";

const Preview = () => {
  const { profile, skills } = useSelector((store) => store);
  console.log(skills);
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
        </div>
        {/* ---------------------------main area------------------------------- */}
        <div className={styles.main}>
          <h1> Summary </h1>
          <p>{profile.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
