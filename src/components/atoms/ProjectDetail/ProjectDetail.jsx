import React from 'react'
import style from "./ProjectDetail.module.css"

const ProjectDetail = ({ text, label, icon: Icon }) => {
  return (
    <div className={style.detail}>
      {Icon && <Icon size={18} />}
      <span>{text}</span>
      <span className={style.tooltip}>{label}</span>
    </div>
  );
};

export default ProjectDetail