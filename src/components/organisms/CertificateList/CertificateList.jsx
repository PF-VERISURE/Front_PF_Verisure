import React, { useEffect, useState } from "react";
import CertificateService from "../../../services/CertificateService";
import CertificateCard from "../../molecules/CertificateCard/CertificateCard";
import style from "./CertificateList.module.css"

const CertificatesList = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await CertificateService().getMyCertificates();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={style.main}>
      {certificates.map((cert) => (
        <CertificateCard
          key={cert.participationId}
          certificate={cert}
        />
      ))}
    </div>
  );
};

export default CertificatesList;