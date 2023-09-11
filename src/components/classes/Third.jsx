import { useNavigate } from "react-router";
import styles from "./classes.module.css";

const Third = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.third} data-aos="zoom-in">
      <div>
        <h2>Join Our Club</h2>
        <p>
        Join our gym club today and unlock the door to a healthier,
         stronger, and more confident you – the journey starts here!
        </p>
        <button onClick={() => navigate("/schedule")}>Start Now</button>
      </div>
    </div>
  );
};

export default Third;
