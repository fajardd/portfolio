import React from "react";
import Card from "./Card";
import imageCard from "@/assets/Images/app-1.png";
import useTruncatetext from "@/hooks/useTruncateText";

const CardProjects = () => {
  const { truncateText } = useTruncatetext();
  const portfolioText =
    "Web portofolio dibangun menggunakan framework Nextjs dan tailwind css";
  const adminPresensiText =
    "Web admin presensi dibangun menggunakan framework Nextjs dan tailwind css";
  const rekamMedisText =
    "Aplikasi rekam medis dibangun menggunakan library reactjs sebagai frontend  halaman admin, expressjs sebagai backend api dan tailwind css sebagai cssnya.";

  return (
    <div className="  w-full bg-white">
      <div>
        <h1 className="text-[#0079FF] font-semibold">Projects</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          src={imageCard}
          textImageLink="/projects/portfolio"
          textImage="Portfolio"
          textContent={truncateText(portfolioText, 80)}
          textButtonLink="/projects/portfolio"
          textButton="Read more"
        />
        <Card
          src={imageCard}
          textImageLink="/projects/admin-presensi"
          textImage="Admin Presensi"
          textContent={truncateText(adminPresensiText, 80)}
          textButtonLink="/projects/admin-presensi"
          textButton="Read more"
        />
        <Card
          src={imageCard}
          textImageLink="/projects/rekam-medis"
          textImage="Rekam Medis"
          textContent={truncateText(rekamMedisText, 80)}
          textButtonLink="/projects/rekam-medis"
          textButton="Read more"
        />
      </div>
    </div>
  );
};
export default CardProjects;
