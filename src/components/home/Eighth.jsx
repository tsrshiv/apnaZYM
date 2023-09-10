import styles from "./home.module.css";
import photo from "../../assets/Video.png";

const Eighth = () => {
  return (
    <div className={styles.eight}>
      <div className={`${styles.eight_content} container sections-padding`}>
        <div className={styles.eight_first}>
          <p>Gym Amenities</p>
          <h2>The Unique Standard</h2>
          <p>
          Zym sets a unique standard in the fitness industry by prioritizing personalized wellness.
           Each member receives a customized fitness plan tailored to their goals and needs,
            ensuring that every workout is effective and efficient. 
          </p>
          <img src={photo} alt="" />
        </div>
        <div className={styles.eight_second}>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Lockers
            </h5>
            <p>Secure lockers that work by you choosing a four digit code.</p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Changing Rooms
            </h5>
            <p>
            Zym's changing room facility offers a clean and spacious environment,
             providing members with convenience and comfort before and after their workouts.
            </p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Fuel Bar
            </h5>
            <p>
            Zym's fuel bar serves as a refreshing oasis, providing members with a variety of
             nutritious and energizing options to refuel and recharge after their workouts.
            </p>
          </div>
          
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Wifi & Restrooms
            </h5>
            <p>At Zym, members enjoy the convenience of Wi-Fi access and clean, 
              well-maintained restrooms to enhance their comfort and connectivity during their fitness journey.</p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Hot Showers & Hair Care
            </h5>
            <p>
            Zym's hot shower facility offers members a soothing and refreshing post-workout experience, ensuring they leave feeling 
            rejuvenated and ready to conquer the day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eighth;
