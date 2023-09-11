import { useState } from "react";
import styles from "./contact.module.css";

const Four = () => {
  const [active, setActive] = useState(Array(4).fill(false));
  const [activeIndex, setActiveIndex] = useState(-1);

  const paragraphHandler = (index) => {
    setActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={`${styles.four} sections-padding`}>
      <div>
        <div>
          <h4>What are the typical facilities available at a zym?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 0 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(0)}></i>
        </div>
        <p className={active[0] ? styles.active : ""}>
        Gyms (zyms) typically offer a range of facilities, 
        including exercise areas with cardio and strength training 
        equipment, group fitness studios, locker rooms with showers, 
        sauna or steam rooms, and sometimes amenities like a swimming 
        pool or indoor track.
        </p>
      </div>
      <div>
        <div>
          <h4>Are there separate facilities for men and women in zyms?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 1 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(1)}></i>
        </div>
        <p className={active[1] ? styles.active : ""}>
        Most zyms have separate locker rooms, showers, and changing facilities for men and
         women to ensure privacy and comfort.
        </p>
      </div>

      <div>
        <div>
          <h4>Can I book personal training sessions at the zym?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 2 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(2)}></i>
        </div>
        <p className={active[2] ? styles.active : ""}>
        Yes, most zyms have certified personal trainers available
         for one-on-one or group training sessions. You can typically
          book sessions separately or as part of a package.
        </p>
      </div>

      <div>
        <div>
          <h4> Do zyms have Wi-Fi access for members?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 3 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(3)}></i>
        </div>
        <p className={active[3] ? styles.active : ""}>
        Many modern zyms offer Wi-Fi access to members, 
        allowing them to use their devices for entertainment
         or tracking workouts. However, availability can vary.
        </p>
      </div>
    </div>
  );
};

export default Four;
