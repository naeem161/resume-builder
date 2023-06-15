// import { Container, Box } from "@mui/material";
import styles from "./Preview.module.css";

const Preview = () => {
  return (
    <div
      className={styles.container}
      style={{ margin: "40px auto", border: "2px solid red" }}
    >
      <div className={styles.resumeRow}>
        {/* ---------------------------sidebar area------------------------------- */}
        <div className={styles.sidebar}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
          laborum?
        </div>
        {/* ---------------------------main area------------------------------- */}
        <div className={styles.main}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam velit
            porro pariatur harum quaerat qui in reprehenderit error minus amet
            voluptatem enim aliquam numquam architecto, delectus eaque,
            perferendis odio sint?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
