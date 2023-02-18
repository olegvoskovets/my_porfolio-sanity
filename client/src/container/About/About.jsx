import "./about.scss";
import { motion } from "framer-motion";
import About1 from "../../assets/images/about1.jpg";
import About2 from "../../assets/images/about5.jpg";
import About3 from "../../assets/images/about8.jpg";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

const abouts = [
  {
    title: "Web Development",
    descriptiont: "Я зможу Вам допомогти створити сайти",
    imgURL: About1,
  },
  {
    title: "BackEnd Development",
    descriptiont: "Я зможу Вам допомогти створити соціальні мережі",
    imgURL: About2,
  },
  {
    title: "Web Design",
    descriptiont: "Я зможу Вам допомогти створити красоту",
    imgURL: About3,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Я знаю, як що
        <span> гарний дизайн </span>
        <br />
        ,то
        <span>гарний Бізнес</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, ind) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + ind}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.descriptiont}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
