import styles from "./home.module.css";

const Tenth = () => {
  return (
    <div className={`${styles.ten} container sections-padding`}>
      <h2>Articles & News</h2>
      <div data-aos="zoom-out-right">
        <span>September 15, 2023</span>
        <span>Fitness</span>
        <h3>Exercises to do in your park</h3>
        <p>
        Exercising in a park can be a refreshing and enjoyable
         way to stay fit and active. Here are ten exercises you
          can do in a park, using little to no equipment:
        </p>
        <button>Read More</button>
      </div>
      <div data-aos="zoom-out-right">
        <span>September 15, 2023</span>
        <span>Health</span>
        <h3>Exercises to do in your park</h3>
        <p>
        Exercising in a park can be an excellent way to promote
         overall health and fitness. Here are ten exercises that 
         target various aspects of health:
        </p>
        <button>Read More</button>
      </div>
      <div data-aos="zoom-out-right">
        <span>September 15, 2023</span>
        <span>Nutrition</span>
        <h3>Exercises to do in your park</h3>
        <p>
        Exercise and nutrition are closely related when it comes
         to maintaining a healthy lifestyle. While exercise itself
          doesn't directly impact nutrition, engaging in physical
           activity can encourage better eating habits and support
            overall health.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Tenth;
