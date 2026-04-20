import React from 'react'
import style from "./ProjectDetails.module.css"
import ProjectDetail from "../../atoms/ProjectDetail/ProjectDetail"

const ProjectDetails = ({ details }) => {
  return (
    <main className={style.projectDetails}>
      {details.map((item, index) => {
        const Icon = item.icon;

        return (
          <ProjectDetail
            key={index}
            text={item.value} 
            label={item.label} 
            icon={Icon}
            />
        );
      })}
    </main>
  );
};

export default ProjectDetails