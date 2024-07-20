import React from "react";
import Card from "./Card";
import imageCard from "@/assets/Images/app-1.png";

const CardProjects = () => {
  return (
    <div className="  w-full bg-white">
      <div>
        <h1 className="text-[#0079FF] font-semibold">Projects</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          src={imageCard}
          textImage="App Presensi"
          textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quidem ex possimus ut quasi eos iusto "
          href="https://www.youtube.com/"
          textButton="Read more"
        />
        <Card
          src={imageCard}
          textImage="App Presensi"
          textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quidem ex possimus ut quasi eos iusto "
          href="https://www.youtube.com/"
          textButton="Read more"
        />
        <Card
          src={imageCard}
          textImage="App Presensi"
          textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quidem ex possimus ut quasi eos iusto "
          href="https://www.youtube.com/"
          textButton="Read more"
        />
      </div>
    </div>
  );
};
export default CardProjects;
