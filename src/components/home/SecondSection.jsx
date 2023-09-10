import styles from "./home.module.css";
import photo1 from "../../assets/home4.png";
import photo2 from "../../assets/home3.png";
import photo3 from "../../assets/home2.png";
import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <div className={`${styles.second_section} container sections-padding`}>
      <div className={styles.first}>
        <div>
          <p className="paragraph">Our Fitness Training</p>
          <h2>Upcoming Classes</h2>
        </div>
        <div>
          <button>More Class</button>
        </div>
      </div>
      <div className={styles.second}>
        <div>
          <img src={photo1} alt="women in gym" />
          <h3>Pilates Training</h3>
          <p>Pilates offers numerous benefits, including improved posture, reduced risk of injury, increased muscular strength, and enhanced mind-body connection. </p>
          <Link to={"/yogaClass"}>Read More</Link>
        </div>

        <div>
          <img src={photo2} alt="women in gym" />
          <h3>Aerobic Training</h3>
          <p>Aerobic training enhances the efficiency of the heart and lungs, boosts overall stamina, and burns calories, making it an effective way to manage weight and reduce the risk of chronic diseases like heart disease and diabetes. </p>
          <a href="#">Read More</a>
        </div>

        <div>
          <img src={photo3} alt="man in gym" />
          <h3>CrossFit Workout</h3>
          <p>CrossFit workouts, often referred to as WODs (Workout of the Day), are known for their intensity and variety. Participants engage in activities like lifting weights, performing bodyweight exercises, and doing high-intensity interval training (HIIT) in a group setting under the guidance of a certified CrossFit coach. </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
