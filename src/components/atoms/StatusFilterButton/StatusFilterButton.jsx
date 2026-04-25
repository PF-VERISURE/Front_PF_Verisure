import { motion, AnimatePresence } from "framer-motion";
import style from "./StatusFilterButton.module.css";

const StatusFilterButton = ({ label, count, color, isActive, onClick }) => {
  return (
    <button
      className={`${style.btn} ${isActive ? style.active : ""}`}
      onClick={onClick}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            className={style.fill}
            style={{ background: color }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          />
        )}
      </AnimatePresence>

      <span className={style.count} style={{ color: isActive ? "#fff" : color }}>
        {count}
      </span>
      <span className={style.label}>{label}</span>
    </button>
  );
};

export default StatusFilterButton;
