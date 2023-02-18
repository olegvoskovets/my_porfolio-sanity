import { motion } from "framer-motion";
import React from "react";

const MotionWrap = (Component, classNames) =>
  function Hoc() {
    return (
      <motion.div
        whileInView={{ y: [100, 0, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
