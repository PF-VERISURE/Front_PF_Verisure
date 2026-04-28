import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CertificateService from "../../../../services/CertificateService";
import Certificate from "../../../molecules/Certificate/Certificate";

const CertificatePage = () => {
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await CertificateService().getCertificateById(id);
      setCertificate(data);
    };

    fetch();
  }, [id]);

  return <Certificate certificate={certificate} />;
};

export default CertificatePage;