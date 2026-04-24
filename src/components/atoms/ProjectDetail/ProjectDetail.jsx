import React from 'react'
import style from "./ProjectDetail.module.css"

const ProjectDetail = ({ text, label, icon: Icon }) => {
  return (
    <section className={style.detail}>
      {Icon && <Icon size={18} />}
      <span>{text}</span>
      <span className={style.tooltip}>{label}</span>
    </section>
  );
};

export default ProjectDetail