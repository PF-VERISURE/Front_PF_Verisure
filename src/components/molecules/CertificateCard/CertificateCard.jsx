import style from "./CertificateCard.module.css";
import ProjectDetail from "../../atoms/ProjectDetail/ProjectDetail";
import CatLogo from "../../atoms/CatLogo/CatLogo";
import { Calendar, ClipboardClock} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Certificate = ({ certificate }) => {
    const navigate = useNavigate();


    if (!certificate) {
    return <p>No certificado disponible de momento</p>;
    }

    return (
    <section 
        className={style.diploma} 
        onClick={() => navigate(`/voluntario/certificados/${certificate.participationId}`)}>

        <section  className={style.title}>
            <h2>{certificate.gnoName}</h2>
            <strong>{certificate.projectTitle}</strong>
        </section>

        {certificate.sdgs?.length > 0 && (
                <div className={style.sdgs}>
                    {certificate.sdgs.map((sdg, index) => (
                    <CatLogo key={index} categorie={sdg} />
                    ))}
                </div>
                )}

    <section className={style.details}>
        <ProjectDetail
        text={`${certificate.loggedHours} h`}
        icon={ClipboardClock}
        />

        <ProjectDetail
        text={new Date(certificate.endDate).toLocaleDateString()}
        icon={Calendar}
        />
    </section>
    </section>
  );
};

export default Certificate;