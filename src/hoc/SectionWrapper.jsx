import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={`${idName}-section`}
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-10`}
      >
        <span className="hash-span" id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
