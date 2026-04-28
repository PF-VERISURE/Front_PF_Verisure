import { motion } from "framer-motion";
import style from "./ProjectDetail.module.css"

const ProjectDetail = ({ text, icon: Icon }) => {
  return (
    <motion.section
      className={style.detail}
      whileHover={{ y: -3, boxShadow: "0 6px 16px rgba(99,102,241,0.18)" }}
      transition={{ type: "spring", stiffness: 340, damping: 22 }}
    >
      <div className={style.iconRow}>
        {Icon && <Icon size={13} />}
        <span className={style.value}>{text}</span>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;
