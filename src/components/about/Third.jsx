import styles from "./about.module.css";
import photo2 from "../../assets/about5.png";

const Third = () => {
  return (
    <div
      className={`${styles.third} container sections-padding`}
      data-aos="fade-right">
      <div className={styles.third_one}>
        <div className={styles.one_content}>
          <p className="paragraph">Welcome</p>
          <h2>
            The Story Behind
            <br />
            Our Gym
          </h2>
          <p>
          Our gym 'apnaZYM' was born from a passion for health and a vision
           of creating a welcoming community where people can transform their
            lives through fitness and well-being.
          </p>
        </div>
        <div className={styles.one_content2}>
          <h3>Story</h3>
          <p>
          ApnaZYM' was founded with a deeply personal mission - 
          to empower individuals in our community to take control
           of their health and fitness, creating a welcoming space
            where everyone feels like they belong on their journey to
             better well-being.
          </p>
          <img src={photo2} alt="" />
        </div>
      </div>
      <div className={styles.third_two}>
        <div className={styles.two_content}>
          <h3>Our Mission</h3>
          <p>
          At 'ApnaZYM,' our mission is to inspire and guide individuals 
          toward their best selves through fitness, community, and holistic well-being.
          </p>
        </div>
        <div className={styles.two_content2}>
          <h3>Our Value</h3>
          <p>
          At 'ApnaZYM,' we are driven by the core value of fostering a 
          supportive, inclusive, and results-driven environment that empowers
           our members to achieve their fitness goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
