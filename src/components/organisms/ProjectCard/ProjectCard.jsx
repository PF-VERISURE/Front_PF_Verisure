import React from 'react'
import ProjectDetails from "../../molecules/ProjectDetails/ProjectDetails"
import DescriptionField from '../../atoms/DescriptionField/DescriptionField'
import style from "./ProjectCard.module.css"
import Tree_planting_Photo from "../../../assets/Tree_planting_Photo.avif";
import CatLogo from '../../atoms/CatLogo/CatLogo';
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton';

const ProjectCard = ({project}) => {
  if (!project) return null;

    const details = [
    { label: "Date", value: project.date || "Sin fecha" },
    { label: "Location", value: project.locationType || "Sin modalidad" },
    { label: "Volunteers", value: project.requiredVolunteers || "Sin número de voluntarios" },
    { label: "Hours", value: project.totalHours || "Sin horas registradas" },
    ];

return (
  <main className={style.card}>
    <img 
      src={project.imageUrl}
      alt="Photo de illustracion del proyecto" 
      className={style.image}
    />

    <section>
      <h1 className={style.title}>{project.title}</h1>
      <DescriptionField text={project.description} />
      <ProjectDetails details={details}/>
    </section>

    <section  className={style.section3}>
      <CatLogo categorie={project.categorie}/>
      <PrimaryButton action="REGISTRAR" className="registrar" /*onClick={onClick}*//>
    </section>
  </main>
)

  // return (
  //   <main className={style.card}>
  //       <img 
  //       src={Tree_planting_Photo} 
  //       alt="Photo de plantación de árboles" 
  //       className={style.image}
  //       />

  //       <section>
  //       <h1 className={style.title}>PLANTAR ÁRBOLES</h1>
  //       <DescriptionField text={"Únete a nuestro evento anual de plantación de árboles organizado por GreenRoots Initiative el sábado 18 de mayo en Riverside Park. Voluntarios están invitados a participar en la plantación de más de 200 árboles nativos, como parte de nuestra misión de restaurar los espacios verdes locales y fomentar la biodiversidad. Nuestro equipo proporcionará todas las herramientas, así como orientación y pequeños talleres sobre prácticas de plantación sostenible, por lo que no se necesita experiencia previa. Disfruta de un ambiente comunitario acogedor con refrigerios y musica."} />
  //       <ProjectDetails />
  //       </section>

  //       <section  className={style.section3}>
  //           <CatLogo categorie="Ciudad_Sostenibles"/>
  //           <PrimaryButton text="REGISTRAR" className="registrar" /*onClick={onClick}*//>
  //       </section>
  //   </main>
  // );
};

export default ProjectCard