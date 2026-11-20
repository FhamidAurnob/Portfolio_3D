import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SectionHead = ({ index, sub, title, accent, center = false }) => (
  <motion.div variants={textVariant()} className={`relative ${center ? "text-center" : ""}`}>
    <span className={`outline-text font-display font-extrabold text-[90px] sm:text-[140px] leading-none absolute -top-10 sm:-top-16 ${center ? "left-1/2 -translate-x-1/2" : "-left-2"} select-none pointer-events-none`}>
      {index}
    </span>
    <p className={`${styles.sectionSubText} relative`}>{sub}</p>
    <h2 className={`${styles.sectionHeadText} relative mt-3`}>
      {title} {accent && <span className="text-gradient">{accent}</span>}
    </h2>
  </motion.div>
);

export default SectionHead;
