import styles from "./home.module.css";
import photo1 from "../../assets/s1.jpg";
import photo2 from "../../assets/s2.jpg";
import photo3 from "../../assets/quet.png";

// import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Sixth = () => {
  return (
    <div
      className={`${styles.six} sections-padding`}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom">
      <div className={`${styles.six_content} container `}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}>
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.six_image_holder}>
                <img src={photo1} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.six_text}>
                <h4>Rohit</h4>
                <p>Athletics /Trainer</p>
                <div className={styles.starts}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                As an athletics trainer, I've had the privilege of working with client
                s at many gyms, and I must say that apnaZYM stands out as an exceptional fitness facility.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.six_image_holder}>
                <img src={photo2} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.six_text}>
                <h4>Sachin</h4>
                <p>Athletics /Trainer</p>
                <div className={styles.starts}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                The equipment at apnaZYM is top-notch. Cardio machines to a
                 wide array of strength training equipment, it offers everything
                 an athlete or fitness enthusiast could ask
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.six_image_holder}>
                <img src={photo1} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.six_text}>
                <h4>Dileep</h4>
                <p>Athletics /Trainer</p>
                <div className={styles.starts}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                The variety of classes offered is impressive, catering to a wide
                 range of interests and fitness levels. From high-intensity interval
                  training to yoga and everything in between
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.six_image_holder}>
                <img src={photo2} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.six_text}>
                <h4>Nattasha</h4>
                <p>Athletics /Trainer</p>
                <div className={styles.starts}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sixth;
