import styles from "./home.module.css";

import photo1 from "../../assets/home5.png";
import photo2 from "../../assets/home6.png";
import photo3 from "../../assets/home7.jpg";
import { useNavigate } from "react-router";

const FourthSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.fourth} container sections-padding`}>
      <div
        className={styles.text}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <p className="paragraph">About</p>
        <h2>
          Respect Your Body,
          <br />
          It’s the Only One You Get
        </h2>
        <p>
        Our bodies are unique and invaluable vessels that carry us through life's journey. 
        To respect our bodies means nourishing them with proper nutrition, regular exercise,
         and adequate rest.
        </p>
        <div className={styles.text_one}>
          <div>
            <h3>Motivation</h3>
            <p>
            Every drop of sweat brings you closer to your goals. Keep moving, keep pushing, and let the gym be your path to a stronger, healthier, and happier you{" "}
            </p>
          </div>
          <img src={photo1} alt="Photo one" />
        </div>
        <div className={styles.text_two}>
          <img src={photo2} alt="Photo two" />
          <div>
            <h3>Inspire</h3>
            <p>Zym, may your journey through life be filled with the bubbling enthusiasm of creativity, the fermenting power of growth, and the intoxicating joy of discovery.</p>
          </div>
        </div>
      </div>
      <div
        className={styles.fourth_image_container}
        data-aos="fade-up"
        data-aos-duration="3000">
        <img src={photo3} alt="Man Exercise" />
        <button onClick={() => navigate("/schedule")}>Get Started</button>
      </div>
    </div>
  );
};

export default FourthSection;
