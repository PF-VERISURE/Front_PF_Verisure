
import React from 'react'
import ProjectDetail from '../../atoms/ProjectDetail/ProjectDetail'
import style from "./ProjectDetails.module.css"
import { Calendar, MapPin, Users, ClipboardClock } from 'lucide-react'

const ProjectDetails = () => {
  return (
    <main className={style.projectDetails}>
        <section className={style.section}>
            <Calendar/>
            <ProjectDetail text={"12 May"}/>
        </section>

        <section className={style.section}>
            <MapPin/>
            <ProjectDetail text={"Presencial"}/>
        </section>
        
        <section className={style.section}>
            <Users/>
            <ProjectDetail text={"02/20"}/>
        </section>

        <section className={style.section}>
            <ClipboardClock/>
            <ProjectDetail text={"8 horas"}/>
        </section>

    </main>
  )
}

export default ProjectDetails