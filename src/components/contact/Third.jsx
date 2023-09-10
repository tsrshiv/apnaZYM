import styles from "./contact.module.css";

const Third = () => {
  return (
    <div className={`${styles.third}  sections-padding`} data-aos="zoom-in">
      <div className={`${styles.third_content} container`}>
        <div>
          <i className="fa-solid fa-phone"></i>
          <h4>Phone</h4>
          <p>Our Contact No</p>
          <p>7357819021</p>
        </div>
        <div>
          <i className="fa-solid fa-envelope"></i>
          <h4>Email</h4>
          <p>Our Business Mail ID</p>
          <p>shivendrav111111@gmail.com</p>
        </div>
        <div>
          <i className="fa-solid fa-location-dot"></i>
          <h4>Location</h4>
          <p>Our Zym Address </p>
          <p>Una, Himachal</p>
        </div>
      </div>
    </div>
  );
};

export default Third;
