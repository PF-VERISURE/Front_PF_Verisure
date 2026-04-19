
import React from 'react'
import ProjectDetail from '../../atoms/ProjectDetail/ProjectDetail'
import style from "./ProjectDetails.module.css"
import { Calendar, MapPin, Users, ClipboardClock } from 'lucide-react'

const ProjectDetails = ({ details }) => {
    return (
        <div>
        {(details || []).map((item, index) => (
            <ProjectDetail
            key={index}
            text={`${item.label}: ${item.value}`}
            />
        ))}
        </div>
    );
    };

export default ProjectDetails